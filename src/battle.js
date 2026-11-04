import * as THREE from 'three'
import {
  MOVES, SPECIES, TYPES, TREATS, typeMultiplier, statsFor, movesFor, xpToNext,
  makeCreature, regionById
} from './data.js'
import { buildCreature, makeGlowTexture } from './art.js'
import { makeBattleArena } from './world.js'

const $ = (id) => document.getElementById(id)
const delay = (ms) => new Promise(r => setTimeout(r, ms))
const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const ease = (t) => 1 - Math.pow(1 - t, 3)

export class Battle {
  constructor(game, config) {
    this.game = game
    this.config = config
    this.region = regionById(config.regionId || game.state.player.regionId)
    this.isGym = config.type === 'gym'
    this.abort = new AbortController()
    this.effects = []
    this.phase = 'intro'
    this.round = 1
    this.busy = false
    this.focus = 8
    this.maxFocus = 10
    this.shake = 0
    this.turnCount = 0
    this.playerStatuses = []
    this.enemyStatuses = []
    this.levelUps = []
    this.logLines = []
    this.tempPick = null

    const party = game.state.player.party
    this.activeIdx = party.findIndex(c => c.hp > 0)
    if (this.activeIdx < 0) this.activeIdx = 0
    this.playerCreature = party[this.activeIdx]
    game.state.player.activeIndex = this.activeIdx

    if (config.type === 'wild') {
      const w = config.wild
      const st = statsFor(SPECIES[w.speciesId], w.level)
      this.enemyTeam = [{ speciesId: w.speciesId, level: w.level, hp: st.hp, maxHp: st.hp, statuses: [] }]
      this.wild = w
    } else {
      this.enemyTeam = config.gym.team.map(m => {
        const st = statsFor(SPECIES[m.species], m.level)
        return { speciesId: m.species, level: m.level, hp: st.hp, maxHp: st.hp, statuses: [] }
      })
      this.gym = config.gym
    }
    this.enemyIdx = 0
    this.enemy = this.enemyTeam[0]
    this.arena = makeBattleArena(this.region)
    this.playerModel = null
    this.enemyModel = null
    this.buildModels()
    this.bindUI()
    game.enterBattleMode(this)
    game.showBattleUI(true)
    this.setupUI()
    this.log(`A wild ${this.enemyName()} appeared!`, false)
    if (this.isGym) this.log(`<b>${this.gym.leader}</b> sends out ${this.enemyName()}!`, false)
    this.renderMoves()
    this.updateUI()
    this.phase = 'select'
    setTimeout(() => { if (!this.destroyed) this.updateUI() }, 50)
  }

  enemyName() { return SPECIES[this.enemy.speciesId].name }

  buildModels() {
    if (this.playerModel) {
      this.arena.scene.remove(this.playerModel)
      this.playerModel = null
    }
    if (this.enemyModel) {
      this.arena.scene.remove(this.enemyModel)
      this.enemyModel = null
    }
    this.pBase = new THREE.Vector3(-5.2, 0.05, 2.2)
    this.eBase = new THREE.Vector3(5.0, 0.05, -2.2)
    this.playerModel = buildCreature(this.playerCreature.speciesId, { aura: true })
    this.playerModel.position.copy(this.pBase)
    this.playerModel.lookAt(this.eBase.x, 0, this.eBase.z)
    this.arena.scene.add(this.playerModel)

    this.enemyModel = buildCreature(this.enemy.speciesId, { aura: true })
    this.enemyModel.position.copy(this.eBase)
    this.enemyModel.lookAt(this.pBase.x, 0, this.pBase.z)
    this.arena.scene.add(this.enemyModel)

    const pGlow = new THREE.PointLight(TYPES[SPECIES[this.playerCreature.speciesId].type].color, 6, 14, 2)
    pGlow.position.set(-4, 3, 2)
    this.arena.scene.add(pGlow)
    this.pGlow = pGlow
    const eGlow = new THREE.PointLight(TYPES[SPECIES[this.enemy.speciesId].type].color, 6, 14, 2)
    eGlow.position.set(4, 3, -2)
    this.arena.scene.add(eGlow)
    this.eGlow = eGlow
  }

  bindUI() {
    const signal = this.abort.signal
    $('move-grid').addEventListener('click', (e) => {
      const b = e.target.closest('[data-move]')
      if (b) this.useMove(b.dataset.move)
    }, { signal })
    $('btn-capture').addEventListener('click', () => this.openTreatPicker(), { signal })
    $('btn-swap').addEventListener('click', () => this.openSwapPicker(), { signal })
    $('btn-brace').addEventListener('click', () => this.brace(), { signal })
    $('btn-run').addEventListener('click', () => this.tryFlee(), { signal })
    $('battle-help').addEventListener('click', () => this.showHelp(), { signal })
    $('battle-sound').addEventListener('click', () => { this.game.audio.toggle(); this.game.toast(this.game.audio.enabled ? 'Sound on' : 'Sound muted', '♪') }, { signal })
  }

