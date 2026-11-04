import * as THREE from 'three'
import { REGIONS, SPECIES, TYPES, movesFor, regionById } from './data.js'
import { buildCreature, buildTrainer, makeGlowTexture, makeNameplate, makeSpriteGlow, material, disposeObject } from './art.js'

function hash(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function mulberry(seed) {
  let a = seed >>> 0
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0
    let t = Math.imul(a ^ a >>> 15, 1 | a)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

function clamp(v, a, b) { return Math.min(b, Math.max(a, v)) }
function smooth(t) { return t * t * (3 - 2 * t) }

export function regionHeightFunction(region) {
  const seed = hash(region.id) % 997
  return function heightAt(x, z) {
    const r = Math.hypot(x, z)
    let h = Math.sin(x * 0.072 + seed) * 0.72 + Math.cos(z * 0.085 - seed * 0.3) * 0.64
    h += Math.sin((x + z) * 0.043 + seed * 0.7) * 0.85
    h += Math.cos((x - z) * 0.12) * 0.24
    const pathFactor = smooth(clamp((Math.abs(x) - 2.2) / 8, 0, 1))
    const nearGym = smooth(clamp((Math.hypot(x, z + 38) - 8) / 10, 0, 1))
    const nearSpawn = smooth(clamp((Math.hypot(x, z - 15) - 6) / 12, 0, 1))
    h *= pathFactor * nearGym * nearSpawn
    if (r > 56) h -= (r - 56) * (r - 56) * 0.045
    return h
  }
}

const PATH_START_Z = 15
const GYM_Z = -38
const WORLD_RADIUS = 58

function makeSky(scene, palette, seed) {
  const geo = new THREE.SphereGeometry(320, 32, 18)
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {
      top: { value: new THREE.Color(palette.skyTop) },
      bottom: { value: new THREE.Color(palette.skyBottom) },
      sunColor: { value: new THREE.Color(palette.sun) }
    },
    vertexShader: `varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,
    fragmentShader: `
      varying vec3 vPos;
      uniform vec3 top; uniform vec3 bottom; uniform vec3 sunColor;
      void main(){
        float h = normalize(vPos).y;
        float t = smoothstep(-0.12, 0.62, h);
        vec3 col = mix(bottom, top, t);
        float glow = pow(max(0., 1. - length(normalize(vPos) - normalize(vec3(0.45,0.28,-0.85)))), 9.0);
        col = mix(col, sunColor, glow * 0.55);
        gl_FragColor = vec4(col, 1.0);
      }`
  })
  const sky = new THREE.Mesh(geo, mat)
  sky.frustumCulled = false
  scene.add(sky)

  const sun = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture(palette.sun), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.9
  }))
  sun.position.set(130, 90, -210)
  sun.scale.set(110, 110, 1)
  scene.add(sun)

  const stars = []
  if (['storm', 'celestial', 'frost', 'sunken'].includes(seed)) {
    const n = 700
    const pos = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 0.8 + 0.15)
      const r = 270
      pos[i * 3] = Math.sin(phi) * Math.cos(theta) * r
      pos[i * 3 + 1] = Math.cos(phi) * r + 40
      pos[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * r
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const p = new THREE.Points(g, new THREE.PointsMaterial({ color: '#fff6d8', size: 0.8, transparent: true, opacity: 0.75, depthWrite: false }))
    scene.add(p)
    stars.push(p)
  }
  return { sky, sun, stars }
}

function makeClouds(scene, palette, seed) {
  const group = new THREE.Group()
  const mat = new THREE.MeshBasicMaterial({ color: palette.fog, transparent: true, opacity: 0.14, depthWrite: false, side: THREE.DoubleSide })
  const rng = mulberry(hash(seed + 'clouds'))
  for (let i = 0; i < 18; i++) {
    const geo = new THREE.SphereGeometry(7 + rng() * 9, 8, 5)
    const cloud = new THREE.Mesh(geo, mat)
    cloud.position.set((rng() - 0.5) * 260, 24 + rng() * 32, (rng() - 0.5) * 260)
    cloud.scale.y = 0.24
    group.add(cloud)
  }
  scene.add(group)
  return group
}

function createTerrain(region, heightAt) {
  const size = 140, seg = 118
  const geo = new THREE.PlaneGeometry(size, size, seg, seg)
  geo.rotateX(-Math.PI / 2)
  const pos = geo.attributes.position
  const colors = []
  const cBase = new THREE.Color(region.palette.ground)
  const cHigh = new THREE.Color(region.palette.ground2)
  const cRock = new THREE.Color(region.palette.rock)
  const cAccent = new THREE.Color(region.palette.accent)
  const color = new THREE.Color()
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i)
    const r = Math.hypot(x, z)
    let y = heightAt(x, z)
    if (r > WORLD_RADIUS) y -= Math.pow((r - WORLD_RADIUS) * 0.25, 1.35)
    pos.setY(i, y)
    const n = (Math.sin(x * 0.21 + z * 0.17) + Math.cos(x * 0.13 - z * 0.25)) * 0.5
    const t = clamp(0.5 + n * 0.8 + Math.max(0, y) * 0.09, 0, 1)
    color.copy(cBase).lerp(cHigh, t)
    if (y > 1.55) color.lerp(cRock, clamp((y - 1.55) * 0.35, 0, 0.65))
    if (r > WORLD_RADIUS - 3) color.lerp(cRock, 0.55)
    if (rngPathGlow(region, x, z)) color.lerp(cAccent, 0.18)
    colors.push(color.r, color.g, color.b)
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  geo.computeVertexNormals()
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0.02, flatShading: true })
  const terrain = new THREE.Mesh(geo, mat)
  terrain.receiveShadow = true
  terrain.castShadow = false
  return terrain
}

function rngPathGlow(region, x, z) {
  return region.type === 'ember' && Math.abs(Math.sin(z * 0.18) + Math.cos(x * 0.17)) > 1.73
}

function createSea(scene, palette, region) {
  const mat = new THREE.MeshStandardMaterial({
    color: palette.water, transparent: true, opacity: region.type === 'tide' ? 0.55 : 0.25,
    roughness: 0.2, metalness: 0.2, emissive: palette.water, emissiveIntensity: 0.12
  })
  const sea = new THREE.Mesh(new THREE.CircleGeometry(220, 64), mat)
  sea.rotation.x = -Math.PI / 2
  sea.position.y = region.type === 'tide' ? -0.75 : -7.5
  sea.receiveShadow = true
  scene.add(sea)
  return sea
}

function propMaterials(region) {
  const p = region.palette
  return {
    wood: material('#56412f', { roughness: 0.95 }),
    darkWood: material('#3c3028', { roughness: 0.95 }),
    leaf: material(p.ground2, { roughness: 0.92 }),
    leaf2: material(p.accent, { roughness: 0.8, emissive: p.accent, emissiveIntensity: 0.04 }),
    rock: material(p.rock, { roughness: 0.88 }),
    rockLight: material(new THREE.Color(p.rock).lerp(new THREE.Color('#ffffff'), 0.15).getStyle(), { roughness: 0.9 }),
    crystal: material(p.accent, { emissive: p.glow, emissiveIntensity: 1.35, roughness: 0.24, metalness: 0.22 }),
    snow: material('#e9f7f4', { roughness: 0.85 }),
    glow: material(p.glow, { emissive: p.glow, emissiveIntensity: 2.2, roughness: 0.2 }),
    metal: material('#4b4d57', { metalness: 0.45, roughness: 0.5 }),
    bone: material('#d7c8a4', { roughness: 0.9 })
  }
}

function addMushroom(group, rng, mats, scale = 1) {
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25 * scale, 0.42 * scale, 2.4 * scale, 7), material('#d6c3a1', { roughness: 0.9 }))
  trunk.position.y = 1.2 * scale
  trunk.castShadow = true
  group.add(trunk)
  const cap = new THREE.Mesh(new THREE.SphereGeometry(1.4 * scale, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), material(rng() > 0.55 ? '#d96a5b' : '#a66fd1', { roughness: 0.72 }))
  cap.position.y = 2.4 * scale
  cap.scale.y = 0.5
  cap.castShadow = true
  group.add(cap)
  for (let i = 0; i < 5; i++) {
    const a = rng() * Math.PI * 2
    const dot = new THREE.Mesh(new THREE.IcosahedronGeometry(0.12 * scale, 0), material('#ffefcf', { emissive: '#ffc777', emissiveIntensity: 0.3 }))
    dot.position.set(Math.cos(a) * 0.8 * scale, 2.46 * scale, Math.sin(a) * 0.8 * scale)
    dot.scale.y = 0.25
    group.add(dot)
  }
  return group
}

function addTree(group, rng, mats, type) {
  const h = 3.5 + rng() * 5
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.62, h, 6), mats.wood)
  trunk.position.y = h / 2
  trunk.rotation.z = (rng() - 0.5) * 0.12
  trunk.castShadow = true
  group.add(trunk)
  if (type === 'pine' || type === 'dead') {
    for (let i = 0; i < 4; i++) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(1.7 - i * 0.27, 2.2, 7), type === 'dead' ? mats.darkWood : mats.leaf)
      cone.position.y = h * 0.42 + i * 1.25
      cone.rotation.y = rng() * 2
      cone.castShadow = true
      group.add(cone)
    }
    if (type === 'dead') {
      for (let i = 0; i < 4; i++) {
        const a = rng() * Math.PI * 2
        const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.14, 1.7, 4), mats.darkWood)
        branch.position.set(Math.cos(a) * 0.8, h * 0.55 + i * 0.8, Math.sin(a) * 0.8)
        branch.rotation.z = Math.cos(a) * 0.9
        branch.rotation.x = Math.sin(a) * 0.9
        group.add(branch)
      }
    }
  } else {
    const canopy = new THREE.Mesh(new THREE.IcosahedronGeometry(1.8 + rng() * 1.2, 1), mats.leaf)
    canopy.position.y = h
    canopy.scale.set(1.1, 0.7, 1.0)
    canopy.castShadow = true
    group.add(canopy)
    const canopy2 = new THREE.Mesh(new THREE.IcosahedronGeometry(1.3, 1), mats.leaf2)
    canopy2.position.set(0.8, h + 0.75, 0.3)
    canopy2.scale.set(1, 0.6, 0.8)
    canopy2.castShadow = true
    group.add(canopy2)
    if (rng() > 0.5) {
      const fruit = new THREE.Mesh(new THREE.IcosahedronGeometry(0.14, 0), mats.glow)
      fruit.position.set(-0.7, h - 0.3, 0.9)
      group.add(fruit)
    }
  }
  return group
}

function addCrystalCluster(group, rng, mats, scale = 1) {
  for (let i = 0; i < 5; i++) {
    const h = (1.1 + rng() * 2.4) * scale
    const crystal = new THREE.Mesh(new THREE.ConeGeometry((0.18 + rng() * 0.22) * scale, h, 5), mats.crystal)
    crystal.position.set((rng() - 0.5) * 1.8 * scale, h / 2, (rng() - 0.5) * 1.8 * scale)
    crystal.rotation.z = (rng() - 0.5) * 0.45
    crystal.rotation.x = (rng() - 0.5) * 0.35
    crystal.castShadow = true
    group.add(crystal)
  }
  return group
}

function addRuinColumn(group, rng, mats, scale = 1) {
  const h = 4 + rng() * 5
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.85 * scale, 1.0 * scale, 0.5, 8), mats.rock)
  base.position.y = 0.25
  base.castShadow = true
  const column = new THREE.Mesh(new THREE.CylinderGeometry(0.58 * scale, 0.7 * scale, h, 8), mats.rockLight)
  column.position.y = h / 2 + 0.4
  column.rotation.z = (rng() - 0.5) * 0.13
  column.castShadow = true
  const cap = new THREE.Mesh(new THREE.BoxGeometry(1.7 * scale, 0.3, 1.7 * scale), mats.rock)
  cap.position.y = h + 0.45
  cap.rotation.y = rng() * Math.PI
  group.add(base, column, cap)
  return group
}

function addShard(group, rng, mats, scale = 1) {
  const h = 2 + rng() * 5
  const shard = new THREE.Mesh(new THREE.ConeGeometry(0.5 * scale, h, 4), mats.rock)
  shard.position.y = h / 2
  shard.rotation.y = rng() * 3
  shard.rotation.z = (rng() - 0.5) * 0.22
  shard.castShadow = true
  group.add(shard)
  if (rng() > 0.5) {
    const glow = new THREE.Mesh(new THREE.ConeGeometry(0.12 * scale, h * 0.45, 4), mats.glow)
    glow.position.set(0.1, h * 0.4, 0.22)
    group.add(glow)
  }
  return group
}

function addCoral(group, rng, mats, scale = 1) {
  for (let i = 0; i < 5; i++) {
    const h = (1.2 + rng() * 3.4) * scale
    const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.08 * scale, 0.24 * scale, h, 5), rng() > 0.5 ? mats.crystal : material('#ef8c9b', { roughness: 0.75 }))
    branch.position.set((rng() - 0.5) * 1.5, h / 2, (rng() - 0.5) * 1.5)
    branch.rotation.z = (rng() - 0.5) * 0.7
    branch.rotation.x = (rng() - 0.5) * 0.7
    branch.castShadow = true
    group.add(branch)
  }
  return group
}

const plantLeafCache = new Map()
function plantLeafGeo(length, width) {
  const key = `${length.toFixed(2)}-${width.toFixed(2)}`
  if (plantLeafCache.has(key)) return plantLeafCache.get(key)
  const shape = new THREE.Shape()
  shape.moveTo(0, 0)
  shape.bezierCurveTo(-width, length * 0.18, -width * 0.92, length * 0.7, 0, length)
  shape.bezierCurveTo(width * 0.92, length * 0.7, width, length * 0.18, 0, 0)
  const geo = new THREE.ShapeGeometry(shape, 6)
  plantLeafCache.set(key, geo)
  return geo
}

function addBroadleaf(group, rng, mats, scale = 1, color) {
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.035 * scale, 0.075 * scale, 1.2 * scale, 5), mats.wood)
  stem.position.y = 0.6 * scale
  stem.rotation.z = (rng() - 0.5) * 0.2
  group.add(stem)
  const leafMat = material(color, { roughness: 0.78, side: THREE.DoubleSide })
  const count = 5 + Math.floor(rng() * 3)
  for (let i = 0; i < count; i++) {
    const length = (0.55 + rng() * 0.6) * scale
    const width = length * (0.34 + rng() * 0.14)
    const leaf = new THREE.Mesh(plantLeafGeo(length, width), leafMat)
    const a = (i / count) * Math.PI * 2 + rng() * 0.5
    leaf.position.set(Math.cos(a) * 0.13 * scale, 0.65 * scale + rng() * 0.4 * scale, Math.sin(a) * 0.13 * scale)
    leaf.rotation.set(-0.25 + rng() * 1.0, a + Math.PI / 2, (rng() - 0.5) * 0.8)
    leaf.castShadow = true
    group.add(leaf)
  }
  if (rng() > 0.58) {
    const bloomMat = material(rng() > 0.45 ? '#f7b2a4' : '#f6df9a', { roughness: 0.62, emissive: '#ffdca8', emissiveIntensity: 0.06 })
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2
      const petal = new THREE.Mesh(new THREE.SphereGeometry(0.1 * scale, 7, 5), bloomMat)
      petal.position.set(Math.cos(a) * 0.12 * scale, 1.22 * scale, Math.sin(a) * 0.12 * scale)
      petal.scale.set(1, 0.4, 0.65)
      group.add(petal)
    }
    const centre = new THREE.Mesh(new THREE.SphereGeometry(0.07 * scale, 6, 5), material('#f6d36d', { emissive: '#ffd264', emissiveIntensity: 0.18, roughness: 0.5 }))
    centre.position.y = 1.24 * scale
    group.add(centre)
  }
  return group
}

function addGrass(group, rng, mats, color) {
  const mat = material(color, { roughness: 0.9, side: THREE.DoubleSide })
  for (let i = 0; i < 5; i++) {
    const blade = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.5 + rng() * 0.6, 3), mat)
    blade.position.set((rng() - 0.5) * 0.7, 0.3, (rng() - 0.5) * 0.7)
    blade.rotation.z = (rng() - 0.5) * 0.5
    group.add(blade)
  }
  return group
}

function addRock(group, rng, mats, scale = 1) {
  const rock = new THREE.Mesh(new THREE.IcosahedronGeometry((0.6 + rng() * 1.0) * scale, 0), rng() > 0.5 ? mats.rock : mats.rockLight)
  rock.position.y = 0.4 * scale
  rock.scale.set(1, 0.65 + rng() * 0.4, 1)
  rock.rotation.set(rng() * 2, rng() * 2, rng() * 2)
  rock.castShadow = true
  rock.receiveShadow = true
  group.add(rock)
  return group
}

function addFloatingRock(scene, rng, mats, palette, y = 9) {
  const group = new THREE.Group()
  const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(1.0 + rng() * 2.2, 0), mats.rock)
  rock.scale.y = 0.7
  rock.castShadow = true
  group.add(rock)
  const crystal = new THREE.Mesh(new THREE.ConeGeometry(0.3, 2.2, 5), mats.crystal)
  crystal.position.y = 1.2
  group.add(crystal)
  group.position.set((rng() - 0.5) * 90, y + rng() * 12, (rng() - 0.5) * 90)
  group.userData.baseY = group.position.y
  group.userData.phase = rng() * 10
  scene.add(group)
  return group
}

function makeBanner(text, sigil, color, dark) {
  const canvas = document.createElement('canvas')
  canvas.width = 256; canvas.height = 512
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = dark
  ctx.fillRect(0, 0, 256, 512)
  const grad = ctx.createLinearGradient(0, 0, 0, 512)
  grad.addColorStop(0, color + '99')
  grad.addColorStop(1, color + '08')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 256, 512)
  ctx.strokeStyle = color
  ctx.lineWidth = 5
  ctx.globalAlpha = 0.7
  ctx.strokeRect(16, 16, 224, 480)
  ctx.globalAlpha = 1
  ctx.fillStyle = color
  ctx.font = '700 120px Georgia, serif'
  ctx.textAlign = 'center'
  ctx.fillText(sigil, 128, 180)
  ctx.fillStyle = '#fff6db'
  ctx.font = '600 32px Georgia, serif'
  const words = text.toUpperCase().split(' ')
  words.forEach((w, i) => ctx.fillText(w, 128, 300 + i * 42))
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide, roughness: 0.9, transparent: true })
}

function createGym(region, scene, heightAt) {
  const group = new THREE.Group()
  const x = 0, z = GYM_Z
  const y = heightAt(x, z)
  group.position.set(x, y, z)
  const p = region.palette
  const type = TYPES[region.type]
  const mats = propMaterials(region)

  const platform = new THREE.Mesh(new THREE.CylinderGeometry(10.5, 11.4, 1.1, 22), mats.rockLight)
  platform.position.y = 0.3
  platform.receiveShadow = true
  platform.castShadow = true
  group.add(platform)
  const inlay = new THREE.Mesh(new THREE.CylinderGeometry(8.2, 8.2, 0.1, 22), material(p.accent, { emissive: p.glow, emissiveIntensity: 0.28, roughness: 0.4 }))
  inlay.position.y = 0.9
  group.add(inlay)

  const archMat = mats.rockLight
  for (const s of [-1, 1]) {
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.45, 7.5, 8), archMat)
    pillar.position.set(s * 6.4, 4.6, 0)
    pillar.castShadow = true
    group.add(pillar)
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.7, 0.7, 8), mats.rock)
    base.position.set(s * 6.4, 1.15, 0)
    group.add(base)
    const cap = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.45, 2.2), mats.rock)
    cap.position.set(s * 6.4, 8.15, 0)
    group.add(cap)
  }
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(15.5, 0.9, 2.2), mats.rock)
  lintel.position.y = 8.55
  lintel.castShadow = true
  group.add(lintel)
  const crest = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.15, 6, 24), mats.glow)
  crest.position.set(0, 8.55, 0.3)
  group.add(crest)

  const bannerMat = makeBanner(region.name, type.sigil, type.color, type.dark)
  for (const s of [-1, 1]) {
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 4.6), bannerMat)
    banner.position.set(s * 4.3, 5.2, 1.18)
    banner.rotation.y = s * 0.04
    group.add(banner)
  }

  const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.4, 1.5, 8), mats.rock)
  pedestal.position.set(0, 1.4, -3.2)
  group.add(pedestal)
  const sigilStone = new THREE.Mesh(new THREE.OctahedronGeometry(0.58, 0), mats.crystal)
  sigilStone.position.set(0, 2.55, -3.2)
  sigilStone.castShadow = true
  group.add(sigilStone)

  const light = new THREE.PointLight(p.accent, 8, 24, 2)
  light.position.set(0, 6, 3)
  group.add(light)

  const leaderOpts = {
    verdant: { gender: 'female', skin: '#c68654', hairColor: '#56372a', outfit: '#4fc2a2', hairStyle: 3 },
    ember: { gender: 'male', skin: '#9b5f3b', hairColor: '#241d1b', outfit: '#d76b6b', hairStyle: 1 },
    tide: { gender: 'female', skin: '#e0a778', hairColor: '#3d7a72', outfit: '#4fc2a2', hairStyle: 4 },
    frost: { gender: 'male', skin: '#f2c6a0', hairColor: '#b9c1c8', outfit: '#5f6a7d', hairStyle: 2 },
    sunken: { gender: 'female', skin: '#6c402d', hairColor: '#7c4dc4', outfit: '#a57ae0', hairStyle: 2 },
    storm: { gender: 'female', skin: '#c68654', hairColor: '#d8b869', outfit: '#e5b85f', hairStyle: 5 },
    cinder: { gender: 'male', skin: '#6c402d', hairColor: '#241d1b', outfit: '#cf7f48', hairStyle: 0 },
    celestial: { gender: 'female', skin: '#f2c6a0', hairColor: '#b9c1c8', outfit: '#e6e0cf', hairStyle: 2 }
  }[region.id] || {}
  const leader = buildTrainer(leaderOpts)
  leader.position.set(0, 1.0, 2.1)
  leader.rotation.y = Math.PI
  group.add(leader)

  const leaderGlow = makeSpriteGlow(type.color, 3.6)
  leaderGlow.position.set(0, 3.4, 2.1)
  leaderGlow.material.opacity = 0.22
  group.add(leaderGlow)

  const marker = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.05, 5, 32), mats.glow)
  marker.rotation.x = Math.PI / 2
  marker.position.set(0, 1.0, 2.1)
  group.add(marker)

  scene.add(group)
  return {
    group, leader, sigilStone, leaderGlow, marker,
    pos: new THREE.Vector3(x, y, z),
    interactPos: new THREE.Vector3(x, y + 1.0, z + 4.5),
    update(t) {
      sigilStone.rotation.y = t * 0.8
      sigilStone.position.y = 2.55 + Math.sin(t * 1.7) * 0.12
      leaderGlow.material.opacity = 0.16 + Math.sin(t * 1.4) * 0.06
      marker.scale.setScalar(1 + Math.sin(t * 2.4) * 0.04)
      leader.userData.update?.(t, false)
    }
  }
}

function makeWaystone(region, scene, heightAt) {
  const group = new THREE.Group()
  const x = 0, z = PATH_START_Z
  const y = heightAt(x, z)
  group.position.set(x, y, z)
  const p = region.palette
  const mats = propMaterials(region)
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.8, 0.42, 8), mats.rock)
  ring.position.y = 0.2
  ring.receiveShadow = true
  group.add(ring)
  const ringGlow = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.055, 5, 48), mats.glow)
  ringGlow.rotation.x = Math.PI / 2
  ringGlow.position.y = 0.44
  group.add(ringGlow)
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.3, 2.8, 6), mats.rock)
    pillar.position.set(Math.cos(a) * 2.25, 1.6, Math.sin(a) * 2.25)
    pillar.rotation.z = Math.cos(a) * 0.12
    group.add(pillar)
    const cap = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 0), mats.crystal)
    cap.position.set(Math.cos(a) * 2.25, 3.1, Math.sin(a) * 2.25)
    group.add(cap)
  }
  const stone = new THREE.Mesh(new THREE.OctahedronGeometry(0.9, 0), mats.crystal)
  stone.position.y = 2.25
  stone.castShadow = true
  group.add(stone)
  const inner = new THREE.Mesh(new THREE.OctahedronGeometry(1.3, 0), new THREE.MeshBasicMaterial({ color: p.glow, transparent: true, opacity: 0.12, side: THREE.BackSide }))
  inner.position.y = 2.25
  group.add(inner)
  const light = new THREE.PointLight(p.accent, 5, 18, 2)
  light.position.y = 2.4
  group.add(light)
  const label = makeNameplate('WAYSTONE', 'Travel the isles', '#d9e6ff')
  label.position.set(0, 4.8, 0)
  label.scale.set(3.6, 1.08, 1)
  group.add(label)
  scene.add(group)
  return {
    group, stone, inner, ringGlow, label,
    pos: new THREE.Vector3(x, y, z),
    interactPos: new THREE.Vector3(x, y + 0.5, z + 2.8),
    update(t) {
      stone.rotation.y = t * 0.55
      stone.position.y = 2.25 + Math.sin(t * 1.4) * 0.18
      inner.rotation.y = -t * 0.3
      inner.scale.setScalar(1 + Math.sin(t * 2.2) * 0.04)
      ringGlow.rotation.z = t * 0.2
    }
  }
}

function createWild(region, speciesId, level, x, z, heightAt, rng) {
  const root = new THREE.Group()
  const y = heightAt(x, z)
  root.position.set(x, y, z)
  const model = buildCreature(speciesId, { aura: true })
  model.rotation.y = Math.PI * 0.5 + (rng() - 0.5) * 0.8
  root.add(model)
  const type = TYPES[SPECIES[speciesId].type]
  const plate = makeNameplate(SPECIES[speciesId].name, `${type.name} · Lv ${level}`, type.color)
  plate.position.set(0, SPECIES[speciesId].size * 0.95 + 1.1, 0)
  root.add(plate)
  const ringMat = new THREE.MeshBasicMaterial({ color: type.color, transparent: true, opacity: 0.35, side: THREE.DoubleSide })
  const ring = new THREE.Mesh(new THREE.RingGeometry(1.7, 1.78, 48), ringMat)
  ring.rotation.x = -Math.PI / 2
  ring.position.y = 0.08
  root.add(ring)
  const light = new THREE.PointLight(type.color, 1.6, 9, 2)
  light.position.y = 1.4
  root.add(light)
  return { root, model, plate, ring, ringMat, light, speciesId, level, x, z, y, active: true, respawnAt: 0 }
}

function createResource(region, x, z, heightAt, rng, type = 'plant') {
  const group = new THREE.Group()
  const y = heightAt(x, z)
  group.position.set(x, y, z)
  const mat = material(region.palette.glow, { emissive: region.palette.glow, emissiveIntensity: 2.5, roughness: 0.2 })
  const stemMat = material(region.palette.accent, { emissive: region.palette.accent, emissiveIntensity: 0.5, roughness: 0.6 })
  if (type === 'crystal') {
    for (let i = 0; i < 3; i++) {
      const c = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.6 + i * 0.18, 5), mat)
      c.position.set((rng() - 0.5) * 0.5, 0.3 + i * 0.08, (rng() - 0.5) * 0.5)
      c.rotation.z = (rng() - 0.5) * 0.5
      group.add(c)
    }
  } else {
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.045, 0.75, 4), stemMat)
    stem.position.y = 0.38
    group.add(stem)
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2
      const petal = new THREE.Mesh(new THREE.SphereGeometry(0.18, 6, 4), mat)
      petal.position.set(Math.cos(a) * 0.2, 0.78, Math.sin(a) * 0.2)
      petal.scale.set(1, 0.35, 0.55)
      group.add(petal)
    }
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.1, 0), material('#fff9dd', { emissive: '#ffefb0', emissiveIntensity: 2 }))
    core.position.y = 0.82
    group.add(core)
  }
  const halo = makeSpriteGlow(region.palette.glow, 2.1)
  halo.position.y = 0.62
  halo.material.opacity = 0.36
  group.add(halo)
  const light = new THREE.PointLight(region.palette.accent, 1.3, 7, 2)
  light.position.y = 0.7
  group.add(light)
  return { group, halo, light, seed: rng() * 10, active: true, respawnAt: 0 }
}

function createParticles(scene, region, type) {
  const rng = mulberry(hash(region.id + type))
  const count = type === 'snow' ? 420 : type === 'rain' ? 360 : 180
  const positions = new Float32Array(count * 3)
  const velocity = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const base = new THREE.Color(region.palette.glow)
  const alt = new THREE.Color(region.palette.accent)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (rng() - 0.5) * 110
    positions[i * 3 + 1] = rng() * 30
    positions[i * 3 + 2] = (rng() - 0.5) * 110
    velocity[i * 3] = (rng() - 0.5) * 0.4
    velocity[i * 3 + 1] = type === 'snow' ? -1.2 - rng() : type === 'rain' ? -6 - rng() * 3 : 0.2 + rng() * 0.6
    velocity[i * 3 + 2] = (rng() - 0.5) * 0.4
    const c = rng() > 0.5 ? base : alt
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  const size = type === 'snow' ? 0.12 : type === 'rain' ? 0.055 : type === 'spore' ? 0.13 : 0.08
  const mat = new THREE.PointsMaterial({
    size, transparent: true, opacity: type === 'rain' ? 0.45 : 0.7, depthWrite: false,
    blending: type === 'rain' ? THREE.NormalBlending : THREE.AdditiveBlending, vertexColors: true
  })
  const points = new THREE.Points(geo, mat)
  points.frustumCulled = false
  scene.add(points)
  return {
    points, positions, velocity, count, type,
    update(dt, t) {
      for (let i = 0; i < count; i++) {
        const ix = i * 3
        positions[ix] += velocity[ix] * dt + Math.sin(t * 0.6 + i) * 0.02 * dt
        positions[ix + 1] += velocity[ix + 1] * dt
        positions[ix + 2] += velocity[ix + 2] * dt
        if (positions[ix + 1] > 32) positions[ix + 1] = -1
        if (positions[ix + 1] < -1) positions[ix + 1] = 32
        if (positions[ix] > 58) positions[ix] = -58
        if (positions[ix] < -58) positions[ix] = 58
        if (positions[ix + 2] > 58) positions[ix + 2] = -58
        if (positions[ix + 2] < -58) positions[ix + 2] = 58
      }
      geo.attributes.position.needsUpdate = true
    }
  }
}

export function buildRegion(regionId) {
  const region = regionById(regionId)
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(region.palette.fog, 0.014)
  const heightAt = regionHeightFunction(region)
  const rng = mulberry(hash(region.id + 'world'))

  const sky = makeSky(scene, region.palette, region.id)
  const clouds = makeClouds(scene, region.palette, region.id)
  const sea = createSea(scene, region.palette, region)
  const terrain = createTerrain(region, heightAt)
  scene.add(terrain)

  const hemi = new THREE.HemisphereLight(region.palette.skyBottom, region.palette.ground, 1.55)
  scene.add(hemi)
  const sun = new THREE.DirectionalLight(region.palette.sun, 2.8)
  sun.position.set(32, 52, 18)
  sun.castShadow = true
  sun.shadow.mapSize.set(2048, 2048)
  sun.shadow.camera.left = -42
  sun.shadow.camera.right = 42
  sun.shadow.camera.top = 42
  sun.shadow.camera.bottom = -42
  sun.shadow.camera.near = 1
  sun.shadow.camera.far = 130
  sun.shadow.bias = -0.0004
  scene.add(sun)
  const rim = new THREE.DirectionalLight(region.palette.accent, 1.2)
  rim.position.set(-40, 24, -45)
  scene.add(rim)

  const mats = propMaterials(region)
  const props = new THREE.Group()
  scene.add(props)

  const avoid = (x, z) => {
    if (Math.hypot(x, z + GYM_Z) < 14) return true
    if (Math.hypot(x, z - PATH_START_Z) < 8) return true
    if (Math.abs(x) < 4.2 && z > GYM_Z - 2 && z < PATH_START_Z + 4) return true
    return false
  }

  const grassColors = [region.palette.accent, region.palette.ground2, new THREE.Color(region.palette.ground).lerp(new THREE.Color('#ffffff'), 0.32).getStyle()]
  for (let i = 0; i < 140; i++) {
    const a = rng() * Math.PI * 2
    const r = 7 + rng() * 49
    const x = Math.cos(a) * r
    const z = Math.sin(a) * r
    if (avoid(x, z)) continue
    const g = new THREE.Group()
    addGrass(g, rng, mats, grassColors[Math.floor(rng() * grassColors.length)])
    g.position.set(x, heightAt(x, z), z)
    g.rotation.y = rng() * Math.PI
    props.add(g)
  }

  // Broadleaf understory: the reference art is full of oversized leaves,
  // unfurling ferns and soft little blossoms.  This pass softens the
  // geometric silhouette of the island and frames the creatures.
  const leafTints = (region.type === 'ember' || region.type === 'stone')
    ? [region.palette.accent, region.palette.ground2, '#d69a61', '#bd6149', '#e8c17d']
    : (region.type === 'frost' || region.type === 'storm')
      ? [region.palette.ground2, region.palette.accent, '#b7ded4', '#89b8ae', '#ecf5e8']
      : [region.palette.accent, region.palette.ground2, '#83bd6e', '#d29a7a', '#e0aaa9', '#a6cf9b']
  for (let i = 0; i < 92; i++) {
    const a = rng() * Math.PI * 2
    const r = 7 + rng() * 50
    const x = Math.cos(a) * r
    const z = Math.sin(a) * r
    if (avoid(x, z)) continue
    const g = new THREE.Group()
    addBroadleaf(g, rng, mats, 0.65 + rng() * 0.95, leafTints[Math.floor(rng() * leafTints.length)])
    g.position.set(x, heightAt(x, z), z)
    g.rotation.y = rng() * Math.PI * 2
    props.add(g)
  }

  for (let i = 0; i < 66; i++) {
    const a = rng() * Math.PI * 2
    const r = 12 + rng() * 43
    const x = Math.cos(a) * r
    const z = Math.sin(a) * r
    if (avoid(x, z)) continue
    const g = new THREE.Group()
    const theme = region.id
    if (theme === 'verdant' || theme === 'sunken') {
      if (rng() > 0.48) addMushroom(g, rng, mats, 0.8 + rng() * 0.9)
      else addTree(g, rng, mats, 'tree')
    } else if (theme === 'ember' || theme === 'cinder') {
      if (rng() > 0.5) addShard(g, rng, mats, 0.65 + rng() * 0.75)
      else addTree(g, rng, mats, 'dead')
    } else if (theme === 'tide') {
      if (rng() > 0.55) addCoral(g, rng, mats, 0.7 + rng() * 0.9)
      else addRock(g, rng, mats, 0.8 + rng() * 1.2)
    } else if (theme === 'frost') {
      if (rng() > 0.4) addTree(g, rng, mats, 'pine')
      else addCrystalCluster(g, rng, mats, 0.65 + rng() * 0.75)
    } else if (theme === 'storm') {
      if (rng() > 0.55) addShard(g, rng, mats, 0.7 + rng() * 0.8)
      else addCrystalCluster(g, rng, mats, 0.55 + rng() * 0.7)
    } else if (theme === 'celestial') {
      if (rng() > 0.5) addRuinColumn(g, rng, mats, 0.7 + rng() * 0.8)
      else addCrystalCluster(g, rng, mats, 0.55 + rng() * 0.7)
    }
    g.position.set(x, heightAt(x, z), z)
    g.rotation.y = rng() * Math.PI * 2
    props.add(g)
  }

  for (let i = 0; i < 48; i++) {
    const a = rng() * Math.PI * 2
    const r = 10 + rng() * 48
    const x = Math.cos(a) * r
    const z = Math.sin(a) * r
    if (avoid(x, z)) continue
    const g = new THREE.Group()
    addRock(g, rng, mats, 0.6 + rng() * 1.8)
    g.position.set(x, heightAt(x, z), z)
    g.rotation.y = rng() * Math.PI
    props.add(g)
  }

  // Rim cliffs make the island feel suspended and keep the camera inside.
  for (let i = 0; i < 30; i++) {
    const a = (i / 30) * Math.PI * 2 + rng() * 0.1
    const r = WORLD_RADIUS + 2 + rng() * 3
    const g = new THREE.Group()
    const cliff = new THREE.Mesh(new THREE.IcosahedronGeometry(5 + rng() * 5, 0), mats.rock)
    cliff.scale.set(1.4, 2.8 + rng(), 1.4)
    cliff.position.y = -2 - rng() * 3
    cliff.rotation.set(rng(), rng(), rng())
    cliff.castShadow = true
    g.add(cliff)
    g.position.set(Math.cos(a) * r, heightAt(Math.cos(a) * r, Math.sin(a) * r), Math.sin(a) * r)
    props.add(g)
  }

  // Stepping stones lead the eye from the waystone to the gym.
  for (let i = 0; i < 20; i++) {
    const z = PATH_START_Z - 4 - i * 2.15
    if (z < GYM_Z + 9) break
    const x = Math.sin(i * 0.7) * 1.2
    const y = heightAt(x, z)
    const stone = new THREE.Mesh(new THREE.CylinderGeometry(1.0 + rng() * 0.22, 1.08 + rng() * 0.2, 0.16, 7), mats.rockLight)
    stone.position.set(x, y + 0.03, z)
    stone.rotation.y = rng() * 3
    stone.receiveShadow = true
    props.add(stone)
  }

  const gym = createGym(region, scene, heightAt)
  const waystone = makeWaystone(region, scene, heightAt)

  const wilds = []
  const wildPositions = [
    [16, -2], [-17, 5], [25, -18], [-26, -22], [9, -28], [-8, -13], [33, 12], [-38, 20]
  ]
  const count = region.danger >= 6 ? 5 : 5
  for (let i = 0; i < count; i++) {
    const [bx, bz] = wildPositions[i]
    const jitter = 3.2
    const x = bx + (rng() - 0.5) * jitter
    const z = bz + (rng() - 0.5) * jitter
    const speciesId = region.creatures[i % region.creatures.length]
    const level = region.levelRange[0] + Math.floor(rng() * (region.levelRange[1] - region.levelRange[0] + 1))
    const wild = createWild(region, speciesId, level, x, z, heightAt, rng)
    scene.add(wild.root)
    wilds.push(wild)
  }

  const resources = []
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2 + rng() * 0.5
    const r = 14 + rng() * 32
    const x = Math.cos(a) * r
    const z = Math.sin(a) * r
    const type = rng() > 0.55 ? 'crystal' : 'plant'
    const res = createResource(region, x, z, heightAt, rng, type)
    scene.add(res.group)
    resources.push(res)
  }

  const particleType = { verdant: 'firefly', ember: 'ember', tide: 'bubble', frost: 'snow', sunken: 'spore', storm: 'rain', cinder: 'ash', celestial: 'star' }[region.id] || 'firefly'
  const particles = createParticles(scene, region, particleType)

  const floaters = []
  if (['storm', 'celestial'].includes(region.id)) {
    for (let i = 0; i < 5; i++) floaters.push(addFloatingRock(scene, rng, mats, region.palette, 8 + i * 2))
  }

  const fireflies = []
  if (region.id === 'verdant' || region.id === 'sunken') {
    for (let i = 0; i < 24; i++) {
      const glow = makeSpriteGlow(region.palette.glow, 0.35)
      glow.position.set((rng() - 0.5) * 80, 1 + rng() * 6, (rng() - 0.5) * 80)
      glow.userData.baseY = glow.position.y
      glow.userData.phase = rng() * 10
      scene.add(glow)
      fireflies.push(glow)
    }
  }

  const pointLights = []
  for (const res of resources) {
    const l = new THREE.PointLight(region.palette.accent, 1.2, 6, 2)
    l.position.copy(res.group.position).add(new THREE.Vector3(0, 0.9, 0))
    scene.add(l)
    pointLights.push(l)
  }

  const spawn = new THREE.Vector3(0, heightAt(0, PATH_START_Z + 3.4), PATH_START_Z + 3.4)

  const world = {
    region, scene, camera: null, heightAt, gym, waystone, wilds, resources, particles, spawn,
    floaters, fireflies, sun, terrain, sea,
    update(dt, t) {
      particles.update(dt, t)
      gym.update(t)
      waystone.update(t)
      for (const w of wilds) {
        if (!w.active) continue
        w.model.userData.update?.(t, false)
        w.plate.position.y = SPECIES[w.speciesId].size * 0.95 + 1.1 + Math.sin(t * 1.2 + w.x) * 0.04
        w.ringMat.opacity = 0.26 + Math.sin(t * 2 + w.x) * 0.08
        w.ring.rotation.z = t * 0.12
      }
      for (const r of resources) {
        if (!r.active) continue
        r.group.rotation.y = t * 0.25 + r.seed
        r.group.position.y = heightAt(r.group.position.x, r.group.position.z) + 0.05 + Math.sin(t * 1.5 + r.seed) * 0.08
        r.halo.material.opacity = 0.25 + Math.sin(t * 2 + r.seed) * 0.12
      }
      for (const f of fireflies) {
        f.position.y = f.userData.baseY + Math.sin(t * 0.8 + f.userData.phase) * 0.7
        f.position.x += Math.sin(t * 0.3 + f.userData.phase) * 0.004
        f.material.opacity = 0.35 + Math.sin(t * 1.4 + f.userData.phase) * 0.25
      }
      for (const f of floaters) {
        f.position.y = f.userData.baseY + Math.sin(t * 0.45 + f.userData.phase) * 1.1
        f.rotation.y = t * 0.06 + f.userData.phase
      }
      for (const r of resources) { if (!r.active && r.respawnAt && performance.now() > r.respawnAt) { r.active = true; r.group.visible = true; r.respawnAt = 0 } }
      for (const w of wilds) { if (!w.active && w.respawnAt && performance.now() > w.respawnAt) { w.active = true; w.root.visible = true; w.respawnAt = 0 } }
      sky.sun.position.x = 130 + Math.sin(t * 0.01) * 4
      clouds.rotation.y = t * 0.002
    },
    dispose() {
      disposeObject(scene)
    }
  }
  return world
}

export function makeBattleArena(region) {
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(region.palette.fog, 0.022)
  makeSky(scene, region.palette, region.id)
  const hemi = new THREE.HemisphereLight(region.palette.skyBottom, region.palette.ground, 1.25)
  scene.add(hemi)
  const key = new THREE.DirectionalLight(region.palette.sun, 2.45)
  key.position.set(-10, 22, 14)
  key.castShadow = true
  key.shadow.mapSize.set(2048, 2048)
  key.shadow.camera.left = -22
  key.shadow.camera.right = 22
  key.shadow.camera.top = 22
  key.shadow.camera.bottom = -22
  key.shadow.camera.far = 80
  key.shadow.bias = -0.0003
  scene.add(key)
  const rim = new THREE.DirectionalLight(region.palette.accent, 1.55)
  rim.position.set(12, 9, -18)
  scene.add(rim)

  const mats = propMaterials(region)
  const stage = new THREE.Mesh(new THREE.CylinderGeometry(22, 23.5, 1.2, 36), mats.rock)
  stage.position.y = -0.6
  stage.receiveShadow = true
  scene.add(stage)
  const inlay = new THREE.Mesh(new THREE.RingGeometry(13.5, 18, 48), material(region.palette.accent, { emissive: region.palette.glow, emissiveIntensity: 0.28, roughness: 0.5, side: THREE.DoubleSide }))
  inlay.rotation.x = -Math.PI / 2
  inlay.position.y = 0.01
  scene.add(inlay)
  const center = new THREE.Mesh(new THREE.RingGeometry(2.6, 2.8, 48), material(region.palette.glow, { emissive: region.palette.glow, emissiveIntensity: 1.2, side: THREE.DoubleSide }))
  center.rotation.x = -Math.PI / 2
  center.position.y = 0.02
  scene.add(center)

  const rng = mulberry(hash(region.id + 'arena'))
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2
    const r = 19 + rng() * 4
    const g = new THREE.Group()
    if (region.id === 'verdant' || region.id === 'sunken') addMushroom(g, rng, mats, 0.8)
    else if (region.id === 'frost') addCrystalCluster(g, rng, mats, 0.8)
    else if (region.id === 'celestial') addRuinColumn(g, rng, mats, 0.65)
    else addShard(g, rng, mats, 0.9)
    g.position.set(Math.cos(a) * r, 0, Math.sin(a) * r)
    g.rotation.y = rng() * 6
    scene.add(g)
  }
  const particles = createParticles(scene, region, { verdant: 'firefly', ember: 'ember', tide: 'bubble', frost: 'snow', sunken: 'spore', storm: 'rain', cinder: 'ash', celestial: 'star' }[region.id] || 'firefly')

  const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 320)
  camera.position.set(0, 8.2, 16)
  camera.lookAt(0, 2.8, 0)
  return { scene, camera, stage, inlay, particles, key, rim, update(dt, t) { particles.update(dt, t); center.rotation.z = t * 0.1 } }
}

export { WORLD_RADIUS, GYM_Z, PATH_START_Z }
