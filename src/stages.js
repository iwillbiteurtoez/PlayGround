import * as THREE from 'three'
import { buildCreature, buildTrainer, makeGlowTexture, makeSpriteGlow, material } from './art.js'
import { SPECIES } from './data.js'

function gradientSky(scene, top, bottom, glowColor) {
  const geo = new THREE.SphereGeometry(160, 32, 20)
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: { top: { value: new THREE.Color(top) }, bottom: { value: new THREE.Color(bottom) }, glow: { value: new THREE.Color(glowColor) } },
    vertexShader: `varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
    fragmentShader: `varying vec3 vPos; uniform vec3 top; uniform vec3 bottom; uniform vec3 glow;
      void main(){ vec3 n=normalize(vPos); float t=smoothstep(-0.2,0.72,n.y); vec3 c=mix(bottom,top,t);
      float g=pow(max(0.,1.-length(n-normalize(vec3(0.3,0.15,1.0)))),6.0);
      c+=glow*g*0.42; gl_FragColor=vec4(c,1.); }`
  })
  scene.add(new THREE.Mesh(geo, mat))
}

function particleField(scene, color, count = 240, spread = 28) {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spread
    positions[i * 3 + 1] = Math.random() * 14 - 2
    positions[i * 3 + 2] = (Math.random() - 0.5) * spread
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const mat = new THREE.PointsMaterial({ color, size: 0.09, transparent: true, opacity: 0.72, depthWrite: false, blending: THREE.AdditiveBlending })
  const pts = new THREE.Points(geo, mat)
  scene.add(pts)
  return { pts, positions, count }
}

export function createTitleStage() {
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2('#6f7c8d', 0.016)
  gradientSky(scene, '#11162f', '#f0a56d', '#ffd08a')

  const hemi = new THREE.HemisphereLight('#ffd8a8', '#1a2233', 1.9)
  scene.add(hemi)
  const key = new THREE.DirectionalLight('#ffd1a0', 3.8)
  key.position.set(-14, 22, 18)
  key.castShadow = true
  key.shadow.mapSize.set(2048, 2048)
  key.shadow.camera.left = -35
  key.shadow.camera.right = 35
  key.shadow.camera.top = 35
  key.shadow.camera.bottom = -35
  key.shadow.camera.far = 120
  scene.add(key)
  const rim = new THREE.DirectionalLight('#7ee8dc', 3.0)
  rim.position.set(20, 9, -22)
  scene.add(rim)

  const rng = (() => { let a = 1234; return () => { a = Math.imul(a ^ a >>> 15, 1 | a); return ((a ^ a >>> 14) >>> 0) / 4294967296 } })()

  const base = new THREE.Mesh(new THREE.CylinderGeometry(26, 31, 6, 28), material('#3b4144', { roughness: 0.95 }))
  base.position.y = -3.2
  base.receiveShadow = true
  scene.add(base)
  const top = new THREE.Mesh(new THREE.CircleGeometry(26, 64), material('#4d5a4b', { roughness: 0.92 }))
  top.rotation.x = -Math.PI / 2
  top.position.y = -0.18
  top.receiveShadow = true
  scene.add(top)
  const path = new THREE.Mesh(new THREE.RingGeometry(9, 13, 48), material('#b49464', { roughness: 0.86 }))
  path.rotation.x = -Math.PI / 2
  path.position.y = -0.12
  scene.add(path)

  const arch = new THREE.Group()
  const archMat = material('#b8a176', { roughness: 0.65, metalness: 0.1 })
  const archGlow = material('#7ff4d4', { emissive: '#7ff4d4', emissiveIntensity: 1.6, roughness: 0.25 })
  arch.position.set(0, 0, -13)
  for (const s of [-1, 1]) {
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.45, 13, 8), archMat)
    pillar.position.set(s * 9, 6.5, 0)
    pillar.castShadow = true
    arch.add(pillar)
  }
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(20, 1.1, 2.2), archMat)
  lintel.position.y = 13.2
  arch.add(lintel)
  const halo = new THREE.Mesh(new THREE.TorusGeometry(4.1, 0.15, 8, 64), archGlow)
  halo.position.y = 8.3
  arch.add(halo)
  const halo2 = new THREE.Mesh(new THREE.TorusGeometry(2.7, 0.05, 4, 48), archGlow)
  halo2.position.y = 8.3
  arch.add(halo2)
  scene.add(arch)

  const giant = new THREE.Group()
  const treeMat = material('#2e4e3f', { roughness: 0.95 })
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 4.5, 24, 8), treeMat)
  trunk.position.y = 12
  trunk.castShadow = true
  giant.add(trunk)
  for (let i = 0; i < 5; i++) {
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(7 - i * 0.7, 1), material(i % 2 ? '#315a4b' : '#3b6c52', { roughness: 0.9 }))
    crown.position.set((rng() - 0.5) * 6, 24 + i * 2.2, (rng() - 0.5) * 4)
    crown.scale.y = 0.6
    crown.castShadow = true
    giant.add(crown)
  }
  const vine = new THREE.Mesh(new THREE.TorusGeometry(5.1, 0.13, 4, 32, Math.PI), material('#84e4a6', { emissive: '#84e4a6', emissiveIntensity: 0.6 }))
  vine.position.y = 13
  vine.rotation.z = 0.5
  giant.add(vine)
  giant.position.set(-18, 0, -17)
  scene.add(giant)

  const rocks = new THREE.Group()
  for (let i = 0; i < 8; i++) {
    const r = 10 + rng() * 20
    const a = rng() * Math.PI * 2
    const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5 + rng() * 3, 0), material(i % 2 ? '#4b5652' : '#697062', { roughness: 0.9 }))
    rock.position.set(Math.cos(a) * r, -1 + rng() * 1.2, Math.sin(a) * r)
    rock.rotation.set(rng() * 3, rng() * 3, rng() * 3)
    rock.castShadow = true
    rocks.add(rock)
  }
  scene.add(rocks)

  const floating = []
  for (let i = 0; i < 7; i++) {
    const g = new THREE.Group()
    const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5 + rng() * 3, 0), material('#535b58', { roughness: 0.92 }))
    rock.scale.y = 0.65
    rock.castShadow = true
    g.add(rock)
    const spire = new THREE.Mesh(new THREE.ConeGeometry(0.3, 2 + rng() * 2, 5), material('#8ff0d3', { emissive: '#8ff0d3', emissiveIntensity: 0.7 }))
    spire.position.y = 1.3
    g.add(spire)
    g.position.set((rng() - 0.5) * 62, 10 + rng() * 14, -20 - rng() * 22)
    g.userData.phase = rng() * 10
    g.userData.baseY = g.position.y
    scene.add(g)
    floating.push(g)
  }

  const hero = buildCreature('astraleon', { aura: true, scale: 1.85 })
  hero.position.set(8.5, 0, -4.5)
  hero.rotation.y = -0.55
  scene.add(hero)
  const stag = buildCreature('thornox', { aura: true, scale: 1.7 })
  stag.position.set(-9.5, 0, -3.5)
  stag.rotation.y = 0.55
  scene.add(stag)
  const moth = buildCreature('glimmerwing', { aura: true, scale: 1.4 })
  moth.position.set(-1.5, 5.6, -8.5)
  moth.rotation.y = 0.2
  scene.add(moth)

  const motes = particleField(scene, '#ffe3a6', 280, 38)
  const sunGlow = makeSpriteGlow('#ffd08a', 34)
  sunGlow.position.set(24, 20, -80)
  scene.add(sunGlow)

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 260)
  camera.position.set(0, 8.5, 26)
  camera.lookAt(0, 5, -5)

  let titleTime = 0
  function update(dt, t) {
    titleTime += dt
    const orbit = Math.sin(t * 0.08) * 1.5
    camera.position.set(Math.sin(orbit * 0.22) * 2.6, 8.2 + Math.sin(t * 0.12) * 0.45, 26 - Math.cos(t * 0.08) * 2.2)
    camera.lookAt(0, 5.2, -5)
    hero.userData.update?.(t, false)
    stag.userData.update?.(t + 2, false)
    moth.userData.update?.(t + 1, false)
    moth.position.y = 5.6 + Math.sin(t * 0.65) * 0.5
    moth.rotation.y = 0.25 + Math.sin(t * 0.24) * 0.15
    hero.rotation.y = -0.55 + Math.sin(t * 0.18) * 0.06
    stag.rotation.y = 0.55 + Math.sin(t * 0.15 + 2) * 0.05
    arch.rotation.y = Math.sin(t * 0.1) * 0.02
    halo.rotation.z = t * 0.08
    halo2.rotation.z = -t * 0.12
    for (const f of floating) {
      f.position.y = f.userData.baseY + Math.sin(t * 0.3 + f.userData.phase) * 0.8
      f.rotation.y = t * 0.03 + f.userData.phase
    }
    const p = motes.positions
    for (let i = 0; i < motes.count; i++) {
      p[i * 3 + 1] += 0.06 * dt * (0.4 + (i % 5) * 0.2)
      if (p[i * 3 + 1] > 15) p[i * 3 + 1] = -2
    }
    motes.pts.geometry.attributes.position.needsUpdate = true
    sunGlow.material.opacity = 0.36 + Math.sin(t * 0.4) * 0.04
  }
  return { scene, camera, update }
}

export function createStageScene() {
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2('#232939', 0.045)
  gradientSky(scene, '#12162a', '#343c55', '#ffcf8a')

  const hemi = new THREE.HemisphereLight('#dbe4ff', '#242536', 2.1)
  scene.add(hemi)
  const key = new THREE.DirectionalLight('#ffe1b1', 4.4)
  key.position.set(5, 8, 8)
  key.castShadow = true
  key.shadow.mapSize.set(1024, 1024)
  key.shadow.camera.left = -8
  key.shadow.camera.right = 8
  key.shadow.camera.top = 8
  key.shadow.camera.bottom = -8
  key.shadow.camera.far = 30
  scene.add(key)
  const rim = new THREE.DirectionalLight('#7fe9df', 4.2)
  rim.position.set(-6, 4, -5)
  scene.add(rim)
  const fill = new THREE.PointLight('#ffb96a', 12, 18, 2)
  fill.position.set(2, 4.5, 5)
  scene.add(fill)
  const fill2 = new THREE.PointLight('#88c8ff', 8, 16, 2)
  fill2.position.set(-4, 3.2, 2)
  scene.add(fill2)

  const floor = new THREE.Mesh(new THREE.CylinderGeometry(6.2, 6.6, 0.36, 32), material('#242735', { roughness: 0.45, metalness: 0.22 }))
  floor.position.y = -0.2
  floor.receiveShadow = true
  scene.add(floor)
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(4.3, 4.55, 0.16, 48), material('#343b4e', { roughness: 0.35, metalness: 0.35 }))
  disc.position.y = 0.03
  disc.receiveShadow = true
  scene.add(disc)
  const ring = new THREE.Mesh(new THREE.TorusGeometry(4.2, 0.045, 5, 64), material('#d9b86f', { emissive: '#d9b86f', emissiveIntensity: 0.9, roughness: 0.3 }))
  ring.rotation.x = Math.PI / 2
  ring.position.y = 0.14
  scene.add(ring)
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(5.6, 0.02, 4, 64), material('#7fe9df', { emissive: '#7fe9df', emissiveIntensity: 0.7, roughness: 0.3 }))
  ring2.rotation.x = Math.PI / 2
  ring2.position.y = 0.1
  scene.add(ring2)

  const backdrop = new THREE.Mesh(new THREE.CircleGeometry(18, 48), new THREE.MeshBasicMaterial({ color: '#0b0e19', transparent: true, opacity: 0.52 }))
  backdrop.position.set(0, 6, -13)
  scene.add(backdrop)

  const motes = particleField(scene, '#ffe8ad', 150, 18)
  const spot = makeSpriteGlow('#ffd79a', 7)
  spot.position.set(0, 3, -8)
  spot.material.opacity = 0.16
  scene.add(spot)

  const trainer = new THREE.Group()
  trainer.position.x = 1.28
  scene.add(trainer)
  let currentTrainer = null
  function setTrainer(opts) {
    if (currentTrainer) {
      trainer.remove(currentTrainer)
      currentTrainer.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) { if (Array.isArray(o.material)) o.material.forEach(m => m.dispose()); else o.material.dispose() } })
    }
    currentTrainer = buildTrainer(opts)
    currentTrainer.rotation.y = 0
    trainer.add(currentTrainer)
  }
  setTrainer({ gender: 'female', skin: '#e0a778', hairColor: '#56372a', outfit: '#e5b85f', hairStyle: 2 })

  const starterGroup = new THREE.Group()
  scene.add(starterGroup)
  const starterModels = {}
  const starterPedestals = []
  ;['mossling', 'cindercub', 'ripplefin'].forEach((id, i) => {
    const pedestal = new THREE.Group()
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.25, 0.35, 8), material('#2c3040', { roughness: 0.5, metalness: 0.28 }))
    base.position.y = -0.1
    pedestal.add(base)
    const rim = new THREE.Mesh(new THREE.TorusGeometry(1.08, 0.04, 4, 32), material(['#67e8a2', '#ff8659', '#59d8ff'][i], { emissive: ['#67e8a2', '#ff8659', '#59d8ff'][i], emissiveIntensity: 1.3 }))
    rim.rotation.x = Math.PI / 2
    rim.position.y = 0.1
    pedestal.add(rim)
    pedestal.position.set((i - 1) * 3.8, 0, 0)
    pedestal.userData.baseX = pedestal.position.x
    starterGroup.add(pedestal)
    starterPedestals.push(pedestal)
    const model = buildCreature(id, { aura: true, scale: 0.82 })
    model.position.set((i - 1) * 4.1, 0.15, 0)
    model.rotation.y = 0.06 * (i - 1)
    starterGroup.add(model)
    starterModels[id] = model
  })
  starterGroup.visible = false

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 150)
  camera.position.set(1.05, 1.85, 6.2)
  camera.lookAt(1.05, 1.08, 0)
  let mode = 'trainer'
  let targetCamera = new THREE.Vector3(1.05, 1.85, 6.2)
  let targetLook = new THREE.Vector3(1.05, 1.08, 0)
  let selectedStarter = 0

  function setMode(next) {
    mode = next
    if (mode === 'trainer') {
      trainer.visible = true
      starterGroup.visible = false
      targetCamera.set(1.05, 1.85, 6.2)
      targetLook.set(1.05, 1.08, 0)
    } else {
      trainer.visible = false
      starterGroup.visible = true
      targetCamera.set(0, 3.7, 14.6)
      targetLook.set(0, 1.55, 0)
    }
  }

  function selectStarter(i) {
    selectedStarter = i
    starterPedestals.forEach((p, j) => { p.position.y = j === i ? 0.18 : 0 })
  }

  function update(dt, t) {
    currentTrainer?.userData.update?.(t, false)
    if (currentTrainer) currentTrainer.rotation.y = Math.sin(t * 0.25) * 0.12
    for (const [id, m] of Object.entries(starterModels)) {
      m.userData.update?.(t + (id === 'cindercub' ? 1.4 : id === 'ripplefin' ? 2.8 : 0), false)
      m.rotation.y = Math.sin(t * 0.35 + (id === 'ripplefin' ? 2 : id === 'cindercub' ? 1 : 0)) * 0.15
    }
    starterPedestals.forEach((p, i) => {
      p.rotation.y = t * 0.18 + i
      p.scale.setScalar(i === selectedStarter ? 1.04 : 1)
    })
    ring.rotation.z = t * 0.1
    ring2.rotation.z = -t * 0.07
    camera.position.lerp(targetCamera, 0.06)
    const look = camera.userData.look || targetLook.clone()
    look.lerp(targetLook, 0.06)
    camera.userData.look = look
    camera.lookAt(look)
    const p = motes.positions
    for (let i = 0; i < motes.count; i++) {
      p[i * 3 + 1] += 0.1 * dt * (0.3 + (i % 4) * 0.25)
      if (p[i * 3 + 1] > 9) p[i * 3 + 1] = -1
    }
    motes.pts.geometry.attributes.position.needsUpdate = true
    spot.material.opacity = 0.14 + Math.sin(t * 1.1) * 0.03
  }

  return { scene, camera, setTrainer, setMode, selectStarter, update }
}