  setupUI() {
    const el = $('battle-region')
    el.textContent = `${this.region.name.toUpperCase()} · ${this.isGym ? 'GYM BATTLE' : 'WILD ENCOUNTER'}`
    $('battle-turn').textContent = '1'
    $('battle-feed').innerHTML = ''
    this.logLines = []
    $('battle-result').classList.add('hidden')
    $('battle-result').innerHTML = ''
    $('treat-picker').classList.add('hidden')
    $('battle-command').classList.remove('hidden')
    $('enemy-panel').style.opacity = '1'
    $('player-panel').style.opacity = '1'
    const enemyType = TYPES[SPECIES[this.enemy.speciesId].type]
    $('enemy-panel').style.borderColor = enemyType.color + '55'
    $('player-panel').style.borderColor = TYPES[SPECIES[this.playerCreature.speciesId].type].color + '55'
    $('enemy-type-icon').textContent = enemyType.icon
    $('enemy-type-icon').style.color = enemyType.color
    $('player-type-icon').textContent = TYPES[SPECIES[this.playerCreature.speciesId].type].icon
    $('player-type-icon').style.color = TYPES[SPECIES[this.playerCreature.speciesId].type].color
    $('enemy-name').textContent = SPECIES[this.enemy.speciesId].name
    $('enemy-level').textContent = `LV ${this.enemy.level}`
    $('player-battle-name').textContent = SPECIES[this.playerCreature.speciesId].name
    $('player-level').textContent = `LV ${this.playerCreature.level}`
    this.renderMoves()
    this.updateTeamPips()
    this.updateUI()
  }

  renderMoves() {
    const grid = $('move-grid')
    const moves = movesFor(SPECIES[this.playerCreature.speciesId], this.playerCreature.level)
    grid.innerHTML = ''
    for (const id of moves) {
      const m = MOVES[id]
      const t = TYPES[m.type]
      const btn = document.createElement('button')
      btn.className = 'move-btn'
      btn.dataset.move = id
      btn.style.setProperty('--mc', t.color)
      btn.disabled = this.phase !== 'select' || this.focus < m.cost
      btn.innerHTML = `
        <div class="mv-top"><b>${m.name}</b><span class="mv-type">${t.name}</span></div>
        <div class="mv-bottom"><span>${m.power ? 'PWR ' + m.power : m.heal ? 'MEND' : m.selfStatus ? 'BUFF' : 'SUPPORT'}</span><span class="mv-cost">${m.signature ? '✦ ' : ''}${m.cost} FOCUS</span></div>`
      grid.appendChild(btn)
    }
  }

  updateTeamPips() {
    const pips = $('enemy-team')
    pips.innerHTML = ''
    if (this.enemyTeam.length <= 1) { pips.style.display = 'none'; return }
    pips.style.display = 'flex'
    this.enemyTeam.forEach((e, i) => {
      const i2 = document.createElement('i')
      i2.className = e.hp > 0 ? (i === this.enemyIdx ? 'alive' : '') : 'fainted'
      pips.appendChild(i2)
    })
  }

  updateUI() {
    if (this.destroyed) return
    const pst = statsFor(SPECIES[this.playerCreature.speciesId], this.playerCreature.level)
    const est = statsFor(SPECIES[this.enemy.speciesId], this.enemy.level)
    $('enemy-hp').style.width = `${clamp(this.enemy.hp / this.enemy.maxHp * 100, 0, 100)}%`
    $('player-hp').style.width = `${clamp(this.playerCreature.hp / pst.hp * 100, 0, 100)}%`
    $('enemy-hp-text').textContent = `${Math.max(0, Math.round(this.enemy.hp))} / ${this.enemy.maxHp}`
    $('player-hp-text').textContent = `${Math.max(0, Math.round(this.playerCreature.hp))} / ${pst.hp}`
    $('player-hp').classList.toggle('low', this.playerCreature.hp / pst.hp < 0.25)
    $('battle-turn').textContent = String(this.round)
    $('enemy-level').textContent = `LV ${this.enemy.level}`
    $('player-level').textContent = `LV ${this.playerCreature.level}`
    $('enemy-name').textContent = SPECIES[this.enemy.speciesId].name
    $('player-battle-name').textContent = SPECIES[this.playerCreature.speciesId].name
    $('enemy-type-icon').textContent = TYPES[SPECIES[this.enemy.speciesId].type].icon
    $('enemy-type-icon').style.color = TYPES[SPECIES[this.enemy.speciesId].type].color
    $('player-type-icon').textContent = TYPES[SPECIES[this.playerCreature.speciesId].type].icon
    $('player-type-icon').style.color = TYPES[SPECIES[this.playerCreature.speciesId].type].color
    $('enemy-status').textContent = this.statusText(this.enemy.statuses)
    $('player-status').textContent = this.statusText(this.playerStatuses)
    const totalTreats = Object.values(this.game.state.player.treats).reduce((a, b) => a + b, 0)
    $('treat-count').textContent = totalTreats
    const pips = $('focus-pips')
    pips.innerHTML = ''
    for (let i = 0; i < this.maxFocus; i++) {
      const p = document.createElement('i')
      if (i < this.focus) p.className = 'on'
      pips.appendChild(p)
    }
    this.renderMoves()
    this.updateTeamPips()
    $('btn-capture').disabled = this.isGym
    $('btn-capture').style.opacity = this.isGym ? '0.35' : '1'
    $('btn-run').disabled = this.isGym
    $('btn-run').style.opacity = this.isGym ? '0.35' : '1'
  }

