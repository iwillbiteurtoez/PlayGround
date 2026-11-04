import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import './style.css'
import {
  SPECIES, REGIONS, TYPES, TREATS, INGREDIENTS, STARTERS, BADGES,
  SKIN_TONES, HAIR_COLORS, OUTFIT_COLORS, HAIR_STYLES,
  makeCreature, regionById, xpToNext, statsFor, movesFor, MOVES
} from './data.js'
import { buildRegion } from './world.js'
import { createTitleStage, createStageScene } from './stages.js'
import { buildTrainer } from './art.js'
import { Battle } from './battle.js'
import { AudioEngine } from './audio.js'

const $ = (id) => document.getElementById(id)
const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const SAVE_KEY = 'titanbound.save.v1'
const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window

class Game {
  constructor() {
    this.state = null
    this.mode = 'loading'
    this.modalOpen = false
    this.dialogueOpen = false
    this.activeBattle = null
    this.world = null
    this.keys = new Set()
    this.touchMove = { x: 0, y: 0 }
    this.cameraYaw = 0
    this.cameraPitch = 0.17
    this.cameraZoom = 8.4
    this.playerPos = new THREE.Vector3()
    this.playerVY = 0
    this.jumping = false
    this.avatar = null
    this.avatarFacing = Math.PI
    this.nearest = null
    this.playTime = 0
    this.saveTimer = 0
    this.clock = new THREE.Clock()
    this.audio = new AudioEngine()
    this.isDragging = false
    this.dragLast = { x: 0, y: 0 }
    this.toastTimers = []
    this.boundFrame = this.frame.bind(this)
    this.creatorStep = 1
    this.starterIndex = 0
    this.journalTab = 'craft'
    this.creator = {
      gender: 'female', skin: SKIN_TONES[1], hairColor: HAIR_COLORS[1],
      outfit: OUTFIT_COLORS[0], hairStyle: 2, name: 'Aster'
    }
    this.initThree()
    this.bindUI()
    this.buildInterfaceOptions()
    this.loadSave()
    this.initStages()
    this.resize()
    requestAnimationFrame(this.boundFrame)
    setTimeout(() => {
      $('load-fill').style.width = '100%'
      setTimeout(() => this.showTitle(), 450)
    }, 380)
  }