  statusText(statuses) {
    if (!statuses?.length) return ''
    return statuses.map(s => `${s.icon || ''} ${s.name || s.id}`.trim()).join(' · ')
  }

  addStatus(target, id, turns = 3) {
    const existing = target.find(s => s.id === id)
    if (existing) { existing.turns = Math.max(existing.turns, turns); return false }
    const meta = { scorch: { name: 'Scorched', icon: '♨' }, chill: { name: 'Chilled', icon: '❄' }, static: { name: 'Static', icon: 'ϟ' }, root: { name: 'Rooted', icon: '❧' }, guard: { name: 'Guarded', icon: '◈' }, fury: { name: 'Fury', icon: '⟡' }, haste: { name: 'Haste', icon: '»' } }[id]
    target.push({ id, turns, name: meta?.name || id, icon: meta?.icon || '•' })
    return true
  }

  hasStatus(list, id) { return list.some(s => s.id === id) }

  log(text, sound = true) {
    if (this.destroyed) return
    const feed = $('battle-feed')
    this.logLines.unshift({ text, time: performance.now() })
    const line = document.createElement('div')
    line.className = 'feed-line'
    line.innerHTML = text
    feed.prepend(line)
    while (feed.children.length > 4) feed.removeChild(feed.lastChild)
    if (sound) this.game.audio.click()
  }

  floatText(text, side, cls = '') {
    const el = document.createElement('div')
    el.className = `dmg-float ${cls}`
    el.textContent = text
    el.style.left = side === 'enemy' ? '62%' : '38%'
    el.style.top = `${30 + Math.random() * 8}%`
    $('battle-ui').appendChild(el)
    setTimeout(() => el.remove(), 1200)
  }

  burst(side, color) {
    const count = 26
    const pos = new Float32Array(count * 3)
    const vel = []
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 1.2
      pos[i * 3 + 1] = (Math.random() - 0.5) * 1.2
      pos[i * 3 + 2] = (Math.random() - 0.5) * 1.2
      vel.push(new THREE.Vector3((Math.random() - 0.5) * 7, Math.random() * 6, (Math.random() - 0.5) * 7))
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const mat = new THREE.PointsMaterial({ color, size: 0.2, transparent: true, opacity: 1, depthWrite: false, blending: THREE.AdditiveBlending })
    const pts = new THREE.Points(geo, mat)
    const base = side === 'enemy' ? this.eBase : this.pBase
    pts.position.set(base.x, 2.5, base.z)
    this.arena.scene.add(pts)
    this.effects.push({ pts, vel, life: 0.9, max: 0.9 })
  }

  tween(duration, fn) {
    return new Promise(resolve => {
      const start = performance.now()
      const step = (now) => {
        const t = clamp((now - start) / duration, 0, 1)
        fn(ease(t), t)
        if (t < 1) requestAnimationFrame(step)
        else resolve()
      }
      requestAnimationFrame(step)
    })
  }

  async animateAttack(side) {
    const model = side === 'player' ? this.playerModel : this.enemyModel
    const base = side === 'player' ? this.pBase : this.eBase
    const dir = side === 'player' ? 1 : -1
    this.game.audio.whoosh()
    await this.tween(220, (e) => {
      model.position.x = base.x + dir * e * 1.4
      model.position.z = base.z + (side === 'player' ? -e * 0.4 : e * 0.4)
    })
    await this.tween(260, (e) => {
      model.position.x = base.x + dir * (1 - e) * 1.4
      model.position.z = base.z + (side === 'player' ? -1 : 1) * (1 - e) * 0.4
    })
  }

  async useMove(moveId) {
    if (this.phase !== 'select' || this.busy) return
    const move = MOVES[moveId]
    if (!move || this.focus < move.cost) { this.game.audio.error(); return }
    this.busy = true
    this.phase = 'busy'
    this.focus -= move.cost
    this.updateUI()
    this.log(`<b>${SPECIES[this.playerCreature.speciesId].name}</b> used ${move.name}!`)
    await this.animateAttack('player')
    await this.resolveMove('player', move)
    if (this.phase === 'done') return
    if (this.enemy.hp <= 0) {
      await this.handleEnemyKO()
      return
    }
    await delay(420)
    await this.enemyTurn()
    if (this.phase === 'done') return
    await this.endRound()
  }

  async resolveMove(side, move) {
    const isPlayer = side === 'player'
    const attacker = isPlayer ? this.playerCreature : this.enemy
    const attackerSpecies = SPECIES[attacker.speciesId]
    const defenderCreature = isPlayer ? this.enemy : this.playerCreature
    const defenderSpecies = SPECIES[defenderCreature.speciesId]
    const attackerStatuses = isPlayer ? this.playerStatuses : this.enemy.statuses
    const defenderStatuses = isPlayer ? this.enemy.statuses : this.playerStatuses
    const atkStats = statsFor(attackerSpecies, attacker.level)
    const defStats = statsFor(defenderSpecies, defenderCreature.level)
    const color = TYPES[move.type].color

    if (move.selfStatus) {
      const added = this.addStatus(attackerStatuses, move.selfStatus, 3)
      if (added) this.log(`${attackerSpecies.name} is now <b>${this.statusName(move.selfStatus)}</b>.`)
      this.burst(isPlayer ? 'player' : 'enemy', color)
      this.game.audio.special()
      return
    }
    if (move.heal) {
      const amount = Math.round(defStats.hp * move.heal)
      const max = isPlayer ? defStats.hp : this.enemy.maxHp
      if (isPlayer) this.playerCreature.hp = Math.min(defStats.hp, this.playerCreature.hp + amount)
      else this.enemy.hp = Math.min(this.enemy.maxHp, this.enemy.hp + amount)
      this.log(`${attackerSpecies.name} restored <b>${amount} HP</b>.`)
      this.floatText(`+${amount}`, isPlayer ? 'player' : 'enemy', 'heal')
      this.updateUI()
      this.game.audio.special()
      return
    }
    if (!move.power) return

    let atk = atkStats.atk
    if (this.hasStatus(attackerStatuses, 'chill')) atk *= 0.75
    if (this.hasStatus(attackerStatuses, 'fury')) atk *= 1.25
    let def = defStats.def
    if (this.hasStatus(defenderStatuses, 'guard')) def *= 1.32
    if (this.hasStatus(defenderStatuses, 'root')) def *= 0.74
    const stab = move.type === attackerSpecies.type ? 1.2 : 1
    const mult = typeMultiplier(move.type, defenderSpecies.type)
    const crit = Math.random() < 0.09
    let dmg = move.power * (0.21 + attacker.level * 0.0185) * (atk / Math.max(12, def)) * stab * mult
    dmg *= 0.9 + Math.random() * 0.18
    if (crit) dmg *= 1.55
    dmg = Math.max(1, Math.round(dmg))

    let defender = isPlayer ? this.playerCreature : this.enemy
    if (isPlayer) this.enemy.hp = Math.max(0, this.enemy.hp - dmg)
    else this.playerCreature.hp = Math.max(0, this.playerCreature.hp - dmg)

    this.burst(isPlayer ? 'enemy' : 'player', color)
    this.floatText(`${dmg}${crit ? '!' : ''}`, isPlayer ? 'enemy' : 'player', crit ? 'crit' : '')
    this.shake = crit ? 0.45 : 0.26
    this.game.audio.hit(crit || dmg > 35)
    $('flash').classList.add('on')
    setTimeout(() => $('flash').classList.remove('on'), 90)

    if (mult > 1.1) this.log(`It's <b>super effective</b>!`)
    else if (mult < 0.9) this.log(`It's not very effective…`)
    if (crit) this.log(`A critical strike!`)
    if (move.drain) {
      const heal = Math.round(dmg * move.drain)
      if (isPlayer) this.playerCreature.hp = Math.min(atkStats.hp, this.playerCreature.hp + heal)
      else this.enemy.hp = Math.min(this.enemy.maxHp, this.enemy.hp + heal)
      this.log(`${attackerSpecies.name} drained <b>${heal} HP</b>.`)
      this.floatText(`+${heal}`, isPlayer ? 'player' : 'enemy', 'heal')
    }
    if (move.status && Math.random() < move.status.chance) {
      const targetStatuses = isPlayer ? this.enemy.statuses : this.playerStatuses
      if (this.addStatus(targetStatuses, move.status.id, 3)) {
        this.log(`${defenderSpecies.name} is <b>${this.statusName(move.status.id)}</b>!`)
      }
    }
    this.updateUI()
  }

  statusName(id) {
    return { scorch: 'Scorched', chill: 'Chilled', static: 'Static', root: 'Rooted', guard: 'Guarded', fury: 'Fury', haste: 'Haste' }[id] || id
  }

  async enemyTurn() {
    if (this.enemy.hp <= 0) return
    if (this.hasStatus(this.enemy.statuses, 'static') && Math.random() < 0.3) {
      this.log(`${this.enemyName()} crackles with static and loses its turn!`)
      this.shake = 0.12
      return
    }
    const moves = movesFor(SPECIES[this.enemy.speciesId], this.enemy.level)
    let best = null
    let bestScore = -999
    const playerType = SPECIES[this.playerCreature.speciesId].type
    for (const id of moves) {
      const m = MOVES[id]
      if (!m.power && !m.selfStatus && !m.heal) continue
      let score = m.power * typeMultiplier(m.type, playerType)
      if (m.type === SPECIES[this.enemy.speciesId].type) score *= 1.15
      if (m.status) score += 18
      if (m.selfStatus) score += this.enemy.hp / this.enemy.maxHp < 0.6 ? 12 : 2
      if (m.heal) score += this.enemy.hp / this.enemy.maxHp < 0.45 ? 55 : 0
      score += Math.random() * 14
      if (score > bestScore) { bestScore = score; best = m }
    }
    if (!best) best = MOVES[moves[0]]
    this.log(`<b>${this.enemyName()}</b> used ${best.name}!`)
    await this.animateAttack('enemy')
    await this.resolveMove('enemy', best)
    if (this.playerCreature.hp <= 0) {
      await this.handlePlayerKO()
    }
  }