  initThree() {
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isTouch ? 1.35 : 1.75))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.04
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.domElement.setAttribute('aria-label', 'Titanbound 3D world')
    $('scene-host').appendChild(renderer.domElement)
    this.renderer = renderer

    this.camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 340)
    this.worldCamera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 340)
    this.composer = new EffectComposer(renderer)
    this.renderPass = new RenderPass(new THREE.Scene(), this.camera)
    this.composer.addPass(this.renderPass)
    this.bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), isTouch ? 0.22 : 0.3, 0.55, 0.9)
    this.composer.addPass(this.bloomPass)
    this.composer.addPass(new OutputPass())
    this.activeCamera = this.camera
    this.scene = new THREE.Scene()

    window.addEventListener('resize', () => this.resize())
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight
    this.renderer.setSize(w, h)
    this.composer.setSize(w, h)
    for (const cam of [this.camera, this.worldCamera, this.titleStage?.camera, this.stage?.camera, this.activeBattle?.arena?.camera]) {
      if (cam && cam.isPerspectiveCamera) {
        cam.aspect = w / h
        cam.updateProjectionMatrix()
      }
    }
  }

  loadSave() {
    try {
      const raw = localStorage.getItem(SAVE_KEY)
      if (!raw) return
      const data = JSON.parse(raw)
      if (!data || data.v !== 1 || !data.player?.party?.length) return
      this.saved = data
    } catch (e) { console.warn('Save could not be read', e) }
  }

  save() {
    if (!this.state?.player) return
    const p = this.state.player
    if (this.mode === 'world') { p.x = this.playerPos.x; p.z = this.playerPos.z }
    const data = {
      v: 1, player: p, flags: this.state.flags || {}, playTime: Math.round(this.playTime),
      savedAt: Date.now()
    }
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(data))
      this.saved = data
      const el = $('save-state')
      el.textContent = 'SAVING…'
      el.classList.add('saving')
      clearTimeout(this.saveFlash)
      this.saveFlash = setTimeout(() => { el.textContent = 'AUTOSAVED'; el.classList.remove('saving') }, 700)
    } catch (e) { console.warn(e) }
  }

  initStages() {
    this.titleStage = createTitleStage()
    this.stage = createStageScene()
    this.setScene(this.titleStage.scene, this.titleStage.camera)
  }

  setScene(scene, camera) {
    this.scene = scene
    this.activeCamera = camera
    this.renderPass.scene = scene
    this.renderPass.camera = camera
  }

  showTitle() {
    this.mode = 'title'
    $('loading-screen').classList.add('out')
    $('creator-screen').classList.add('hidden')
    $('hud').classList.add('hidden')
    $('title-screen').classList.remove('hidden')
    $('btn-continue').classList.toggle('hidden', !this.saved)
    this.setScene(this.titleStage.scene, this.titleStage.camera)
    this.audio.setRegion('celestial')
  }

  startNew() {
    this.audio.init()
    this.audio.select()
    this.state = {
      player: null,
      flags: { tutorial: false, endingShown: false }
    }
    this.creatorStep = 1
    this.starterIndex = 0
    this.creator = {
      gender: 'female', skin: SKIN_TONES[1], hairColor: HAIR_COLORS[1],
      outfit: OUTFIT_COLORS[0], hairStyle: 2, name: 'Aster'
    }
    $('trainer-name').value = 'Aster'
    this.mode = 'creator'
    $('title-screen').classList.add('hidden')
    $('creator-screen').classList.remove('hidden')
    $('creator-step-1').classList.remove('hidden')
    $('creator-step-2').classList.add('hidden')
    this.updateStepDots(1)
    this.stage.setTrainer(this.creator)
    this.stage.setMode('trainer')
    this.setScene(this.stage.scene, this.stage.camera)
    this.syncCreatorUI()
    this.renderStarterCards()
  }

  continueGame() {
    if (!this.saved) return
    this.audio.init()
    const p = this.saved.player
    this.state = { player: p, flags: this.saved.flags || {} }
    this.playTime = this.saved.playTime || 0
    $('title-screen').classList.add('hidden')
    $('creator-screen').classList.add('hidden')
    this.enterRegion(p.regionId || 'verdant', { x: p.x, z: p.z, silent: true })
    this.audio.select()
    this.toast(`Welcome back, ${p.name}.`, '✦')
  }

  buildInterfaceOptions() {
    const skin = $('skin-select')
    skin.innerHTML = SKIN_TONES.map(c => `<button class="swatch" data-skin="${c}" style="background:${c}" title="Skin tone"></button>`).join('')
    const hair = $('hair-color-select')
    hair.innerHTML = HAIR_COLORS.map(c => `<button class="swatch" data-hair="${c}" style="background:${c}" title="Hair color"></button>`).join('')
    const outfit = $('outfit-select')
    outfit.innerHTML = OUTFIT_COLORS.map(c => `<button class="swatch" data-outfit="${c}" style="background:${c}" title="Outfit color"></button>`).join('')
    const styles = $('hair-style-select')
    styles.innerHTML = HAIR_STYLES.map((s, i) => `<button class="hair-opt" data-style="${i}">${s.slice(0, 4)}</button>`).join('')

    $('gender-select').addEventListener('click', (e) => {
      const b = e.target.closest('[data-value]')
      if (!b) return
      this.creator.gender = b.dataset.value
      this.audio.click()
      this.syncCreatorUI()
    })
    skin.addEventListener('click', (e) => {
      const b = e.target.closest('[data-skin]')
      if (!b) return
      this.creator.skin = b.dataset.skin
      this.audio.click(); this.syncCreatorUI()
    })
    hair.addEventListener('click', (e) => {
      const b = e.target.closest('[data-hair]')
      if (!b) return
      this.creator.hairColor = b.dataset.hair
      this.audio.click(); this.syncCreatorUI()
    })
    outfit.addEventListener('click', (e) => {
      const b = e.target.closest('[data-outfit]')
      if (!b) return
      this.creator.outfit = b.dataset.outfit
      this.audio.click(); this.syncCreatorUI()
    })
    styles.addEventListener('click', (e) => {
      const b = e.target.closest('[data-style]')
      if (!b) return
      this.creator.hairStyle = Number(b.dataset.style)
      this.audio.click(); this.syncCreatorUI()
    })
    $('trainer-name').addEventListener('input', (e) => { this.creator.name = e.target.value.slice(0, 16) })
    $('btn-randomize').addEventListener('click', () => {
      const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]
      this.creator.skin = pick(SKIN_TONES)
      this.creator.hairColor = pick(HAIR_COLORS)
      this.creator.outfit = pick(OUTFIT_COLORS)
      this.creator.hairStyle = Math.floor(Math.random() * HAIR_STYLES.length)
      this.creator.gender = Math.random() > 0.5 ? 'female' : 'male'
      this.audio.select(); this.syncCreatorUI()
    })
    $('btn-to-partner').addEventListener('click', () => {
      const name = $('trainer-name').value.trim()
      if (!name) { $('trainer-name').focus(); this.toast('Every keeper needs a name.', '!', 'bad'); this.audio.error(); return }
      this.creator.name = name
      this.audio.select()
      this.showStarterStep()
    })
    $('btn-back-to-look').addEventListener('click', () => {
      this.creatorStep = 1
      $('creator-step-2').classList.add('hidden')
      $('creator-step-1').classList.remove('hidden')
      this.updateStepDots(1)
      this.stage.setMode('trainer')
      this.audio.click()
    })
    $('btn-begin').addEventListener('click', () => this.beginJourney())
    $('creator-back').addEventListener('click', () => {
      if (this.creatorStep === 2) { $('btn-back-to-look').click(); return }
      this.showTitle(); this.audio.click()
    })
  }

  syncCreatorUI() {
    const c = this.creator
    document.querySelectorAll('#gender-select button').forEach(b => b.classList.toggle('active', b.dataset.value === c.gender))
    document.querySelectorAll('#skin-select .swatch').forEach(b => b.classList.toggle('active', b.dataset.skin === c.skin))
    document.querySelectorAll('#hair-color-select .swatch').forEach(b => b.classList.toggle('active', b.dataset.hair === c.hairColor))
    document.querySelectorAll('#outfit-select .swatch').forEach(b => b.classList.toggle('active', b.dataset.outfit === c.outfit))
    document.querySelectorAll('#hair-style-select .hair-opt').forEach(b => b.classList.toggle('active', Number(b.dataset.style) === c.hairStyle))
    this.stage.setTrainer(c)
  }

  updateStepDots(step) {
    document.querySelectorAll('.step-dot').forEach(d => d.classList.toggle('active', Number(d.dataset.step) === step))
  }

  showStarterStep() {
    this.creatorStep = 2
    $('creator-step-1').classList.add('hidden')
    $('creator-step-2').classList.remove('hidden')
    this.updateStepDots(2)
    this.stage.setMode('starters')
    this.stage.selectStarter(this.starterIndex)
    this.setScene(this.stage.scene, this.stage.camera)
    this.renderStarterCards()
  }

  renderStarterCards() {
    const wrap = $('starter-cards')
    wrap.innerHTML = STARTERS.map((id, i) => {
      const s = SPECIES[id]
      const t = TYPES[s.type]
      return `<button class="starter-card ${i === this.starterIndex ? 'active' : ''}" data-starter="${i}" style="--sc:${t.color}">
        <span class="card-num">0${i + 1}</span>
        <span class="type-chip">${t.icon} ${t.name}</span>
        <h3>${s.name}</h3>
        <span class="epithet">${s.epithet}</span>
        <p>${s.desc}</p>
        <div class="pick-line"><span>${i === this.starterIndex ? 'CHOSEN PARTNER' : 'CHOOSE THIS TITAN'}</span><span>${i === this.starterIndex ? '✦' : '→'}</span></div>
      </button>`
    }).join('')
    wrap.querySelectorAll('[data-starter]').forEach(b => {
      b.addEventListener('click', () => {
        this.starterIndex = Number(b.dataset.starter)
        this.stage.selectStarter(this.starterIndex)
        this.renderStarterCards()
        this.audio.select()
      })
    })
  }

  beginJourney() {
    const id = STARTERS[this.starterIndex]
    const species = SPECIES[id]
    const starter = makeCreature(id, 5)
    const p = {
      name: this.creator.name || 'Aster',
      gender: this.creator.gender, skin: this.creator.skin, hairColor: this.creator.hairColor,
      outfit: this.creator.outfit, hairStyle: this.creator.hairStyle,
      regionId: 'verdant', x: 0, z: 18.4,
      badges: [], party: [starter], reserve: [], activeIndex: 0,
      inventory: { sunpetal: 2, wildgrain: 3 },
      treats: { [species.type]: 1 },
      discovered: [id], seen: [id],
      startedAt: Date.now()
    }
    this.state.player = p
    this.playTime = 0
    this.audio.init()
    this.audio.badge()
    $('creator-screen').classList.add('hidden')
    this.enterRegion('verdant', { silent: true })
    this.save()
    setTimeout(() => {
      this.toast('WASD or the left stick to move · drag to look', '◈')
    }, 600)
    setTimeout(() => {
      this.toast('Gather glowing plants, then craft treats in your Journal [C]', '✦')
    }, 3200)
    setTimeout(() => this.showIntroDialogue(), 1100)
  }

  showIntroDialogue() {
    this.showDialogue({
      portrait: 'W', name: 'Wren Thistle', title: 'Rootbound Warden',
      text: `So the isles have sent me a new keeper. Good. The titans are restless, and the eight sigils have gone quiet. Start at my grove beyond the path — but first, gather sunpetal. A titan trusts a full hand more than a fast one.`,
      actions: [{ label: 'I understand', onClick: () => this.toast('Objective: reach the Amberstep Grove', '◇') }]
    })
  }

  bindUI() {
    $('btn-new').addEventListener('click', () => this.startNew())
    $('btn-continue').addEventListener('click', () => this.continueGame())
    $('btn-atlas').addEventListener('click', () => this.openAtlas())
    $('btn-journal').addEventListener('click', () => this.openJournal(this.journalTab))
    $('btn-sound').addEventListener('click', () => this.toggleSound())
    $('party-dock').addEventListener('click', () => this.openJournal('party'))
    $('dialogue-close').addEventListener('click', () => this.closeDialogue())
    $('mobile-interact').addEventListener('click', () => this.interact())
    $('mobile-journal').addEventListener('click', () => this.openJournal(this.journalTab))
    $('btn-atlas').addEventListener('mouseenter', () => this.audio.click())
    $('btn-journal').addEventListener('mouseenter', () => this.audio.click())
    $('battle-sound')?.addEventListener('click', () => this.toggleSound())
    $('modal-layer').addEventListener('click', (e) => {
      if (e.target === $('modal-layer')) this.closeModal()
    })
    window.addEventListener('keydown', (e) => this.onKeyDown(e))
    window.addEventListener('keyup', (e) => this.keys.delete(e.code))
    this.bindPointer()
    this.bindJoystick()
  }

  toggleSound() {
    if (!this.audio.ctx) this.audio.init()
    const on = this.audio.toggle()
    this.toast(on ? 'Sound on' : 'Sound muted', on ? '♪' : '◌')
  }

  bindPointer() {
    const canvas = this.renderer.domElement
    canvas.addEventListener('pointerdown', (e) => {
      if (this.mode !== 'world' || this.modalOpen || this.dialogueOpen) return
      this.isDragging = true
      this.dragLast.x = e.clientX; this.dragLast.y = e.clientY
      canvas.setPointerCapture?.(e.pointerId)
    })
    canvas.addEventListener('pointermove', (e) => {
      if (!this.isDragging) return
      const dx = e.clientX - this.dragLast.x
      const dy = e.clientY - this.dragLast.y
      this.dragLast.x = e.clientX; this.dragLast.y = e.clientY
      this.cameraYaw -= dx * 0.006
      this.cameraPitch = clamp(this.cameraPitch + dy * 0.0035, -0.08, 0.62)
    })
    const stop = () => { this.isDragging = false }
    canvas.addEventListener('pointerup', stop)
    canvas.addEventListener('pointercancel', stop)
    canvas.addEventListener('wheel', (e) => {
      if (this.mode !== 'world' || this.modalOpen) return
      e.preventDefault()
      this.cameraZoom = clamp(this.cameraZoom + e.deltaY * 0.006, 5.8, 12.5)
    }, { passive: false })
  }

  bindJoystick() {
    const base = $('joystick')
    const knob = $('joystick-knob')
    let id = null
    let cx = 0, cy = 0
    const radius = 37
    const move = (e) => {
      if (id !== e.pointerId) return
      let dx = e.clientX - cx, dy = e.clientY - cy
      const d = Math.hypot(dx, dy)
      if (d > radius) { dx = dx / d * radius; dy = dy / d * radius }
      knob.style.transform = `translate(${dx}px, ${dy}px)`
      this.touchMove.x = dx / radius
      this.touchMove.y = -dy / radius
    }
    base.addEventListener('pointerdown', (e) => {
      id = e.pointerId
      const r = base.getBoundingClientRect()
      cx = r.left + r.width / 2
      cy = r.top + r.height / 2
      base.setPointerCapture?.(e.pointerId)
      move(e)
    })
    base.addEventListener('pointermove', move)
    const stop = (e) => {
      if (id !== e.pointerId) return
      id = null
      knob.style.transform = 'translate(0,0)'
      this.touchMove.x = 0; this.touchMove.y = 0
    }
    base.addEventListener('pointerup', stop)
    base.addEventListener('pointercancel', stop)
  }

  onKeyDown(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
    if (e.code === 'Escape') {
      if (this.dialogueOpen) this.closeDialogue()
      else if (this.modalOpen) this.closeModal()
      return
    }
    if (this.mode === 'world' && !this.modalOpen && !this.dialogueOpen && !e.repeat) {
      if (e.code === 'KeyE') { e.preventDefault(); this.interact() }
      if (e.code === 'KeyM') { e.preventDefault(); this.openAtlas() }
      if (e.code === 'KeyC') { e.preventDefault(); this.openJournal(this.journalTab) }
      if (e.code === 'Space') { e.preventDefault(); this.jump() }
    }
    if (this.mode === 'battle' && this.activeBattle && !this.activeBattle.busy) {
      if (['Digit1', 'Digit2', 'Digit3', 'Digit4'].includes(e.code)) {
        const idx = Number(e.code.slice(-1)) - 1
        const moves = movesFor(SPECIES[this.activeBattle.playerCreature.speciesId], this.activeBattle.playerCreature.level)
        if (moves[idx]) this.activeBattle.useMove(moves[idx])
      }
    }
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ShiftLeft', 'ShiftRight'].includes(e.code)) {
      this.keys.add(e.code)
    }
  }

  jump() {
    if (!this.jumping && this.mode === 'world') {
      this.jumping = true
      this.playerVY = 5.6
      this.audio.whoosh()
    }
  }

  interact() {
    if (this.mode !== 'world' || this.modalOpen || this.dialogueOpen) return
    if (!this.nearest) { this.audio.error(); return }
    this.audio.click()
    const n = this.nearest
    if (n.type === 'wild') this.startWildBattle(n.target)
    else if (n.type === 'resource') this.collectResource(n.target)
    else if (n.type === 'waystone') this.openAtlas()
    else if (n.type === 'gym') this.talkToGym()
  }

  enterRegion(id, opts = {}) {
    const region = regionById(id)
    if (this.world) {
      this.world.dispose()
      this.world = null
    }
    if (this.avatar) {
      this.avatar.parent?.remove(this.avatar)
      this.avatar = null
    }
    this.world = buildRegion(id)
    this.state.player.regionId = id
    this.playerPos.set(opts.x ?? this.world.spawn.x, 0, opts.z ?? this.world.spawn.z)
    if (opts.x === undefined) { this.playerPos.x = this.world.spawn.x; this.playerPos.z = this.world.spawn.z }
    this.playerPos.y = this.world.heightAt(this.playerPos.x, this.playerPos.z)
    this.cameraYaw = 0
    this.cameraPitch = 0.17
    this.cameraZoom = 8.4
    this.createAvatar()
    this.avatar.position.copy(this.playerPos)
    this.avatar.rotation.y = Math.PI
    this.avatarFacing = Math.PI
    this.setScene(this.world.scene, this.worldCamera)
    this.mode = 'world'
    this.modalOpen = false
    this.dialogueOpen = false
    this.playerVY = 0
    this.jumping = false
    this.nearest = null
    $('hud').classList.remove('hidden')
    $('battle-ui').classList.add('hidden')
    $('dialogue').classList.add('hidden')
    this.closeModal()
    for (const sp of region.creatures) {
      if (!this.state.player.seen.includes(sp)) this.state.player.seen.push(sp)
    }
    this.state.player.activeIndex = clamp(this.state.player.activeIndex || 0, 0, this.state.player.party.length - 1)
    this.audio.setRegion(id)
    this.refreshHUD()
    this.updateCamera(0, true)
    if (!opts.silent) {
      this.toast(`${region.name} — ${region.subtitle}`, '◇')
      this.save()
    }
    $('load-fill').style.width = '100%'
    $('loading-screen').classList.add('out')
  }

  createAvatar() {
    const p = this.state.player
    this.avatar = buildTrainer({ gender: p.gender, skin: p.skin, hairColor: p.hairColor, outfit: p.outfit, hairStyle: p.hairStyle })
    this.avatar.traverse(o => { if (o.isMesh) { o.castShadow = true } })
    this.world.scene.add(this.avatar)
  }

  frame(now) {
    const dt = Math.min(this.clock.getDelta(), 0.05)
    const t = performance.now() / 1000
    if (this.mode === 'title') this.titleStage.update(dt, t)
    else if (this.mode === 'creator') this.stage.update(dt, t)
    else if (this.mode === 'world') {
      this.updateWorld(dt, t)
      if (!this.modalOpen && !this.dialogueOpen) this.playTime += dt
    } else if (this.mode === 'battle' && this.activeBattle) this.activeBattle.update(dt, t)
    this.composer.render()
    requestAnimationFrame(this.boundFrame)
  }

  updateWorld(dt, t) {
    if (!this.world) return
    this.world.update(dt, t)
    if (this.mode === 'world' && !this.modalOpen && !this.dialogueOpen) this.updatePlayer(dt, t)
    this.updateCamera(dt)
    this.updateInteraction()
    this.updateMinimap()
    if (this.mode === 'world') {
      this.saveTimer += dt
      if (this.saveTimer > 20) { this.saveTimer = 0; this.save() }
    }
  }

  updatePlayer(dt, t) {
    let mx = 0, mz = 0
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) mz += 1
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) mz -= 1
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) mx += 1
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) mx -= 1
    mx += this.touchMove.x
    mz += this.touchMove.y
    const len = Math.hypot(mx, mz)
    if (len > 1) { mx /= len; mz /= len }
    const forwardX = -Math.sin(this.cameraYaw)
    const forwardZ = -Math.cos(this.cameraYaw)
    const rightX = Math.cos(this.cameraYaw)
    const rightZ = -Math.sin(this.cameraYaw)
    let dx = forwardX * mz + rightX * mx
    let dz = forwardZ * mz + rightZ * mx
    const moving = Math.hypot(dx, dz) > 0.05
    const sprint = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')
    const speed = moving ? (sprint ? 10.2 : 6.9) : 0
    if (moving) {
      const dl = Math.hypot(dx, dz)
      dx /= dl; dz /= dl
      this.playerPos.x += dx * speed * dt
      this.playerPos.z += dz * speed * dt
      const r = Math.hypot(this.playerPos.x, this.playerPos.z)
      if (r > 55) {
        this.playerPos.x = this.playerPos.x / r * 55
        this.playerPos.z = this.playerPos.z / r * 55
      }
      const targetAngle = Math.atan2(dx, dz)
      let diff = targetAngle - this.avatarFacing
      while (diff > Math.PI) diff -= Math.PI * 2
      while (diff < -Math.PI) diff += Math.PI * 2
      this.avatarFacing += diff * Math.min(1, dt * 12)
    }
    const ground = this.world.heightAt(this.playerPos.x, this.playerPos.z)
    if (this.jumping) {
      this.playerVY -= 16 * dt
      this.playerPos.y += this.playerVY * dt
      if (this.playerPos.y <= ground) {
        this.playerPos.y = ground
        this.playerVY = 0
        this.jumping = false
      }
    } else {
      this.playerPos.y += (ground - this.playerPos.y) * Math.min(1, dt * 14)
    }
    if (this.avatar) {
      this.avatar.position.copy(this.playerPos)
      this.avatar.rotation.y = this.avatarFacing
      this.avatar.userData.update?.(t, moving)
    }
    if (moving) {
      const p = this.world.particles
      if (Math.random() < dt * 10) {
        // subtle dust at the keeper's feet
      }
    }
  }

  updateCamera(dt, instant = false) {
    if (!this.avatar) return
    const dist = this.cameraZoom
    const cosP = Math.cos(this.cameraPitch)
    const targetX = this.playerPos.x + Math.sin(this.cameraYaw) * dist * cosP
    const targetZ = this.playerPos.z + Math.cos(this.cameraYaw) * dist * cosP
    let targetY = this.playerPos.y + 2.2 + Math.sin(this.cameraPitch) * dist * 0.72
    const groundAtCam = this.world.heightAt(targetX, targetZ)
    targetY = Math.max(targetY, groundAtCam + 1.3)
    const lookX = this.playerPos.x
    const lookY = this.playerPos.y + 2.2
    const lookZ = this.playerPos.z
    if (instant) {
      this.worldCamera.position.set(targetX, targetY, targetZ)
    } else {
      const lerp = 1 - Math.exp(-dt * 7.5)
      this.worldCamera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), lerp)
    }
    this.worldCamera.lookAt(lookX, lookY, lookZ)
  }

  updateInteraction() {
    if (!this.world || this.modalOpen || this.dialogueOpen || this.mode !== 'world') {
      $('interact-prompt').classList.add('hidden')
      this.nearest = null
      return
    }
    let best = null
    let bestDist = Infinity
    const consider = (type, target, dist, label, sub) => {
      if (dist < bestDist) { bestDist = dist; best = { type, target, label, sub, dist } }
    }
    for (const w of this.world.wilds) {
      if (!w.active) continue
      const d = Math.hypot(w.x - this.playerPos.x, w.z - this.playerPos.z)
      if (d < 8.4) consider('wild', w, d, `Challenge ${SPECIES[w.speciesId].name}`, `${TYPES[SPECIES[w.speciesId].type].name} · Lv ${w.level} · Wild Titan`)
    }
    for (const r of this.world.resources) {
      if (!r.active) continue
      const d = Math.hypot(r.group.position.x - this.playerPos.x, r.group.position.z - this.playerPos.z)
      if (d < 4.6) consider('resource', r, d, `Gather ${INGREDIENTS[this.world.region.material].name}`, `Scavenge · +2 ${INGREDIENTS[this.world.region.material].name}, +1 Wildgrain`)
    }
    const wd = Math.hypot(this.world.waystone.pos.x - this.playerPos.x, this.world.waystone.pos.z - this.playerPos.z)
    if (wd < 6.2) consider('waystone', this.world.waystone, wd, 'Open the Atlas', 'Waystone · Travel & rest')
    const gd = Math.hypot(this.world.gym.interactPos.x - this.playerPos.x, this.world.gym.interactPos.z - this.playerPos.z)
    if (gd < 11.5) {
      const cleared = this.state.player.badges.includes(this.world.region.id)
      consider('gym', this.world.gym, gd, `Challenge ${this.world.region.gym.leader}`, cleared ? `${this.world.region.gym.name} · Sigil earned` : `${this.world.region.gym.name} · ${TYPES[this.world.region.type].name} Gym`)
    }
    this.nearest = best
    const prompt = $('interact-prompt')
    if (best) {
      prompt.classList.remove('hidden')
      $('interact-label').textContent = best.label
      $('interact-sub').textContent = best.sub
    } else {
      prompt.classList.add('hidden')
    }
  }

  collectResource(res) {
    if (!res.active) return
    res.active = false
    res.group.visible = false
    res.respawnAt = performance.now() + 50000
    const mat = this.world.region.material
    this.state.player.inventory[mat] = (this.state.player.inventory[mat] || 0) + 2
    this.state.player.inventory.wildgrain = (this.state.player.inventory.wildgrain || 0) + 1
    this.audio.select()
    $('flash').classList.add('on')
    setTimeout(() => $('flash').classList.remove('on'), 80)
    this.toast(`+2 ${INGREDIENTS[mat].name} · +1 Wildgrain`, INGREDIENTS[mat].icon, 'good')
    this.save()
  }

  startWildBattle(wild) {
    if (!wild.active) return
    if (!this.state.player.party.some(c => c.hp > 0)) {
      this.toast('Your party is exhausted. Rest at a waystone.', '◌', 'bad')
      return
    }
    this.startBattle({ type: 'wild', wild, regionId: this.state.player.regionId })
  }

  talkToGym() {
    const region = this.world.region
    const gym = region.gym
    const cleared = this.state.player.badges.includes(region.id)
    if (cleared) {
      this.showDialogue({
        portrait: gym.leader[0], name: gym.leader, title: gym.title,
        text: `The sigil is yours, and the grove remembers. ${gym.quote} If you seek the rest of the circle, the waystone will carry you.`,
        actions: [{ label: 'Farewell', onClick: () => {} }]
      })
      return
    }
    this.showDialogue({
      portrait: gym.leader[0], name: gym.leader, title: gym.title,
      text: `I am ${gym.leader}, keeper of ${gym.name}. ${gym.quote} My titans have held this ground for a long time. Show me a bond that can move them.`,
      actions: [
        { label: `Challenge · Lv ${Math.min(...gym.team.map(m => m.level))}–${Math.max(...gym.team.map(m => m.level))}`, onClick: () => this.startBattle({ type: 'gym', gym, regionId: region.id }) },
        { label: 'Not yet', onClick: () => {} }
      ]
    })
  }

  startBattle(config) {
    this.closeDialogue()
    this.closeModal()
    if (this.modalOpen) return
    this.audio.init()
    this.audio.whoosh()
    $('flash').classList.add('on')
    setTimeout(() => $('flash').classList.remove('on'), 120)
    this.mode = 'battle'
    this.activeBattle = new Battle(this, config)
    this.setScene(this.activeBattle.arena.scene, this.activeBattle.arena.camera)
    this.resize()
  }

  enterBattleMode(battle) {
    this.mode = 'battle'
    $('hud').classList.add('hidden')
    $('interact-prompt').classList.add('hidden')
  }

  showBattleUI(show) {
    $('battle-ui').classList.toggle('hidden', !show)
  }

  finishBattle(battle, opts = {}) {
    const data = battle.resultData || {}
    battle.destroy()
    this.activeBattle = null
    this.mode = 'world'
    this.showBattleUI(false)
    this.setScene(this.world.scene, this.worldCamera)
    if (data.lost) {
      const ws = this.world.waystone.pos
      this.playerPos.set(ws.x, this.world.heightAt(ws.x, ws.z + 3.2), ws.z + 3.2)
      for (const c of this.state.player.party) {
        const st = statsFor(SPECIES[c.speciesId], c.level)
        c.hp = st.hp
        c.maxHp = st.hp
      }
      this.toast('Your party was tended at the waystone.', '✦', 'good')
    }
    if (data.badge) {
      this.toast(`Sigil earned: ${data.badge.badge}`, data.badge.sigil, 'good')
      setTimeout(() => this.checkEnding(), 750)
    }
    if (data.caught) {
      // result copy already explained the bond
    }
    if (opts.fled) this.toast('You escaped the encounter.', '↩')
    $('hud').classList.remove('hidden')
    this.refreshHUD()
    this.updateCamera(0, true)
    this.save()
    this.audio.setRegion(this.state.player.regionId)
  }

  checkEnding() {
    if (this.state.player.badges.length >= 8 && !this.state.flags.endingShown) {
      this.state.flags.endingShown = true
      this.save()
      this.audio.badge()
      this.openModal(`<div class="modal-shell" style="max-width:720px">
        <div class="modal-head">
          <div><div class="panel-eyebrow">THE EIGHTFOLD CIRCLE</div><h2>A Keeper of the Isles</h2><p>Eight sigils. Eight keepers. One bond.</p></div>
          <button class="modal-close" data-close>×</button>
        </div>
        <div class="modal-body" style="text-align:center;padding-bottom:40px">
          <div style="font-size:3rem;color:#f2c96d;text-shadow:0 0 40px rgba(242,201,109,.5)">✦</div>
          <p style="max-width:500px;margin:20px auto;font-size:0.82rem;line-height:1.85;color:#cfd3dd;font-weight:300">
            The last sigil settles into your keeper's ring. Somewhere beyond the fog, the titans answer with a sound like mountains remembering their names.
            <br><br>
            You came to the isles with one small friend and a handful of treats. You leave with a circle of eight, and the wilds themselves know your footsteps.
          </p>
          <button class="btn btn-primary" data-close style="margin:0 auto"><span>Keep Exploring</span><i>✦</i></button>
        </div>
      </div>`)
    }
  }

  addCaptured(creature) {
    const p = this.state.player
    if (!p.discovered.includes(creature.speciesId)) p.discovered.push(creature.speciesId)
    if (!p.seen.includes(creature.speciesId)) p.seen.push(creature.speciesId)
    if (p.party.length < 6) {
      p.party.push(creature)
      return 'party'
    }
    p.reserve.push(creature)
    return 'reserve'
  }

  refreshHUD() {
    if (!this.state?.player) return
    const p = this.state.player
    const region = regionById(p.regionId)
    const type = TYPES[region.type]
    $('hud-region-index').textContent = String(region.number).padStart(2, '0')
    $('hud-region-name').textContent = region.name
    $('hud-region-sub').textContent = region.subtitle
    $('hud-region-type').textContent = type.name
    $('hud-region-type').style.setProperty('--type', type.color)
    $('hud-region').style.borderLeftColor = type.color
    $('map-caption').textContent = region.name.toUpperCase()
    $('keeper-name').textContent = p.name
    $('keeper-initial').textContent = p.name[0]?.toUpperCase() || 'A'
    const rank = p.badges.length >= 8 ? 'Isle Champion' : p.badges.length >= 6 ? 'High Keeper' : p.badges.length >= 3 ? 'Sigil Seeker' : p.badges.length >= 1 ? 'Trail Keeper' : 'Novice Keeper'
    $('keeper-title').textContent = rank
    $('badge-rack').innerHTML = BADGES.map(b => {
      const earned = p.badges.includes(b.id)
      return `<div class="badge-slot ${earned ? 'earned' : ''}" style="--bc:${TYPES[b.type].color}" title="${b.name} — ${b.leader}">${b.sigil}</div>`
    }).join('')
    const cleared = p.badges.includes(region.id)
    if (!cleared) {
      $('hud-objective-text').textContent = `${region.gym.leader} waits at ${region.gym.name}`
    } else if (p.badges.length >= 8) {
      $('hud-objective-text').textContent = 'The Eightfold Circle is complete'
    } else {
      $('hud-objective-text').textContent = 'Travel onward — another sigil awaits'
    }
    const party = p.party
    $('party-dock').innerHTML = party.map((c, i) => {
      const sp = SPECIES[c.speciesId]
      const tt = TYPES[sp.type]
      const st = statsFor(sp, c.level)
      return `<div class="party-pill ${i === p.activeIndex ? 'active' : ''} ${c.hp <= 0 ? 'fainted' : ''}" style="--bc:${tt.color}" data-party="${i}">
        <div class="orb">${tt.icon}</div>
        <div><b>${sp.name}</b><span>Lv ${c.level}</span></div>
        <div class="mini-hp"><i style="width:${clamp(c.hp / st.hp * 100, 0, 100)}%;background:${c.hp / st.hp < 0.3 ? '#ff766b' : '#78e4a2'}"></i></div>
      </div>`
    }).join('')
    $('party-dock').querySelectorAll('[data-party]').forEach(el => {
      el.addEventListener('click', () => {
        p.activeIndex = Number(el.dataset.party)
        this.audio.click()
        this.refreshHUD()
        this.save()
      })
    })
  }

  updateMinimap() {
    if (!this.world) return
    const canvas = $('minimap')
    const ctx = canvas.getContext('2d')
    const w = canvas.width, h = canvas.height
    const cx = w / 2, cy = h / 2
    const scale = 2.36
    ctx.clearRect(0, 0, w, h)
    const region = this.world.region
    const pal = region.palette
    const grad = ctx.createRadialGradient(cx, cy, 20, cx, cy, 154)
    grad.addColorStop(0, 'rgba(34,49,63,0.55)')
    grad.addColorStop(1, 'rgba(6,10,18,0.25)')
    ctx.fillStyle = grad
    ctx.beginPath(); ctx.arc(cx, cy, 154, 0, Math.PI * 2); ctx.fill()
    ctx.strokeStyle = 'rgba(255,255,255,0.08)'
    ctx.lineWidth = 1
    for (const rr of [52, 100, 145]) {
      ctx.beginPath(); ctx.arc(cx, cy, rr, 0, Math.PI * 2); ctx.stroke()
    }
    ctx.beginPath(); ctx.moveTo(cx - 150, cy); ctx.lineTo(cx + 150, cy); ctx.moveTo(cx, cy - 150); ctx.lineTo(cx, cy + 150); ctx.stroke()
    const toMap = (x, z) => [cx + x * scale, cy + z * scale]
    const clampPoint = (x, z) => {
      const dx = x - this.playerPos.x, dz = z - this.playerPos.z
      return [cx + dx * scale, cy + dz * scale]
    }
    for (const r of this.world.resources) {
      if (!r.active) continue
      const [x, y] = clampPoint(r.group.position.x, r.group.position.z)
      if (Math.hypot(x - cx, y - cy) > 150) continue
      ctx.fillStyle = pal.glow
      ctx.beginPath(); ctx.arc(x, y, 2.4, 0, Math.PI * 2); ctx.fill()
    }
    for (const wd of this.world.wilds) {
      if (!wd.active) continue
      const [x, y] = clampPoint(wd.x, wd.z)
      if (Math.hypot(x - cx, y - cy) > 150) continue
      ctx.fillStyle = TYPES[SPECIES[wd.speciesId].type].color
      ctx.beginPath(); ctx.arc(x, y, 3.5, 0, Math.PI * 2); ctx.fill()
      ctx.strokeStyle = 'rgba(0,0,0,0.45)'; ctx.stroke()
    }
    const [gx, gy] = clampPoint(this.world.gym.pos.x, this.world.gym.pos.z)
    if (Math.hypot(gx - cx, gy - cy) < 150) {
      ctx.save(); ctx.translate(gx, gy); ctx.rotate(Math.PI / 4)
      ctx.fillStyle = this.state.player.badges.includes(region.id) ? pal.glow : '#f2c96d'
      ctx.fillRect(-6, -6, 12, 12)
      ctx.strokeStyle = '#0a0f1b'; ctx.lineWidth = 2; ctx.strokeRect(-6, -6, 12, 12)
      ctx.restore()
    }
    const [wx, wy] = clampPoint(this.world.waystone.pos.x, this.world.waystone.pos.z)
    if (Math.hypot(wx - cx, wy - cy) < 150) {
      ctx.fillStyle = '#8fe8ff'; ctx.fillRect(wx - 4, wy - 4, 8, 8)
      ctx.strokeStyle = 'rgba(10,20,30,0.7)'; ctx.strokeRect(wx - 4, wy - 4, 8, 8)
    }
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(-this.avatarFacing)
    ctx.fillStyle = '#fff4ce'
    ctx.beginPath(); ctx.moveTo(0, -8); ctx.lineTo(5.5, 7); ctx.lineTo(0, 4); ctx.lineTo(-5.5, 7); ctx.closePath(); ctx.fill()
    ctx.restore()
    ctx.strokeStyle = 'rgba(255,224,151,0.35)'
    ctx.lineWidth = 1.5
    ctx.beginPath(); ctx.arc(cx, cy, 152, 0, Math.PI * 2); ctx.stroke()
  }

  toast(text, icon = '✦', kind = '') {
    const stack = $('toast-stack')
    const el = document.createElement('div')
    el.className = `toast ${kind}`
    el.innerHTML = `<span class="t-icon">${icon}</span><span>${text}</span>`
    stack.appendChild(el)
    const timer = setTimeout(() => {
      el.classList.add('out')
      setTimeout(() => el.remove(), 420)
    }, 3200)
    this.toastTimers.push(timer)
  }

  showDialogue({ portrait, name, title, text, actions = [] }) {
    this.dialogueOpen = true
    $('dialogue').classList.remove('hidden')
    $('dialogue-portrait').textContent = portrait || name?.[0] || '?'
    $('dialogue-name').textContent = name
    $('dialogue-title').textContent = title
    $('dialogue-text').textContent = text
    const act = $('dialogue-actions')
    act.innerHTML = ''
    actions.forEach((a, i) => {
      const b = document.createElement('button')
      b.textContent = a.label
      b.onclick = () => {
        this.audio.click()
        this.closeDialogue()
        a.onClick?.()
      }
      act.appendChild(b)
    })
    this.audio.select()
  }

  closeDialogue() {
    this.dialogueOpen = false
    $('dialogue').classList.add('hidden')
  }

  openModal(html) {
    const layer = $('modal-layer')
    layer.innerHTML = html
    layer.classList.remove('hidden')
    this.modalOpen = true
    $('interact-prompt').classList.add('hidden')
    layer.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => this.closeModal()))
    this.audio.select()
  }

  closeModal() {
    this.modalOpen = false
    $('modal-layer').classList.add('hidden')
    $('modal-layer').innerHTML = ''
    $('interact-prompt').classList.add('hidden')
  }

  openAtlas() {
    if (this.mode !== 'world') return
    const p = this.state.player
    const cards = REGIONS.map(region => {
      const type = TYPES[region.type]
      const cleared = p.badges.includes(region.id)
      const current = p.regionId === region.id
      return `<button class="region-card ${current ? 'current' : ''} ${cleared ? 'cleared' : ''}" data-region="${region.id}" style="--rc:${type.color}">
        <div class="rc-top"><span class="rc-num">0${region.number}</span><span class="rc-type">${type.icon} ${type.name}</span></div>
        <h3>${region.name}</h3>
        <p>${region.subtitle}</p>
        <div class="rc-meta"><span>LV ${region.levelRange[0]}–${region.levelRange[1]}</span><span class="rc-badge ${cleared ? '' : 'locked'}">${region.gym.sigil} ${region.gym.badge}</span></div>
        <div class="rc-cta">${current ? 'You are here' : `Travel · ${region.gym.leader}`}</div>
      </button>`
    }).join('')
    const html = `<div class="modal-shell">
      <div class="modal-head">
        <div><div class="panel-eyebrow">WAYSTONE ATLAS</div><h2>The Eight Isles</h2><p>Danger rises with each isle. Your sigils open no doors — only your bond does.</p></div>
        <button class="modal-close" data-close>×</button>
      </div>
      <div class="modal-body">
        <div class="atlas-grid">${cards}</div>
        <div class="atlas-note">
          <span>${p.badges.length} / 8 sigils earned</span>
          <button class="text-btn" id="atlas-rest">✦ Rest & tend party</button>
        </div>
        <div style="display:flex;justify-content:flex-end;margin-top:14px"><button class="btn btn-primary" data-close><span>Close Atlas</span></button></div>
      </div>
    </div>`
    this.openModal(html)
    const layer = $('modal-layer')
    layer.querySelectorAll('[data-region]').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.dataset.region
        if (id === this.state.player.regionId) { this.closeModal(); return }
        this.closeModal()
        $('flash').classList.add('on')
        setTimeout(() => $('flash').classList.remove('on'), 140)
        this.enterRegion(id)
      })
    })
    $('atlas-rest')?.addEventListener('click', () => {
      for (const c of p.party) {
        const st = statsFor(SPECIES[c.speciesId], c.level)
        c.hp = st.hp; c.maxHp = st.hp
      }
      this.audio.levelUp()
      this.toast('Party restored at the waystone.', '✦', 'good')
      this.save()
      this.openAtlas()
    })
  }

  openJournal(tab = 'craft') {
    if (this.mode !== 'world') return
    this.journalTab = tab
    const p = this.state.player
    const tabs = [['craft', 'Treat Crafting'], ['party', 'Party'], ['codex', 'Field Guide']]
    const inv = p.inventory || {}
    const treatTotal = Object.values(p.treats || {}).reduce((a, b) => a + b, 0)
    const ingTotal = Object.values(inv).reduce((a, b) => a + b, 0)
    let body = ''
    if (tab === 'craft') {
      const ingredients = Object.entries(INGREDIENTS).map(([id, ing]) => {
        const n = inv[id] || 0
        return `<div class="ing-chip"><span>${ing.icon}</span><span>${ing.name}</span><b>${n}</b></div>`
      }).join('')
      const recipes = Object.entries(TREATS).map(([type, treat]) => {
        const t = TYPES[type]
        const can = Object.entries(treat.recipe).every(([k, v]) => (inv[k] || 0) >= v)
        const req = Object.entries(treat.recipe).map(([k, v]) => `${INGREDIENTS[k].name} ${inv[k] || 0}/${v}`).join(' · ')
        return `<div class="craft-card" style="--tc:${t.color}">
          <div class="craft-icon">${treat.icon}</div>
          <h4>${treat.name}</h4>
          <div class="craft-type">${t.name} treat · ×${treat.yield}</div>
          <p>${treat.desc}</p>
          <div class="recipe-line"><span>${req}</span><b>×${p.treats?.[type] || 0}</b></div>
          <button class="craft-btn" data-craft="${type}" ${can ? '' : 'disabled'}>${can ? 'Craft Treat' : 'Need ingredients'}</button>
        </div>`
      }).join('')
      body = `<div class="bag-summary">
        <div class="bag-stat"><span>READY TREATS</span><b>${treatTotal}</b></div>
        <div class="bag-stat"><span>INGREDIENTS</span><b>${ingTotal}</b></div>
        <div class="bag-stat"><span>SIGILS</span><b>${p.badges.length} / 8</b></div>
      </div>
      <h3 class="journal-title">Field Ingredients</h3>
      <div class="inv-strip">${ingredients}</div>
      <h3 class="journal-title">Treat Recipes</h3>
      <div class="craft-grid">${recipes}</div>`
    } else if (tab === 'party') {
      body = `<div class="bag-summary">
        <div class="bag-stat"><span>PARTY</span><b>${p.party.length} / 6</b></div>
        <div class="bag-stat"><span>SANCTUARY</span><b>${p.reserve.length}</b></div>
        <div class="bag-stat"><span>KNOWN TITANS</span><b>${p.discovered.length} / ${Object.keys(SPECIES).length}</b></div>
      </div>
      <div class="party-grid">${p.party.map((c, i) => this.partyCard(c, i, true)).join('')}</div>
      ${p.reserve.length ? `<h3 class="journal-title" style="margin-top:22px">Sanctuary</h3><div class="reserve-list">${p.reserve.map((c, i) => {
        const sp = SPECIES[c.speciesId], t = TYPES[sp.type]
        return `<div class="reserve-card" style="--tc:${t.color}"><div><b>${sp.name}</b><span>Lv ${c.level} · ${t.name}</span></div><button class="mini-btn" data-reserve="${i}">Swap in</button></div>`
      }).join('')}</div>` : ''}`
    } else {
      const cards = Object.entries(SPECIES).map(([speciesId, sp]) => {
        const known = p.discovered.includes(speciesId)
        const seen = p.seen.includes(speciesId) || known
        const t = TYPES[sp.type]
        return `<div class="codex-card ${seen ? 'seen' : 'empty-codex'}" style="--cc:${t.color}">
          <span>${known ? 'CAUGHT' : seen ? 'SEEN' : 'UNDISCOVERED'}</span>
          <h4>${seen ? sp.name : '???'}</h4>
          <p>${seen ? sp.epithet : 'The wilds keep this one hidden.'}</p>
        </div>`
      }).join('')
      body = `<div class="bag-summary">
        <div class="bag-stat"><span>REGISTERED</span><b>${p.discovered.length}</b></div>
        <div class="bag-stat"><span>SEEN IN THE WILD</span><b>${p.seen.length}</b></div>
        <div class="bag-stat"><span>REGIONS</span><b>${p.badges.length} / 8</b></div>
      </div><div class="codex-grid">${cards}</div>`
    }
    const html = `<div class="modal-shell">
      <div class="modal-head">
        <div><div class="panel-eyebrow">KEEPER'S JOURNAL</div><h2>${p.name}'s Field Notes</h2><p>Recipes, companions, and the titans you have met.</p></div>
        <button class="modal-close" data-close>×</button>
      </div>
      <div class="modal-body">
        <div class="journal-tabs">${tabs.map(([id, label]) => `<button class="tab-btn ${tab === id ? 'active' : ''}" data-tab="${id}">${label}</button>`).join('')}</div>
        ${body}
      </div>
    </div>`
    this.openModal(html)
    const layer = $('modal-layer')
    layer.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => { this.audio.click(); this.openJournal(b.dataset.tab) }))
    layer.querySelectorAll('[data-craft]').forEach(b => b.addEventListener('click', () => this.craftTreat(b.dataset.craft)))
    layer.querySelectorAll('[data-lead]').forEach(b => b.addEventListener('click', () => {
      const i = Number(b.dataset.lead)
      if (p.party[i].hp <= 0) { this.audio.error(); this.toast('That titan needs rest first.', '◌', 'bad'); return }
      p.activeIndex = i
      this.refreshHUD(); this.save(); this.audio.select()
      this.openJournal('party')
    }))
    layer.querySelectorAll('[data-reserve]').forEach(b => b.addEventListener('click', () => {
      const idx = Number(b.dataset.reserve)
      const active = p.activeIndex || 0
      const reserveCreature = p.reserve[idx]
      const outgoing = p.party[active]
      p.party[active] = reserveCreature
      p.reserve[idx] = outgoing
      this.audio.select()
      this.toast(`${SPECIES[reserveCreature.speciesId].name} joins the party.`, '✦', 'good')
      this.save()
      this.openJournal('party')
    }))
  }

  partyCard(c, i, withActions) {
    const sp = SPECIES[c.speciesId]
    const t = TYPES[sp.type]
    const st = statsFor(sp, c.level)
    const moves = movesFor(sp, c.level).map(id => {
      const m = MOVES[id]
      return `<span class="pc-move" style="--mc:${TYPES[m.type].color}">${m.name}</span>`
    }).join('')
    return `<div class="party-card" style="--pc:${t.color}">
      <div class="party-orb">${t.icon}</div>
      <div><h4>${sp.name} ${i === this.state.player.activeIndex ? '<span style="color:#f2c96d;font-size:.55rem">LEAD</span>' : ''}</h4>
        <div class="pc-meta">${t.name} · Lv ${c.level} · ${c.nature || 'Curious'}</div>
        <div class="pc-hp"><i style="width:${clamp(c.hp / st.hp * 100, 0, 100)}%;background:${c.hp / st.hp < .3 ? '#ff766b' : '#78e4a2'}"></i></div>
        <div class="pc-info"><span>${c.hp} / ${st.hp} HP</span><span>XP ${c.xp} / ${xpToNext(c.level)}</span></div>
      </div>
      <div class="pc-moves">${moves}</div>
      ${withActions ? `<div class="pc-actions"><button class="mini-btn" data-lead="${i}" ${c.hp <= 0 ? 'disabled' : ''}>Set as lead</button></div>` : ''}
    </div>`
  }

  craftTreat(type) {
    const p = this.state.player
    const treat = TREATS[type]
    const inv = p.inventory
    for (const [k, v] of Object.entries(treat.recipe)) {
      if ((inv[k] || 0) < v) { this.audio.error(); this.toast('Not enough ingredients.', '◌', 'bad'); return }
    }
    for (const [k, v] of Object.entries(treat.recipe)) inv[k] -= v
    p.treats[type] = (p.treats[type] || 0) + treat.yield
    this.audio.select()
    this.toast(`Crafted ×${treat.yield} ${treat.name}`, treat.icon, 'good')
    this.save()
    this.openJournal('craft')
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const game = new Game()
  window.__TITANBOUND__ = game
  // Eagerly compile the title scene so the first frame is stable.
  game.renderer.compile(game.titleStage.scene, game.titleStage.camera)
})