  async endRound() {
    if (this.phase === 'done') return
    this.round++
    this.focus = Math.min(this.maxFocus, this.focus + 2)

    for (const [side, statuses, creature] of [['player', this.playerStatuses, this.playerCreature], ['enemy', this.enemy.statuses, this.enemy]]) {
      if (side === 'player' && creature.hp <= 0) continue
      if (side === 'enemy' && this.enemy.hp <= 0) continue
      if (this.hasStatus(statuses, 'scorch')) {
        const max = statsFor(SPECIES[creature.speciesId], creature.level).hp
        const burn = Math.max(2, Math.round(max * 0.06))
        if (side === 'player') this.playerCreature.hp = Math.max(0, this.playerCreature.hp - burn)
        else this.enemy.hp = Math.max(0, this.enemy.hp - burn)
        this.log(`${side === 'player' ? SPECIES[this.playerCreature.speciesId].name : this.enemyName()} is seared for <b>${burn}</b> damage.`)
        this.floatText(`${burn}`, side, '')
        this.game.audio.hit(false)
      }
      statuses.forEach(s => { s.turns -= 1 })
      const expiring = statuses.filter(s => s.turns <= 0)
      statuses.splice(0, statuses.length, ...statuses.filter(s => s.turns > 0))
      for (const s of expiring) this.log(`${side === 'player' ? SPECIES[this.playerCreature.speciesId].name : this.enemyName()}'s ${s.name} faded.`)
    }
    this.updateUI()
    if (this.enemy.hp <= 0) { await this.handleEnemyKO(); return }
    if (this.playerCreature.hp <= 0) { await this.handlePlayerKO(); return }
    this.phase = 'select'
    this.busy = false
    this.updateUI()
  }

  async handleEnemyKO() {
    this.enemy.hp = 0
    this.updateUI()
    this.game.audio.badge()
    this.log(`<b>${this.enemyName()}</b> was defeated!`)
    if (this.enemyModel) {
      const model = this.enemyModel
      await this.tween(450, (e) => { model.scale.setScalar(1 - e * 0.35); model.position.y = this.eBase.y + e * 0.3 })
      model.visible = false
    }
    if (this.enemyIdx < this.enemyTeam.length - 1) {
      this.enemyIdx++
      this.enemy = this.enemyTeam[this.enemyIdx]
      this.enemyStatuses = []
      await delay(500)
      this.buildModels()
      this.log(`${this.gym?.leader || 'The keeper'} sends out <b>${this.enemyName()}</b>!`)
      this.updateUI()
      this.phase = 'select'
      this.busy = false
      return
    }
    await this.win()
  }

  async handlePlayerKO() {
    this.playerCreature.hp = 0
    this.updateUI()
    this.log(`<b>${SPECIES[this.playerCreature.speciesId].name}</b> fainted!`)
    this.game.audio.hit(true)
    const next = this.game.state.player.party.findIndex((c, i) => c.hp > 0 && i !== this.activeIdx)
    if (next < 0) {
      await delay(700)
      this.lose()
      return
    }
    this.activeIdx = next
    this.playerCreature = this.game.state.player.party[next]
    this.game.state.player.activeIndex = next
    this.playerStatuses = []
    this.focus = 8
    await delay(700)
    this.buildModels()
    this.log(`Go, <b>${SPECIES[this.playerCreature.speciesId].name}</b>!`)
    this.updateUI()
    this.phase = 'select'
    this.busy = false
  }

  async win() {
    this.phase = 'done'
    this.busy = true
    this.updateUI()
    const rewardXp = this.isGym
      ? Math.round(this.enemyTeam.reduce((a, e) => a + e.level, 0) * 9 + 40)
      : Math.round(this.enemy.level * 11 + 18)
    const levelUps = []
    for (const c of this.game.state.player.party) {
      if (c.hp <= 0) continue
      const gain = c === this.playerCreature ? rewardXp : Math.round(rewardXp * 0.45)
      const ups = this.grantXp(c, gain)
      levelUps.push(...ups.map(u => ({ creature: c, ...u })))
    }
    this.levelUps = levelUps
    let badge = null
    if (this.isGym) {
      badge = this.gym
      if (!this.game.state.player.badges.includes(this.region.id)) {
        this.game.state.player.badges.push(this.region.id)
      }
      const mats = this.gym.reward?.materials || {}
      for (const [k, v] of Object.entries(mats)) this.game.state.player.inventory[k] = (this.game.state.player.inventory[k] || 0) + v
      this.game.audio.badge()
    } else if (this.wild) {
      this.wild.active = false
      this.wild.root.visible = false
      this.wild.respawnAt = performance.now() + 45000
    }
    this.game.save()
    const extra = levelUps.length ? `${levelUps.length} level-up${levelUps.length > 1 ? 's' : ''}!` : ''
    this.showResult({
      win: true,
      title: this.isGym ? 'Sigil Earned' : 'Victory',
      sub: this.isGym ? `${this.gym.badge}` : 'The wilds grow quiet',
      xp: rewardXp,
      badge,
      levels: this.levelUps,
      copy: this.isGym
        ? `${this.gym.leader} bows their head. ${this.gym.quote}${extra ? ' ' + extra : ''}`
        : `Your bond deepens.${extra ? ' ' + extra : ''}`
    })
  }

  grantXp(creature, amount) {
    creature.xp += amount
    const ups = []
    while (creature.xp >= xpToNext(creature.level) && creature.level < 60) {
      const need = xpToNext(creature.level)
      creature.xp -= need
      const oldLevel = creature.level
      const oldStats = statsFor(SPECIES[creature.speciesId], oldLevel)
      creature.level++
      const newStats = statsFor(SPECIES[creature.speciesId], creature.level)
      creature.maxHp = newStats.hp
      creature.hp = Math.min(newStats.hp, creature.hp + (newStats.hp - oldStats.hp))
      const oldMoves = movesFor(SPECIES[creature.speciesId], oldLevel)
      const newMoves = movesFor(SPECIES[creature.speciesId], creature.level)
      const learned = newMoves.filter(m => !oldMoves.includes(m)).map(m => MOVES[m]?.name).filter(Boolean)
      ups.push({ from: oldLevel, to: creature.level, learned })
    }
    return ups
  }

  lose() {
    this.phase = 'done'
    this.busy = true
    this.game.audio.error()
    this.showResult({
      win: false, title: 'The Wilds Prevail', sub: 'Your party needs rest',
      xp: 0, copy: 'Everything goes dark for a moment. You wake at the waystone, your party tended and your resolve intact. The titans will still be there tomorrow.', lost: true
    })
  }

  showResult(data) {
    this.resultData = data
    const card = $('battle-result')
    card.classList.remove('hidden')
    const badgeHtml = data.badge ? `<div><span>SIGIL</span><b>${data.badge.sigil} ${data.badge.badge}</b></div>` : ''
    const levelHtml = data.levels?.length
      ? `<div><span>LEVEL</span><b>+${data.levels.length}</b></div>`
      : `<div><span>PARTY</span><b>${this.game.state.player.party.filter(c => c.hp > 0).length}/${this.game.state.player.party.length}</b></div>`
    const levelNotes = data.levels?.slice(0, 3).map(l => `${SPECIES[l.creature.speciesId].name} reached Lv ${l.to}${l.learned.length ? ' — learned ' + l.learned.join(', ') : ''}`).join('<br>') || ''
    card.innerHTML = `
      <div class="result-card">
        <div class="result-sigil">${data.win ? (data.badge ? data.badge.sigil : '✦') : '◌'}</div>
        <h2>${data.title}</h2>
        <div class="result-sub">${data.sub}</div>
        <div class="result-stats">
          <div><span>EXPERIENCE</span><b>+${data.xp}</b></div>
          ${levelHtml}
          ${badgeHtml}
        </div>
        <p class="result-copy">${data.copy}${levelNotes ? `<br><span style="color:#f2c96d">${levelNotes}</span>` : ''}</p>
        <div class="result-actions">
          <button class="btn btn-primary" id="result-continue"><span>${data.lost ? 'Return to the Waystone' : 'Return to the Wilds'}</span><i>→</i></button>
        </div>
      </div>`
    if (data.levels?.length) this.game.audio.levelUp()
    $('result-continue').addEventListener('click', () => {
      this.game.finishBattle(this)
    }, { once: true })
  }

  async tryCapture(wild) {
    if (this.isGym) { this.game.toast('Gym titans cannot be tamed.', '◈', 'bad'); return }
    const treat = TREATS[wild]
    if (!treat) return
    if ((this.game.state.player.treats[wild] || 0) <= 0) return
    this.game.state.player.treats[wild]--
    this.closePicker()
    this.phase = 'busy'
    this.busy = true
    this.updateUI()
    this.log(`You offer a <b>${treat.name}</b>…`)
    const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(0.26, 1), new THREE.MeshStandardMaterial({ color: TYPES[treat.type].color, emissive: TYPES[treat.type].color, emissiveIntensity: 1.6, roughness: 0.3 }))
    sphere.position.copy(this.pBase).add(new THREE.Vector3(0, 2.1, 0))
    this.arena.scene.add(sphere)
    const target = this.eBase.clone().add(new THREE.Vector3(0, 2.1, 0))
    await this.tween(650, (e) => {
      sphere.position.lerpVectors(this.pBase.clone().add(new THREE.Vector3(0, 2.1, 0)), target, e)
      sphere.position.y += Math.sin(e * Math.PI) * 2.6
      sphere.rotation.x += 0.2
      sphere.rotation.y += 0.25
    })
    this.arena.scene.remove(sphere)
    this.burst('enemy', TYPES[treat.type].color)
    $('flash').classList.add('on')
    setTimeout(() => $('flash').classList.remove('on'), 130)
    this.game.audio.capture()

    const chance = this.captureChance(wild)
    const success = Math.random() < chance
    if (success) {
      await delay(500)
      this.enemyModel.visible = false
      const level = this.enemy.level
      const caught = makeCreature(this.enemy.speciesId, level, { hp: Math.max(1, Math.round(this.enemy.maxHp * 0.55)) })
      const added = this.game.addCaptured(caught)
      const xp = Math.round(this.enemy.level * 7 + 10)
      for (const c of this.game.state.player.party) {
        if (c.hp > 0) this.grantXp(c, c === this.playerCreature ? xp : Math.round(xp * 0.4))
      }
      this.game.audio.levelUp()
      this.phase = 'done'
      this.showResult({
        win: true, title: 'Bond Formed', sub: added === 'party' ? 'A new companion joins your party' : 'Sent to the sanctuary',
        xp,
        copy: `${SPECIES[caught.speciesId].name} accepts your treat and presses its great head against your hand. You are bound now — by trust, not rope.${added === 'reserve' ? ' Your party was full, so it waits in the sanctuary.' : ''}`,
        caught: true
      })
      this.game.save()
      return
    }
    this.log(`<b>${this.enemyName()}</b> sniffs the treat, then refuses!`)
    this.floatText('RESISTED', 'enemy', '')
    await delay(450)
    await this.enemyTurn()
    if (this.phase === 'done') return
    await this.endRound()
  }

  captureChance(treatType) {
    const species = SPECIES[this.enemy.speciesId]
    const hpRatio = this.enemy.hp / this.enemy.maxHp
    const base = species.catchRate
    const hpFactor = 1 + (1 - hpRatio) * 2.3
    const leadLevel = this.playerCreature.level
    const levelFactor = clamp(1 - Math.max(0, this.enemy.level - leadLevel) * 0.018, 0.55, 1.15)
    const fav = treatType === species.type ? 1.45 : 0.82
    const status = this.enemy.statuses.length ? 1.12 : 1
    return clamp(base * hpFactor * levelFactor * fav * status, 0.04, 0.92)
  }

  openTreatPicker() {
    if (this.phase !== 'select' || this.isGym) {
      if (this.isGym) this.game.toast('Gym titans cannot be tamed.', '◈', 'bad')
      return
    }
    const picker = $('treat-picker')
    $('battle-command').classList.add('hidden')
    picker.classList.remove('hidden')
    const treats = Object.entries(this.game.state.player.treats).filter(([k, v]) => v > 0)
    const rows = treats.map(([type, count]) => {
      const t = TREATS[type]
      const chance = Math.round(this.captureChance(type) * 100)
      const fav = SPECIES[this.enemy.speciesId].favorite === type
      return `<button class="treat-card" data-treat="${type}" style="--tc:${TYPES[type].color}">
        <div class="tc-top"><b>${t.icon} ${t.name}</b><span class="tc-count">×${count}</span></div>
        <div class="tc-type">${TYPES[type].name}${fav ? ' · FAVORITE' : ''}</div>
        <div class="tc-rate">${chance}% bond chance${fav ? ' · +45%' : ''}</div>
      </button>`
    }).join('')
    picker.innerHTML = `<div class="treat-head"><h4>Offer a Treat</h4><button id="close-treat">×</button></div>
      <p style="margin:0 0 10px;font-size:0.6rem;color:#aab2c5;line-height:1.5">Weaken the titan first, and match its favorite flavor to improve the bond.</p>
      <div class="treat-grid">${rows || '<div class="empty-note">No treats yet. Gather ingredients and craft some at a waystone.</div>'}</div>`
    $('close-treat').onclick = () => { this.closePicker() }
    picker.querySelectorAll('[data-treat]').forEach(b => {
      b.addEventListener('click', () => this.tryCapture(b.dataset.treat))
    })
  }

  openSwapPicker() {
    if (this.phase !== 'select') return
    const picker = $('treat-picker')
    $('battle-command').classList.add('hidden')
    picker.classList.remove('hidden')
    const party = this.game.state.player.party
    const rows = party.map((c, i) => {
      const st = statsFor(SPECIES[c.speciesId], c.level)
      const type = TYPES[SPECIES[c.speciesId].type]
      const disabled = c.hp <= 0 || i === this.activeIdx
      return `<button class="treat-card" data-swap="${i}" style="--tc:${type.color};opacity:${disabled ? '.36' : '1'}" ${disabled ? 'disabled' : ''}>
        <div class="tc-top"><b>${type.icon} ${SPECIES[c.speciesId].name}</b><span class="tc-count">LV ${c.level}</span></div>
        <div class="tc-type">${type.name} · ${c.hp}/${st.hp} HP</div>
        <div class="tc-rate">${i === this.activeIdx ? 'IN BATTLE' : c.hp <= 0 ? 'FAINTED' : 'SWAP IN'}</div>
      </button>`
    }).join('')
    picker.innerHTML = `<div class="treat-head"><h4>Swap Companion</h4><button id="close-treat">×</button></div>
      <div class="treat-grid">${rows}</div>`
    $('close-treat').onclick = () => this.closePicker()
    picker.querySelectorAll('[data-swap]').forEach(b => {
      b.addEventListener('click', () => this.doSwap(Number(b.dataset.swap)))
    })
  }

  closePicker() {
    $('treat-picker').classList.add('hidden')
    $('treat-picker').innerHTML = ''
    $('battle-command').classList.remove('hidden')
    this.renderMoves()
  }

  async doSwap(index) {
    const c = this.game.state.player.party[index]
    if (!c || c.hp <= 0 || index === this.activeIdx) return
    this.closePicker()
    this.phase = 'busy'
    this.busy = true
    this.activeIdx = index
    this.playerCreature = c
    this.game.state.player.activeIndex = index
    this.playerStatuses = []
    this.focus = Math.min(this.maxFocus, this.focus + 2)
    this.buildModels()
    this.log(`Go, <b>${SPECIES[c.speciesId].name}</b>!`)
    this.updateUI()
    await delay(420)
    await this.enemyTurn()
    if (this.phase === 'done') return
    await this.endRound()
  }

  async brace() {
    if (this.phase !== 'select') return
    this.phase = 'busy'
    this.busy = true
    this.focus = Math.min(this.maxFocus, this.focus + 4)
    this.addStatus(this.playerStatuses, 'guard', 2)
    this.log(`${SPECIES[this.playerCreature.speciesId].name} braces, recovering focus and raising defense.`)
    this.game.audio.special()
    this.updateUI()
    await delay(360)
    await this.enemyTurn()
    if (this.phase === 'done') return
    await this.endRound()
  }

  async tryFlee() {
    if (this.phase !== 'select' || this.isGym) return
    if (Math.random() < 0.72) {
      this.phase = 'done'
      this.busy = true
      this.log('You slipped away into the undergrowth.')
      await delay(500)
      this.game.finishBattle(this, { fled: true })
      return
    }
    this.log('You could not escape!')
    this.game.audio.error()
    this.phase = 'busy'
    this.busy = true
    await delay(350)
    await this.enemyTurn()
    if (this.phase === 'done') return
    await this.endRound()
  }

  showHelp() {
    const tip = $('battle-tooltip')
    tip.classList.toggle('hidden')
    tip.innerHTML = '<b>Battle basics</b> — Every ability costs Focus. Focus restores +2 each turn; Brace restores +4 and raises defense. Match a titan’s favorite treat to improve capture. Swap to a fresh companion if you are in danger.'
    clearTimeout(this.helpTimer)
    this.helpTimer = setTimeout(() => tip.classList.add('hidden'), 6500)
  }

  update(dt, t) {
    if (this.destroyed) return
    this.arena.update(dt, t)
    this.playerModel?.userData.update?.(t, false)
    this.enemyModel?.userData.update?.(t + 1.3, false)
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt * 1.8)
      const cam = this.arena.camera
      cam.position.x = (Math.random() - 0.5) * this.shake
      cam.position.y = 8.2 + (Math.random() - 0.5) * this.shake
      cam.lookAt(0, 3, 0)
    }
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const fx = this.effects[i]
      fx.life -= dt
      const pos = fx.pts.geometry.attributes.position
      for (let j = 0; j < fx.vel.length; j++) {
        fx.vel[j].y -= dt * 9
        pos.setXYZ(j, pos.getX(j) + fx.vel[j].x * dt, pos.getY(j) + fx.vel[j].y * dt, pos.getZ(j) + fx.vel[j].z * dt)
      }
      pos.needsUpdate = true
      fx.pts.material.opacity = clamp(fx.life / fx.max, 0, 1)
      if (fx.life <= 0) {
        this.arena.scene.remove(fx.pts)
        fx.pts.geometry.dispose()
        fx.pts.material.dispose()
        this.effects.splice(i, 1)
      }
    }
    if (this.playerModel) this.playerModel.rotation.y = this.playerModel.rotation.y * 0.985 + 0.01 * Math.atan2(this.eBase.x - this.pBase.x, this.eBase.z - this.pBase.z)
  }

  destroy() {
    this.destroyed = true
    this.abort.abort()
    clearTimeout(this.helpTimer)
    for (const fx of this.effects) {
      this.arena.scene.remove(fx.pts)
      fx.pts.geometry.dispose()
      fx.pts.material.dispose()
    }
    this.effects = []
    if (this.arena?.scene) {
      this.arena.scene.traverse(o => {
        if (o.geometry) o.geometry.dispose()
        if (o.material) {
          const mats = Array.isArray(o.material) ? o.material : [o.material]
          mats.forEach(m => { if (m.map) m.map.dispose(); m.dispose() })
        }
      })
    }
    $('battle-ui').querySelectorAll('.dmg-float').forEach(e => e.remove())
    $('battle-result').innerHTML = ''
    $('battle-result').classList.add('hidden')
    $('treat-picker').innerHTML = ''
    $('treat-picker').classList.add('hidden')
    $('battle-tooltip').classList.add('hidden')
    $('battle-command').classList.remove('hidden')
  }
}
