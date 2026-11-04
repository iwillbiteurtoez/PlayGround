import * as THREE from 'three'
import { SPECIES } from './data.js'

const V = THREE.Vector3

export function material(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    roughness: opts.roughness ?? 0.72,
    metalness: opts.metalness ?? 0.04,
    emissive: new THREE.Color(opts.emissive || '#000000'),
    emissiveIntensity: opts.emissiveIntensity ?? 1,
    flatShading: opts.flatShading ?? true,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    side: opts.side ?? THREE.FrontSide,
    depthWrite: opts.depthWrite ?? true
  })
}

/* ---------- painterly creature surfaces ----------
   The creature art direction is lush, botanical watercolour rather than
   hard neon low-poly.  These canvas maps give every body a mottled,
   hand-painted wash and let the markings sit *in* the skin instead of
   floating on top of it. */
const skinCache = new Map()

function hashString(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) }
  return h >>> 0
}

function rngFrom(seed) {
  let a = seed
  return () => {
    a |= 0; a = a + 0x6D2B79F5 | 0
    let t = Math.imul(a ^ a >>> 15, 1 | a)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

function paintWash(ctx, color, x, y, r, alpha) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, r)
  g.addColorStop(0, color)
  g.addColorStop(0.55, color)
  g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.globalAlpha = alpha
  ctx.fillStyle = g
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()
  ctx.globalAlpha = 1
}

function skinTexture(art, kind = 'body') {
  const base = kind === 'belly' ? art.belly : kind === 'mane' ? (art.mane || art.belly) : kind === 'accent' ? art.accent : art.body
  const key = `${art.body}|${art.belly}|${art.accent}|${art.glow}|${art.pattern}|${kind}`
  if (skinCache.has(key)) return skinCache.get(key)
  const canvas = document.createElement('canvas')
  canvas.width = 256; canvas.height = 256
  const ctx = canvas.getContext('2d')
  const rnd = rngFrom(hashString(key))
  ctx.fillStyle = base
  ctx.fillRect(0, 0, 256, 256)

  // Broad translucent watercolour blooms.
  const bloomColors = kind === 'belly'
    ? [art.body, art.belly, art.accent, '#fffdf4']
    : [art.belly, art.accent, art.glow, art.body, '#fffdf4']
  for (let i = 0; i < 30; i++) {
    paintWash(ctx, bloomColors[Math.floor(rnd() * bloomColors.length)], rnd() * 256, rnd() * 256, 18 + rnd() * 72, 0.045 + rnd() * 0.07)
  }

  // Organic pigment speckles and tiny leaf-vein arcs.
  for (let i = 0; i < 170; i++) {
    ctx.globalAlpha = 0.06 + rnd() * 0.15
    ctx.fillStyle = rnd() > 0.52 ? art.accent : art.belly
    const s = 0.6 + rnd() * 2.2
    ctx.beginPath(); ctx.ellipse(rnd() * 256, rnd() * 256, s, s * (0.5 + rnd()), rnd() * 3, 0, Math.PI * 2); ctx.fill()
  }
  ctx.globalAlpha = 1

  if (kind === 'body') {
    const mark = art.pattern
    if (mark === 'stripes') {
      ctx.strokeStyle = art.belly
      ctx.globalAlpha = 0.46
      ctx.lineWidth = 12 + rnd() * 7
      for (let i = 0; i < 8; i++) {
        ctx.beginPath()
        const x = 8 + i * 33 + rnd() * 6
        ctx.moveTo(x, -20)
        ctx.bezierCurveTo(x + 18, 55, x - 18, 150, x + 12, 276)
        ctx.stroke()
      }
    } else if (mark === 'spots') {
      ctx.fillStyle = art.belly
      for (let i = 0; i < 24; i++) {
        ctx.globalAlpha = 0.42 + rnd() * 0.28
        const r = 4 + rnd() * 11
        ctx.beginPath(); ctx.arc(rnd() * 256, rnd() * 256, r, 0, Math.PI * 2); ctx.fill()
      }
    } else if (mark === 'rings' || mark === 'shell') {
      ctx.strokeStyle = art.accent
      ctx.globalAlpha = 0.34
      ctx.lineWidth = 5
      for (let i = 0; i < 10; i++) {
        ctx.beginPath(); ctx.ellipse(rnd() * 256, rnd() * 256, 10 + rnd() * 34, 8 + rnd() * 26, rnd() * 3, 0, Math.PI * 2); ctx.stroke()
      }
    } else if (mark === 'lava' || mark === 'glow' || mark === 'constellation') {
      ctx.strokeStyle = art.glow
      ctx.globalAlpha = 0.58
      ctx.lineWidth = 2.5
      for (let i = 0; i < 9; i++) {
        ctx.beginPath()
        let x = rnd() * 256, y = rnd() * 256
        ctx.moveTo(x, y)
        for (let j = 0; j < 4; j++) { x += (rnd() - 0.5) * 55; y += (rnd() - 0.5) * 55; ctx.lineTo(x, y) }
        ctx.stroke()
      }
    } else if (mark === 'moss' || mark === 'snow') {
      ctx.fillStyle = mark === 'snow' ? '#f7ffff' : '#6f9657'
      for (let i = 0; i < 30; i++) {
        ctx.globalAlpha = 0.22 + rnd() * 0.3
        const r = 2 + rnd() * 7
        ctx.beginPath(); ctx.ellipse(rnd() * 256, rnd() * 256, r, r * 0.7, rnd() * 3, 0, Math.PI * 2); ctx.fill()
      }
    }
    ctx.globalAlpha = 1
  }

  // Soft vertical light, like a wash of sun through leaves.
  const light = ctx.createLinearGradient(0, 0, 0, 256)
  light.addColorStop(0, 'rgba(255,250,220,0.14)')
  light.addColorStop(0.45, 'rgba(255,255,255,0)')
  light.addColorStop(1, 'rgba(20,45,32,0.10)')
  ctx.fillStyle = light
  ctx.fillRect(0, 0, 256, 256)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.anisotropy = 4
  skinCache.set(key, tex)
  return tex
}

function organicMaterial(art, kind = 'body', opts = {}) {
  const base = kind === 'belly' ? art.belly : kind === 'mane' ? (art.mane || art.belly) : kind === 'accent' ? art.accent : kind === 'wing' ? (art.wings || art.accent) : art.body
  const m = material('#ffffff', {
    roughness: opts.roughness ?? 0.8,
    metalness: 0,
    flatShading: false,
    transparent: opts.transparent,
    opacity: opts.opacity,
    side: opts.side,
    emissive: opts.emissive || art.glow,
    emissiveIntensity: opts.emissiveIntensity ?? 0.035
  })
  m.map = skinTexture(art, kind)
  m.color.set('#ffffff')
  m.needsUpdate = true
  return m
}

function leafGeometry(length = 0.5, width = 0.2) {
  const shape = new THREE.Shape()
  shape.moveTo(0, 0)
  shape.bezierCurveTo(-width, length * 0.22, -width * 0.9, length * 0.72, 0, length)
  shape.bezierCurveTo(width * 0.9, length * 0.72, width, length * 0.22, 0, 0)
  return new THREE.ShapeGeometry(shape, 8)
}

function addLeafSpray(parent, art, opts = {}) {
  const group = new THREE.Group()
  const count = opts.count ?? 6
  const leafMat = organicMaterial(art, opts.kind || 'accent', { side: THREE.DoubleSide, roughness: 0.85 })
  const rnd = rngFrom(hashString(`${art.body}-${opts.seed || 1}`))
  for (let i = 0; i < count; i++) {
    const leaf = new THREE.Mesh(leafGeometry((opts.length || 0.46) * (0.75 + rnd() * 0.5), (opts.width || 0.2) * (0.75 + rnd() * 0.45)), leafMat)
    const a = (i / count) * Math.PI * 2 + rnd() * 0.4
    const r = opts.radius ?? 0.62
    leaf.position.set(Math.cos(a) * r, rnd() * 0.18, Math.sin(a) * r)
    leaf.rotation.set(-0.3 + rnd() * 0.6, a + Math.PI / 2, (rnd() - 0.5) * 0.5)
    leaf.castShadow = true
    group.add(leaf)
  }
  group.position.copy(opts.position || new V(0, 0, 0))
  group.rotation.copy(opts.rotation || new THREE.Euler())
  parent.add(group)
  return group
}

function mesh(geometry, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geometry, mat)
  m.position.set(x, y, z)
  m.rotation.set(rx, ry, rz)
  m.castShadow = true
  m.receiveShadow = true
  return m
}

function ico(r, detail = 1) {
  // Smooth, pebble-like volumes read as living creatures rather than crystals.
  const width = 10 + detail * 4
  const height = 7 + detail * 3
  return new THREE.SphereGeometry(r, width, height)
}

function cyl(rt, rb, h, seg = 7) {
  return new THREE.CylinderGeometry(rt, rb, h, seg)
}

function cone(r, h, seg = 7) {
  return new THREE.ConeGeometry(r, h, seg)
}

function capsule(r, h, seg = 7) {
  return new THREE.CapsuleGeometry(r, h, 4, seg)
}

function box(w, h, d) {
  return new THREE.BoxGeometry(w, h, d)
}

function scaleMesh(m, x, y, z) {
  m.scale.set(x, y, z)
  return m
}

function between(a, b, radius, mat, radial = 6) {
  const dir = new V().subVectors(b, a)
  const len = dir.length()
  const m = new THREE.Mesh(cyl(radius * 0.82, radius, len, radial), mat)
  m.position.copy(a).add(b).multiplyScalar(0.5)
  m.quaternion.setFromUnitVectors(new V(0, 1, 0), dir.normalize())
  m.castShadow = true
  return m
}

function addEyes(head, art, opts = {}) {
  const g = new THREE.Group()
  const white = material('#fffdf2', { flatShading: false, roughness: 0.2 })
  const iris = material(art.eye || art.glow, { flatShading: false, roughness: 0.28, emissive: art.eye || art.glow, emissiveIntensity: 0.18 })
  const pupil = material('#17141a', { flatShading: false, roughness: 0.06 })
  const shine = material('#ffffff', { flatShading: false, roughness: 0.05, emissive: '#ffffff', emissiveIntensity: 0.3 })
  const positions = opts.positions || [[-0.25, 0.11, 0.39], [0.25, 0.11, 0.39]]
  const size = opts.size || 0.15
  for (const [x, y, z] of positions) {
    const e = mesh(ico(size, 2), white, x, y, z)
    e.castShadow = false
    const ir = mesh(ico(size * 0.64, 2), iris, x, y, z + size * 0.7)
    const pu = mesh(ico(size * 0.34, 2), pupil, x, y, z + size * 1.03)
    const glint = mesh(ico(size * 0.12, 1), shine, x - size * 0.18, y + size * 0.2, z + size * 1.18)
    ir.castShadow = false; pu.castShadow = false; glint.castShadow = false
    g.add(e, ir, pu, glint)
  }
  head.add(g)
  return g
}

function addMouth(head, art, y = -0.2, z = 0.47, width = 0.3) {
  const dark = material('#241a1a', { roughness: 0.4 })
  const m = mesh(box(width, 0.055, 0.06), dark, 0, y, z)
  head.add(m)
  const fangMat = material('#f2ead2', { roughness: 0.3 })
  for (const x of [-width * 0.38, width * 0.38]) {
    const f = mesh(cone(0.035, 0.14, 4), fangMat, x, y + 0.02, z + 0.03, Math.PI, 0, 0)
    head.add(f)
  }
  return m
}

function addHorns(parent, art, kind, opts = {}) {
  const mat = material(art.hornsColor || art.accent, { roughness: 0.55, emissive: art.glow, emissiveIntensity: opts.emissive ?? 0.08 })
  const darkMat = material(art.hornDark || '#4d3c2d', { roughness: 0.8 })
  if (kind === 'antlers') {
    const rootL = new THREE.Group(); const rootR = new THREE.Group()
    rootL.position.set(-0.3, 0.25, -0.08); rootR.position.set(0.3, 0.25, -0.08)
    rootL.rotation.z = 0.22; rootR.rotation.z = -0.22
    const branch = (g, x, y, z, ang, len, r, depth) => {
      const end = new V(x + Math.sin(ang) * len, y + Math.cos(ang) * len, z + 0.08)
      g.add(between(new V(x, y, z), end, r, mat))
      if (depth > 0) {
        branch(g, end.x + 0.1, end.y, end.z, ang + 0.5, len * 0.62, r * 0.68, depth - 1)
        branch(g, end.x - 0.1, end.y, end.z, ang - 0.55, len * 0.5, r * 0.62, depth - 1)
      }
    }
    branch(rootL, 0, 0, 0, -0.04, 0.7, 0.075, 2)
    branch(rootR, 0, 0, 0, 0.04, 0.7, 0.075, 2)
    parent.add(rootL, rootR)
    addLeafSpray(rootL, art, { count: 6, radius: 0.17, length: 0.34, width: 0.12, position: new V(0, 0.72, 0), rotation: new THREE.Euler(-0.5, 0.2, 0) })
    addLeafSpray(rootR, art, { count: 6, radius: 0.17, length: 0.34, width: 0.12, position: new V(0, 0.72, 0), rotation: new THREE.Euler(-0.5, -0.2, 0) })
    for (let i = 0; i < 6; i++) {
      const leaf = mesh(ico(0.14, 0), organicMaterial(art, i % 2 ? 'belly' : 'accent', { roughness: 0.82 }), (i % 2 ? 0.11 : -0.1), -0.5 + i * 0.13, 0.61)
      leaf.scale.set(0.42, 1.55, 0.22)
      leaf.rotation.z = (i % 2 ? -0.4 : 0.4)
      parent.add(leaf)
    }
  } else if (kind === 'ice') {
    for (const s of [-1, 1]) {
      const h = new THREE.Group(); h.position.set(0.3 * s, 0.25, 0)
      h.rotation.z = -0.65 * s
      h.add(mesh(cone(0.16, 0.85, 5), mat, 0, 0.42, 0))
      h.add(mesh(cone(0.09, 0.5, 5), mat, 0.1 * s, 0.7, 0, 0, 0, 0.22 * s))
      parent.add(h)
    }
  } else if (kind === 'spikes') {
    for (let i = 0; i < 4; i++) {
      const sp = mesh(cone(0.1, 0.38, 5), darkMat, -0.36 + i * 0.24, 0.35, -0.06 - i * 0.1, -0.2, 0, 0)
      parent.add(sp)
    }
  } else if (kind === 'crown') {
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI - Math.PI / 2
      const sp = mesh(cone(0.1, 0.5 + (i % 2) * 0.18, 4), mat, Math.sin(a) * 0.33, 0.38 + Math.cos(a) * 0.06, Math.cos(a) * 0.2, 0.1, 0, Math.sin(a) * 0.35)
      sp.material = material(art.accent, { emissive: art.glow, emissiveIntensity: 0.9, roughness: 0.3 })
      parent.add(sp)
    }
  } else if (kind === 'feather') {
    for (let i = 0; i < 3; i++) {
      const f = mesh(cone(0.06, 0.55 - i * 0.1, 4), mat, 0, 0.3 + i * 0.08, -0.1 - i * 0.12, -0.45 - i * 0.12, 0, 0)
      f.scale.set(0.6, 1, 0.4)
      parent.add(f)
    }
  } else if (kind === 'crest') {
    for (let i = 0; i < 4; i++) {
      const f = mesh(cone(0.055, 0.5, 4), mat, 0, 0.3, 0.1 - i * 0.18, -0.1 - i * 0.15, 0, 0)
      f.material = material(art.accent, { emissive: art.glow, emissiveIntensity: 1.4 })
      parent.add(f)
    }
  } else if (kind === 'fins') {
    for (const s of [-1, 1]) {
      const fin = mesh(cone(0.2, 0.55, 4), mat, 0.32 * s, 0.18, -0.05, 0, 0, 0.6 * s)
      fin.scale.set(0.28, 1, 0.6)
      parent.add(fin)
    }
    const crest = mesh(cone(0.12, 0.5, 4), mat, 0, 0.42, 0, -0.25, 0, 0)
    crest.scale.set(0.4, 1, 0.7)
    parent.add(crest)
  } else if (kind === 'rings') {
    for (let i = 0; i < 2; i++) {
      const ring = mesh(new THREE.TorusGeometry(0.55 + i * 0.24, 0.025, 5, 28), material(art.accent, { emissive: art.glow, emissiveIntensity: 0.55, roughness: 0.3, flatShading: false }), 0, 0.48, 0, Math.PI / 2, 0, i * 0.35)
      ring.castShadow = false
      parent.add(ring)
    }
  } else if (kind === 'bolt') {
    for (const s of [-1, 1]) {
      const g = new THREE.Group(); g.position.set(0.28 * s, 0.3, 0)
      g.add(mesh(cyl(0.045, 0.07, 0.35, 5), mat, 0, 0.17, 0, 0, 0, -0.3 * s))
      g.add(mesh(cyl(0.035, 0.055, 0.32, 5), mat, 0.13 * s, 0.44, 0, 0, 0, 0.34 * s))
      g.add(mesh(cyl(0.02, 0.035, 0.26, 5), mat, 0.05 * s, 0.67, 0, 0, 0, -0.3 * s))
      parent.add(g)
    }
  } else if (kind === 'curved') {
    for (const s of [-1, 1]) {
      const h = new THREE.Group(); h.position.set(0.34 * s, 0.24, 0)
      h.rotation.z = -0.6 * s
      h.add(mesh(cyl(0.07, 0.16, 0.7, 6), mat, 0, 0.35, 0))
      const tip = mesh(cone(0.08, 0.38, 5), mat, 0.14 * s, 0.76, 0, 0, 0, -0.7 * s)
      h.add(tip)
      parent.add(h)
    }
  }
}

function addPattern(body, art, kind) {
  const g = new THREE.Group()
  if (kind === 'spots') {
    const m = material(art.belly, { roughness: 0.8 })
    for (let i = 0; i < 9; i++) {
      const s = mesh(ico(0.09 + (i % 3) * 0.025, 0), m, -0.7 + (i % 3) * 0.62, 0.15 + Math.sin(i) * 0.28, -0.8 + Math.floor(i / 3) * 0.7)
      s.scale.set(1, 0.3, 1)
      g.add(s)
    }
  } else if (kind === 'stripes') {
    const m = material(art.belly, { roughness: 0.85 })
    for (let i = 0; i < 5; i++) {
      const st = mesh(ico(0.14 + (i % 2) * 0.03, 0), m, (i % 2 ? 0.34 : -0.34), 0.28 + (i % 2) * 0.1, -0.9 + i * 0.42)
      st.scale.set(0.34, 1.08, 1.5)
      st.rotation.z = (i % 2 ? -0.2 : 0.2)
      g.add(st)
    }
  } else if (kind === 'lava') {
    const m = material(art.glow, { emissive: art.glow, emissiveIntensity: 2.2, roughness: 0.2 })
    for (let i = 0; i < 6; i++) {
      const crack = mesh(box(0.045, 0.035, 0.5 + (i % 3) * 0.2), m, -0.55 + (i % 3) * 0.52, 0.3 + (i % 2) * 0.22, -0.6 + Math.floor(i / 3) * 0.85, 0, 0.3, 0)
      crack.castShadow = false
      g.add(crack)
    }
  } else if (kind === 'constellation') {
    const m = material(art.glow, { emissive: art.glow, emissiveIntensity: 3, roughness: 0.1 })
    const dots = [[-0.5, 0.45, 0.7], [0.1, 0.5, 0.9], [0.55, 0.3, 0.6], [-0.25, 0.35, -0.4], [0.35, 0.55, -0.2], [0.65, 0.2, -0.7]]
    for (const [x, y, z] of dots) {
      const d = mesh(ico(0.045, 0), m, x, y, z)
      d.castShadow = false
      g.add(d)
    }
    const lineMat = new THREE.LineBasicMaterial({ color: art.glow, transparent: true, opacity: 0.55 })
    const points = dots.slice(0, 5).map(p => new V(p[0], p[1] + 0.03, p[2]))
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), lineMat)
    g.add(line)
  } else if (kind === 'snow') {
    const m = material('#f7ffff', { roughness: 0.6 })
    for (let i = 0; i < 7; i++) {
      const d = mesh(ico(0.055 + (i % 2) * 0.03, 0), m, -0.55 + (i % 4) * 0.38, 0.42 + (i % 3) * 0.18, -0.75 + Math.floor(i / 4) * 0.8)
      g.add(d)
    }
  } else if (kind === 'moss') {
    const m = material('#6f9657', { roughness: 0.95 })
    for (let i = 0; i < 8; i++) {
      const d = mesh(ico(0.1 + (i % 3) * 0.04, 0), m, -0.62 + (i % 4) * 0.4, 0.45 + (i % 2) * 0.24, -0.6 + Math.floor(i / 4) * 0.95)
      d.scale.set(1.2, 0.35, 1.2)
      g.add(d)
    }
  } else if (kind === 'bolts') {
    const m = material(art.glow, { emissive: art.glow, emissiveIntensity: 2.8, roughness: 0.2 })
    for (let i = 0; i < 3; i++) {
      const bolt = new THREE.Group()
      bolt.position.set(-0.4 + i * 0.32, 0.25 + (i % 2) * 0.2, 0.82)
      bolt.add(mesh(cyl(0.022, 0.03, 0.25, 4), m, 0, 0, 0, 0, 0, 0.45))
      bolt.add(mesh(cyl(0.018, 0.024, 0.22, 4), m, 0.08, 0.19, 0.02, 0, 0, -0.5))
      g.add(bolt)
    }
  } else if (kind === 'rings') {
    const m = material(art.accent, { emissive: art.glow, emissiveIntensity: 1.2, roughness: 0.35 })
    for (let i = 0; i < 3; i++) {
      const ring = mesh(new THREE.TorusGeometry(0.72 + i * 0.08, 0.025, 4, 16), m, 0, 0.1, 0.1 + i * 0.42, 0, 0.3, 0)
      g.add(ring)
    }
  }
  body.add(g)
}

function addMane(parent, art, radius = 0.75) {
  const mane = organicMaterial(art, 'mane', { roughness: 0.95 })
  const group = new THREE.Group()
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2
    const tuft = mesh(cone(0.12, 0.48, 5), mane, Math.cos(a) * radius, 0.03 + Math.sin(i * 2.2) * 0.05, Math.sin(a) * radius, Math.cos(a) * 0.55, 0, Math.sin(a) * 0.55)
    group.add(tuft)
  }
  parent.add(group)
  return group
}

function addTail(parent, art, kind = 'tuft') {
  const g = new THREE.Group()
  if (kind === 'flame') {
    g.position.set(0, 0.15, -1.55)
    g.add(between(new V(0, 0, 0), new V(0, 0.25, -0.55), 0.12, organicMaterial(art, 'body')))
    const flame = mesh(cone(0.3, 0.7, 6), material(art.glow, { emissive: art.glow, emissiveIntensity: 1.8, transparent: true, opacity: 0.9, flatShading: false }), 0, 0.35, -0.62)
    flame.rotation.x = -0.4
    g.add(flame)
  } else if (kind === 'fin') {
    g.position.set(0, 0.1, -1.55)
    g.add(between(new V(0, 0, 0), new V(0, 0.2, -1.0), 0.14, organicMaterial(art, 'body')))
    const fin = mesh(cone(0.55, 0.8, 3), material(art.accent, { emissive: art.glow, emissiveIntensity: 0.3, transparent: true, opacity: 0.75, flatShading: false }), 0, 0.16, -1.1, Math.PI / 2, 0, 0)
    fin.scale.set(1, 1, 0.22)
    g.add(fin)
  } else if (kind === 'leaf') {
    g.position.set(0, 0.1, -1.55)
    g.add(between(new V(0, 0, 0), new V(0, 0.35, -0.55), 0.09, material('#5f7040')))
    const leaf = mesh(ico(0.32, 0), organicMaterial(art, 'accent', { emissiveIntensity: 0.08 }), 0, 0.5, -0.7)
    leaf.scale.set(0.8, 1.5, 0.25)
    leaf.rotation.x = -0.45
    g.add(leaf)
  } else if (kind === 'chain') {
    g.position.set(0, 0.1, -1.45)
    for (let i = 0; i < 4; i++) {
      const seg = mesh(ico(0.17 - i * 0.02, 0), organicMaterial(art, 'accent', { emissiveIntensity: 0.08 }), 0, 0.2 + i * 0.12, -0.35 - i * 0.28)
      g.add(seg)
    }
  } else {
    g.position.set(0, 0.1, -1.5)
    g.add(between(new V(0, 0, 0), new V(0, 0.38, -0.8), 0.12, organicMaterial(art, 'body')))
    const tuft = mesh(ico(0.25, 0), organicMaterial(art, 'mane', { roughness: 0.95 }), 0, 0.4, -0.86)
    tuft.scale.set(0.7, 0.7, 1.2)
    g.add(tuft)
  }
  parent.add(g)
  return g
}

function addWings(parent, art, style) {
  const wings = []
  for (const side of [-1, 1]) {
    const wing = new THREE.Group()
    wing.position.set(side * 0.72, 0.08, -0.35)
    if (style === 'moth') {
      const shape = new THREE.Shape()
      shape.moveTo(0, 0)
      shape.bezierCurveTo(side * 0.9, 1.0, side * 2.0, 1.45, side * 2.15, 0.35)
      shape.bezierCurveTo(side * 1.5, 0.18, side * 0.7, -0.2, 0, 0)
      const geo = new THREE.ShapeGeometry(shape, 12)
      const m = new THREE.Mesh(geo, organicMaterial(art, 'wing', {
        emissiveIntensity: 0.2, transparent: true, opacity: 0.88, side: THREE.DoubleSide, roughness: 0.55
      }))
      m.castShadow = true
      wing.add(m)
      const eye = mesh(ico(0.14, 0), material(art.glow, { emissive: art.glow, emissiveIntensity: 1.4, flatShading: false }), side * 0.7, 0.55, 0.02)
      eye.scale.set(1, 1, 0.2)
      wing.add(eye)
    } else if (style === 'bird') {
      for (let i = 0; i < 5; i++) {
        const feather = mesh(cone(0.13 - i * 0.014, 1.15 - i * 0.09, 4), organicMaterial(art, i % 2 ? 'wing' : 'belly', { roughness: 0.9 }), side * (0.28 + i * 0.25), 0.14 - i * 0.05, -0.1 - i * 0.06, 0, 0, side * (1.12 + i * 0.11))
        feather.scale.set(0.5, 1, 0.18)
        wing.add(feather)
      }
    } else {
      const membrane = new THREE.Shape()
      membrane.moveTo(0, 0)
      membrane.bezierCurveTo(side * 0.85, 0.75, side * 1.55, 0.7, side * 1.95, 0.05)
      membrane.bezierCurveTo(side * 1.4, -0.15, side * 0.8, -0.72, 0, -0.3)
      const geo = new THREE.ShapeGeometry(membrane, 10)
      const cloth = new THREE.Mesh(geo, organicMaterial(art, 'wing', {
        emissiveIntensity: 0.09, transparent: true, opacity: 0.94, side: THREE.DoubleSide, roughness: 0.78
      }))
      cloth.castShadow = true
      wing.add(cloth)
      const boneMat = material(art.accent, { emissive: art.glow, emissiveIntensity: 0.6 })
      for (let i = 0; i < 3; i++) {
        const a = 0.35 + i * 0.35
        wing.add(between(new V(0, 0, 0), new V(side * Math.cos(a) * 1.75, Math.sin(a) * 0.7, 0.02), 0.035, boneMat))
      }
    }
    parent.add(wing)
    wings.push(wing)
  }
  return wings
}

function addAura(root, color, count = 18, radius = 1.5, y = 1.8) {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2
    const r = radius * (0.45 + Math.random() * 0.7)
    positions[i * 3] = Math.cos(a) * r
    positions[i * 3 + 1] = y + (Math.random() - 0.3) * 2.2
    positions[i * 3 + 2] = Math.sin(a) * r
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const mat = new THREE.PointsMaterial({ color, size: 0.075, transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending })
  const pts = new THREE.Points(geo, mat)
  pts.userData.base = positions.slice()
  pts.userData.phase = Math.random() * 10
  root.add(pts)
  return pts
}

function buildQuad(parts, art, type, opts) {
  const { body, belly, accent, glow, mane } = art
  const bodyMat = organicMaterial(art, 'body')
  const bellyMat = organicMaterial(art, 'belly')
  const accentMat = organicMaterial(art, 'accent', { emissiveIntensity: 0.07 })
  const glowMat = material(glow, { emissive: glow, emissiveIntensity: 2 })
  const isStag = type === 'stag'
  const isHound = type === 'hound'
  const isYak = type === 'yak'
  const isLion = type === 'lion'
  const isTurtle = type === 'turtle'
  const isOtter = type === 'otter'
  const isToad = type === 'toad'

  let bodyY = 2.15
  if (isTurtle || isToad) bodyY = 1.85
  if (isYak) bodyY = 2.35

  const torso = mesh(ico(1, 1), bodyMat, 0, bodyY, 0)
  torso.scale.set(isYak ? 1.5 : isHound ? 1.15 : 1.25, isToad ? 1.0 : isTurtle ? 0.82 : 1.05, isOtter ? 2.0 : 1.8)
  parts.root.add(torso)
  parts.body = torso

  const bellyMesh = mesh(ico(0.9, 1), bellyMat, 0, bodyY - 0.28, 0.2)
  bellyMesh.scale.set(0.9, 0.65, 1.28)
  parts.root.add(bellyMesh)

  if (isTurtle) {
    const shell = mesh(new THREE.SphereGeometry(1.35, 12, 7, 0, Math.PI * 2, 0, Math.PI / 2), material(art.mane, { roughness: 0.55 }), 0, bodyY + 0.22, -0.05)
    shell.scale.set(1.2, 0.72, 1.55)
    parts.root.add(shell)
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2
      const plate = mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.06, 6), material(art.accent, { emissive: glow, emissiveIntensity: 0.5 }), Math.cos(a) * 0.8, bodyY + 0.9, -0.05 + Math.sin(a) * 1.0, 0, 0, 0)
      parts.root.add(plate)
    }
  }

  if (isYak) {
    const hump = mesh(ico(0.9, 1), bodyMat, 0, bodyY + 0.7, -0.1)
    hump.scale.set(1.0, 0.7, 1.25)
    parts.root.add(hump)
    const shag = material(mane, { roughness: 1 })
    for (let i = 0; i < 9; i++) {
      const tuft = mesh(cone(0.18, 0.6, 4), shag, -0.8 + (i % 3) * 0.8, bodyY - 0.1 + (i % 2) * 0.1, 0.8 - Math.floor(i / 3) * 0.5, 0.2, 0, 0)
      tuft.scale.set(0.8, 1, 0.6)
      parts.root.add(tuft)
    }
  }

  const neckY = isTurtle || isToad ? bodyY + 0.48 : bodyY + 0.52
  const neckZ = isTurtle ? 1.6 : isToad ? 1.35 : 1.28
  const neck = mesh(cyl(0.32, 0.46, isToad ? 0.25 : 0.8, 7), bodyMat, 0, neckY, neckZ, 0.42, 0, 0)
  parts.root.add(neck)
  if (isLion || isYak) {
    const m = addMane(parts.root, art, isLion ? 0.72 : 0.55)
    m.position.set(0, neckY + 0.22, neckZ + 0.18)
    m.rotation.x = 0.18
    parts.mane = m
  }

  const head = new THREE.Group()
  head.position.set(0, neckY + (isToad ? 0.35 : 0.6), neckZ + 0.34)
  parts.head = head
  parts.root.add(head)
  const skull = mesh(ico(isToad ? 0.62 : 0.48, 1), bodyMat, 0, 0, 0)
  skull.scale.set(isHound ? 1.12 : 1, isToad ? 0.72 : 0.94, isToad ? 1.25 : 1.08)
  head.add(skull)
  if (isStag) {
    const snout = mesh(cyl(0.2, 0.32, 0.6, 6), bellyMat, 0, -0.1, 0.48, Math.PI / 2, 0, 0)
    head.add(snout)
    const nose = mesh(ico(0.11, 0), material('#2d2624'), 0, -0.1, 0.78)
    head.add(nose)
  } else if (isHound) {
    const snout = mesh(box(0.42, 0.28, 0.48), bodyMat, 0, -0.12, 0.5)
    head.add(snout)
    addMouth(head, art, -0.2, 0.73, 0.34)
  } else if (isToad) {
    const mouth = mesh(box(0.82, 0.08, 0.06), material('#251c25'), 0, -0.2, 0.7)
    head.add(mouth)
  } else if (isLion) {
    const snout = mesh(box(0.38, 0.26, 0.42), bellyMat, 0, -0.12, 0.48)
    head.add(snout)
    addMouth(head, art, -0.2, 0.69, 0.26)
  } else if (isTurtle) {
    const beak = mesh(cone(0.18, 0.32, 5), accentMat, 0, -0.1, 0.5, Math.PI / 2, 0, 0)
    head.add(beak)
  } else {
    const snout = mesh(ico(0.3, 0), bellyMat, 0, -0.12, 0.4)
    snout.scale.set(1, 0.7, 1.1)
    head.add(snout)
  }

  addEyes(head, art, { size: isToad ? 0.2 : 0.15, positions: isToad ? [[-0.32, 0.22, 0.38], [0.32, 0.22, 0.38]] : undefined })
  addHorns(head, art, art.horns, {})
  if (isLion) {
    const crown = mesh(new THREE.TorusGeometry(0.47, 0.045, 4, 16), accentMat, 0, 0.36, 0.05, Math.PI / 2, 0, 0)
    head.add(crown)
  }
  if (art.horns !== 'antlers') {
    addLeafSpray(head, art, {
      count: 3, radius: 0.28, length: 0.34, width: 0.12,
      position: new V(0, 0.29, -0.18), rotation: new THREE.Euler(-0.9, 0.35, 0)
    })
  }

  addPattern(torso, art, art.pattern)
  addLeafSpray(parts.root, art, {
    count: isYak || isLion ? 8 : 6, radius: 0.72, length: 0.58, width: 0.22,
    position: new V(0, bodyY + 0.38, neckZ - 0.12), rotation: new THREE.Euler(-0.28, 0, 0)
  })
  addLeafSpray(parts.root, art, {
    count: 7, radius: 0.62, length: 0.7, width: 0.27,
    position: new V(0, bodyY + 0.82, -0.42), rotation: new THREE.Euler(-0.48, 0, 0)
  })

  const legs = []
  const legXs = isToad ? [-0.85, 0.85] : isTurtle ? [-0.85, 0.85] : [-0.68, 0.68]
  const legZs = isToad ? [-0.75, 0.75] : isTurtle ? [-0.8, 0.8] : [-1.02, 1.02]
  for (const x of legXs) {
    for (const z of legZs) {
      const front = z > 0
      const leg = new THREE.Group()
      leg.position.set(x, bodyY - 0.35, z)
      const upper = mesh(cyl(0.19, 0.22, 1.35, 6), bodyMat, 0, -0.62, 0)
      upper.scale.z = isTurtle || isToad ? 1.4 : 1
      const foot = mesh(ico(0.26, 0), isTurtle ? accentMat : material(art.body), 0, -1.33, front ? 0.08 : 0)
      foot.scale.set(1, 0.5, 1.35)
      leg.add(upper, foot)
      if (isToad) {
        upper.scale.set(1.3, 0.7, 1.3)
        leg.position.y = bodyY - 0.55
      }
      parts.root.add(leg)
      legs.push({ leg, front, side: Math.sign(x) })
    }
  }
  parts.legs = legs
  parts.tail = addTail(parts.root, art, isHound ? 'flame' : isOtter ? 'fin' : isStag ? 'leaf' : isToad ? 'chain' : 'tuft')
  addLeafSpray(parts.tail, art, { count: 3, radius: 0.2, length: 0.42, width: 0.18, position: new V(0, 0.28, -0.5), rotation: new THREE.Euler(-0.8, 0, 0) })

  if (isHound) {
    for (let i = 0; i < 5; i++) {
      const sp = mesh(cone(0.1, 0.32, 4), glowMat, 0, bodyY + 0.7, -0.9 + i * 0.38, -0.2, 0, 0)
      parts.root.add(sp)
    }
  }
  if (isOtter) {
    const fin = mesh(cone(0.16, 0.65, 4), accentMat, 0, bodyY + 0.5, 0.5, -0.2, 0, 0)
    fin.scale.set(0.4, 1, 0.9)
    parts.root.add(fin)
    for (let i = 0; i < 4; i++) {
      const ridge = mesh(cone(0.14 - i * 0.015, 0.6 - i * 0.06, 4), accentMat, 0, bodyY + 0.72 - i * 0.03, 0.12 - i * 0.36, -0.25, 0, 0)
      ridge.scale.set(0.24, 1, 0.58)
      parts.root.add(ridge)
    }
    const finMat = organicMaterial(art, 'accent', { side: THREE.DoubleSide, roughness: 0.72 })
    for (const s of [-1, 1]) {
      const cheek = new THREE.Mesh(leafGeometry(0.38, 0.14), finMat)
      cheek.position.set(s * 0.34, neckY + 0.34, neckZ + 0.52)
      cheek.rotation.set(-0.6, s * 0.8, s * 0.55)
      head.add(cheek)
    }
  }
}

function buildDrake(parts, art, opts) {
  const bodyMat = organicMaterial(art, 'body')
  const bellyMat = organicMaterial(art, 'belly')
  const accentMat = organicMaterial(art, 'accent', { emissiveIntensity: 0.08 })
  const torso = mesh(ico(1, 1), bodyMat, 0, 2.3, -0.15)
  torso.scale.set(1.2, 1.1, 1.75)
  parts.root.add(torso)
  parts.body = torso
  const belly = mesh(ico(0.86, 1), bellyMat, 0, 2.05, 0.12)
  belly.scale.set(0.86, 0.78, 1.42)
  parts.root.add(belly)
  addPattern(torso, art, art.pattern)

  const neck = new THREE.Group()
  neck.position.set(0, 2.82, 1.05)
  neck.rotation.x = 0.6
  parts.root.add(neck)
  neck.add(mesh(cyl(0.3, 0.42, 1.05, 7), bodyMat, 0, 0, 0))
  const head = new THREE.Group()
  head.position.set(0, 0.66, 0.52)
  head.rotation.x = -0.4
  neck.add(head)
  parts.head = head
  const skull = mesh(ico(0.52, 1), bodyMat, 0, 0, 0.1)
  skull.scale.set(1, 0.85, 1.25)
  head.add(skull)
  const snout = mesh(box(0.44, 0.32, 0.55), bodyMat, 0, -0.1, 0.57)
  head.add(snout)
  addMouth(head, art, -0.2, 0.86, 0.35)
  addEyes(head, art)
  addHorns(head, art, art.horns, {})
  addLeafSpray(parts.root, art, {
    count: 5, radius: 0.68, length: 0.48, width: 0.18,
    position: new V(0, 2.92, 0.78), rotation: new THREE.Euler(-0.6, 0, 0)
  })

  const legs = []
  for (const x of [-0.75, 0.75]) {
    for (const z of [-0.95, 1.02]) {
      const leg = new THREE.Group()
      leg.position.set(x, 1.85, z)
      const upper = mesh(cyl(0.2, 0.28, 1.7, 6), bodyMat, 0, -0.8, 0)
      const foot = mesh(ico(0.3, 0), bodyMat, 0, -1.63, z > 0 ? 0.15 : 0)
      foot.scale.set(1, 0.45, 1.5)
      leg.add(upper, foot)
      parts.root.add(leg)
      legs.push({ leg, front: z > 0, side: Math.sign(x) })
    }
  }
  parts.legs = legs

  const tail = new THREE.Group()
  tail.position.set(0, 2.1, -1.7)
  for (let i = 0; i < 5; i++) {
    const seg = mesh(ico(0.35 - i * 0.05, 0), bodyMat, 0, -0.08 * i, -i * 0.42)
    tail.add(seg)
  }
  const blade = mesh(cone(0.18, 0.8, 4), accentMat, 0, -0.4, -2.5, -1.35, 0, 0)
  tail.add(blade)
  parts.root.add(tail)
  parts.tail = tail
  parts.wings = addWings(parts.root, art, 'drake')
  parts.wings.forEach(w => { w.position.y = 2.85 })
}

function buildBird(parts, art, opts) {
  const bodyMat = organicMaterial(art, 'body')
  const bellyMat = organicMaterial(art, 'belly')
  const accentMat = organicMaterial(art, 'accent', { emissiveIntensity: 0.08 })
  const torso = mesh(ico(0.85, 1), bodyMat, 0, 2.2, 0)
  torso.scale.set(1, 1.3, 1.1)
  parts.root.add(torso)
  parts.body = torso
  const chest = mesh(ico(0.6, 1), bellyMat, 0, 2.05, 0.35)
  chest.scale.set(0.8, 1.05, 0.7)
  parts.root.add(chest)
  const head = new THREE.Group()
  head.position.set(0, 3.25, 0.22)
  parts.root.add(head)
  parts.head = head
  head.add(mesh(ico(0.45, 1), bodyMat))
  const beak = mesh(cone(0.2, 0.42, 4), accentMat, 0, -0.03, 0.52, Math.PI / 2, 0, 0)
  head.add(beak)
  addEyes(head, art, { positions: [[-0.22, 0.13, 0.33], [0.22, 0.13, 0.33]], size: 0.14 })
  addHorns(head, art, art.horns, {})
  addPattern(torso, art, art.pattern)
  addLeafSpray(parts.root, art, {
    count: 5, radius: 0.48, length: 0.42, width: 0.16,
    position: new V(0, 2.55, -0.28), rotation: new THREE.Euler(-1.15, 0, 0)
  })

  const wings = addWings(parts.root, art, 'bird')
  wings.forEach((w, i) => { w.position.set(i ? 0.7 : -0.7, 2.45, 0); w.rotation.z = i ? 0.1 : -0.1 })
  parts.wings = wings
  const legs = []
  for (const s of [-1, 1]) {
    const leg = new THREE.Group()
    leg.position.set(s * 0.32, 1.65, 0)
    leg.add(mesh(cyl(0.055, 0.08, 0.9, 5), accentMat, 0, -0.38, 0))
    const claw = mesh(cone(0.12, 0.3, 4), accentMat, 0, -0.87, 0.1, 1.4, 0, 0)
    leg.add(claw)
    parts.root.add(leg)
    legs.push({ leg, front: true, side: s })
  }
  parts.legs = legs
  parts.tail = addTail(parts.root, art, 'feather')
  parts.tail.position.set(0, 1.75, -0.55)
}

function buildMoth(parts, art) {
  const bodyMat = organicMaterial(art, 'body')
  const bellyMat = organicMaterial(art, 'belly')
  const accentMat = organicMaterial(art, 'accent', { emissiveIntensity: 0.1 })
  const head = new THREE.Group()
  head.position.set(0, 3.0, 0.25)
  parts.root.add(head)
  parts.head = head
  head.add(mesh(ico(0.4, 1), bodyMat))
  addEyes(head, art, { positions: [[-0.2, 0.1, 0.31], [0.2, 0.1, 0.31]], size: 0.14 })
  for (const s of [-1, 1]) {
    const antenna = new THREE.Group()
    antenna.position.set(s * 0.2, 0.28, 0.15)
    antenna.rotation.z = -0.55 * s
    antenna.add(mesh(cyl(0.02, 0.03, 0.55, 4), accentMat, 0, 0.28, 0))
    antenna.add(mesh(ico(0.07, 0), accentMat, 0, 0.58, 0))
    head.add(antenna)
  }
  const body = mesh(ico(0.55, 1), bodyMat, 0, 2.35, 0)
  body.scale.set(0.78, 1.35, 0.8)
  parts.root.add(body)
  parts.body = body
  for (let i = 0; i < 3; i++) {
    const seg = mesh(ico(0.36 - i * 0.06, 0), bellyMat, 0, 1.75 - i * 0.4, -0.1)
    seg.scale.set(0.82, 0.72, 0.7)
    parts.root.add(seg)
  }
  const fluff = mesh(ico(0.55, 1), material(art.mane, { roughness: 1 }), 0, 2.05, 0.1)
  fluff.scale.set(0.95, 1.2, 0.75)
  parts.root.add(fluff)
  addPattern(body, art, art.pattern)
  const wings = addWings(parts.root, art, 'moth')
  wings.forEach((w, i) => { w.position.set(i ? 0.45 : -0.45, 2.55, 0); w.rotation.z = i ? 0.15 : -0.15 })
  parts.wings = wings
  parts.legs = []
  parts.tail = null
}

function buildJelly(parts, art) {
  const bodyMat = organicMaterial(art, 'body', { transparent: true, opacity: 0.92, roughness: 0.42, emissiveIntensity: 0.28 })
  const glowMat = material(art.glow, { emissive: art.glow, emissiveIntensity: 1.3, flatShading: false })
  const dome = mesh(new THREE.SphereGeometry(1.05, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2), bodyMat, 0, 3.0, 0)
  dome.scale.y = 0.9
  parts.root.add(dome)
  parts.body = dome
  const inner = mesh(ico(0.45, 1), organicMaterial(art, 'belly', { emissiveIntensity: 0.5, transparent: true, opacity: 0.55 }), 0, 3.15, 0)
  parts.root.add(inner)
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2
    const tendril = new THREE.Group()
    tendril.position.set(Math.cos(a) * 0.55, 2.78, Math.sin(a) * 0.55)
    const seg1 = mesh(cyl(0.05, 0.07, 1.2, 5), glowMat, 0, -0.6, 0)
    seg1.material = material(art.belly, { emissive: art.glow, emissiveIntensity: 0.9, transparent: true, opacity: 0.65 })
    const seg2 = mesh(cyl(0.025, 0.045, 0.9, 5), seg1.material, 0.1, -1.5, 0.1, 0.2, 0, 0.3)
    tendril.add(seg1, seg2)
    tendril.userData.phase = i
    parts.root.add(tendril)
    if (!parts.tentacles) parts.tentacles = []
    parts.tentacles.push(tendril)
  }
  const crown = mesh(new THREE.TorusGeometry(0.9, 0.035, 4, 32), glowMat, 0, 3.22, 0, Math.PI / 2, 0, 0)
  parts.root.add(crown)
  const eyes = new THREE.Group()
  eyes.position.set(0, 2.95, 0.85)
  parts.root.add(eyes)
  for (const s of [-1, 1]) {
    const e = mesh(ico(0.12, 1), material('#ffffff', { emissive: '#ffffff', emissiveIntensity: 0.4, flatShading: false }), s * 0.3, 0, 0)
    const p = mesh(ico(0.05, 1), material('#1c2d44', { flatShading: false }), s * 0.3, 0, 0.1)
    eyes.add(e, p)
  }
  parts.head = eyes
  parts.legs = []
  parts.tail = null
}

function buildMushroom(parts, art) {
  const bodyMat = organicMaterial(art, 'body')
  const bellyMat = organicMaterial(art, 'belly')
  const capMat = organicMaterial(art, 'mane', { roughness: 0.72, emissiveIntensity: 0.08 })
  const glowMat = material(art.glow, { emissive: art.glow, emissiveIntensity: 2.2 })
  const stem = mesh(cyl(0.42, 0.7, 2.0, 7), bodyMat, 0, 1.6, 0)
  parts.root.add(stem)
  parts.body = stem
  const skirt = mesh(cone(0.95, 0.7, 8), bellyMat, 0, 1.05, 0)
  skirt.rotation.x = Math.PI
  parts.root.add(skirt)
  const cap = mesh(new THREE.SphereGeometry(1.35, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), capMat, 0, 2.65, 0)
  cap.scale.y = 0.72
  parts.root.add(cap)
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2
    const dot = mesh(ico(0.13 + (i % 2) * 0.06, 0), glowMat, Math.cos(a) * 0.9, 3.06 + (i % 3) * 0.04, Math.sin(a) * 0.9)
    dot.scale.y = 0.25
    parts.root.add(dot)
  }
  const head = new THREE.Group()
  head.position.set(0, 2.2, 0.55)
  parts.root.add(head)
  parts.head = head
  const face = mesh(ico(0.38, 1), bodyMat, 0, 0, 0)
  face.scale.set(1, 0.9, 0.8)
  head.add(face)
  addEyes(head, art, { positions: [[-0.18, 0.08, 0.27], [0.18, 0.08, 0.27]], size: 0.1 })
  addHorns(head, art, 'crown', {})
  const arms = []
  for (const s of [-1, 1]) {
    const arm = new THREE.Group()
    arm.position.set(s * 0.65, 2.0, 0.1)
    arm.rotation.z = s * 0.4
    arm.add(mesh(cyl(0.1, 0.16, 0.9, 5), bodyMat, 0, -0.42, 0))
    arm.add(mesh(ico(0.18, 0), bellyMat, 0, -0.9, 0.05))
    parts.root.add(arm)
    arms.push(arm)
  }
  parts.arms = arms
  parts.legs = []
  parts.tail = addTail(parts.root, art, 'chain')
  parts.tail.position.set(0, 1.25, -0.7)
}

function buildScorpion(parts, art) {
  const bodyMat = organicMaterial(art, 'body')
  const bellyMat = organicMaterial(art, 'belly')
  const accentMat = organicMaterial(art, 'accent', { emissiveIntensity: 0.08 })
  const glowMat = material(art.glow, { emissive: art.glow, emissiveIntensity: 0.9, flatShading: false })
  const body = mesh(ico(0.95, 1), bodyMat, 0, 1.65, -0.2)
  body.scale.set(1.25, 0.58, 1.65)
  parts.root.add(body)
  parts.body = body
  addPattern(body, art, art.pattern)
  const head = new THREE.Group()
  head.position.set(0, 1.6, 1.05)
  parts.root.add(head)
  parts.head = head
  const skull = mesh(ico(0.48, 0), bodyMat)
  skull.scale.set(1.1, 0.72, 1)
  head.add(skull)
  addEyes(head, art, { positions: [[-0.22, 0.18, 0.34], [0.22, 0.18, 0.34]], size: 0.085 })
  const mandibles = []
  for (const s of [-1, 1]) {
    const mand = mesh(cone(0.09, 0.4, 4), accentMat, s * 0.2, -0.12, 0.48, Math.PI / 2, 0, 0)
    head.add(mand)
    mandibles.push(mand)
  }
  const arms = []
  for (const s of [-1, 1]) {
    const arm = new THREE.Group()
    arm.position.set(s * 0.85, 1.65, 0.45)
    arm.rotation.x = -0.75
    arm.add(mesh(cyl(0.11, 0.17, 0.9, 5), bodyMat, s * 0.3, -0.05, 0.45, 0, 0, s * 0.7))
    const claw = mesh(ico(0.35, 0), accentMat, s * 0.55, -0.05, 0.95)
    claw.scale.set(1.4, 0.8, 1.8)
    arm.add(claw)
    const pincer = mesh(cone(0.18, 0.55, 4), accentMat, s * 0.58, -0.06, 1.35, Math.PI / 2, 0, 0)
    pincer.scale.set(0.3, 1, 0.8)
    arm.add(pincer)
    parts.root.add(arm)
    arms.push(arm)
  }
  parts.arms = arms
  const legs = []
  for (const s of [-1, 1]) {
    for (let i = 0; i < 4; i++) {
      const leg = new THREE.Group()
      leg.position.set(s * 0.8, 1.55, 0.5 - i * 0.42)
      leg.rotation.z = s * 0.75
      leg.add(mesh(cyl(0.05, 0.08, 0.95, 4), bodyMat, 0, -0.4, 0))
      leg.add(mesh(cyl(0.04, 0.06, 0.7, 4), bodyMat, 0, -0.82, 0.16, 0.4, 0, 0))
      parts.root.add(leg)
      legs.push({ leg, front: i < 2, side: s })
    }
  }
  parts.legs = legs
  const tail = new THREE.Group()
  tail.position.set(0, 1.85, -1.35)
  let current = tail
  for (let i = 0; i < 5; i++) {
    const seg = new THREE.Group()
    seg.position.set(0, i === 0 ? 0 : 0.18, i === 0 ? 0 : -0.42)
    seg.rotation.x = i < 3 ? 0.35 : -1.1
    seg.add(mesh(ico(0.3 - i * 0.035, 0), bodyMat, 0, 0, 0))
    if (i === 4) {
      const stinger = mesh(cone(0.16, 0.75, 5), glowMat, 0, 0.45, 0.05, 0.3, 0, 0)
      seg.add(stinger)
    }
    current.add(seg)
    current = seg
  }
  parts.root.add(tail)
  parts.tail = tail
}

function buildEye(parts, art) {
  const glowMat = material(art.glow, { emissive: art.glow, emissiveIntensity: 1.5, flatShading: false })
  const bodyMat = organicMaterial(art, 'body', { roughness: 0.42, emissiveIntensity: 0.12 })
  const core = mesh(ico(0.85, 2), bodyMat, 0, 3.0, 0)
  parts.root.add(core)
  parts.body = core
  const iris = mesh(ico(0.6, 2), organicMaterial(art, 'belly', { emissiveIntensity: 0.45 }), 0, 3.0, 0.38)
  iris.scale.set(1, 1, 0.5)
  parts.root.add(iris)
  const pupil = mesh(ico(0.26, 2), material('#161221', { flatShading: false }), 0, 3.0, 0.77)
  pupil.scale.set(0.48, 1.2, 0.35)
  parts.root.add(pupil)
  const glint = mesh(ico(0.08, 1), material('#ffffff', { emissive: '#ffffff', emissiveIntensity: 1.5 }), -0.12, 3.16, 0.93)
  parts.root.add(glint)
  const rings = []
  for (let i = 0; i < 3; i++) {
    const r = new THREE.Group()
    r.position.y = 3.0
    r.rotation.set(Math.PI / 2 + i * 0.55, i * 0.8, i * 0.4)
    r.add(mesh(new THREE.TorusGeometry(1.15 + i * 0.22, 0.028, 4, 36), glowMat))
    parts.root.add(r)
    rings.push(r)
  }
  parts.rings = rings
  const tendrils = []
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2
    const t = new THREE.Group()
    t.position.set(Math.cos(a) * 0.65, 2.55, Math.sin(a) * 0.5)
    t.add(between(new V(0, 0, 0), new V(Math.cos(a) * 0.4, -1.1, Math.sin(a) * 0.4), 0.04, glowMat))
    t.userData.phase = i
    parts.root.add(t)
    tendrils.push(t)
  }
  parts.tentacles = tendrils
  parts.head = core
  parts.legs = []
  parts.tail = null
}

function buildGolem(parts, art) {
  const bodyMat = organicMaterial(art, 'body', { roughness: 0.62, metalness: 0.08 })
  const bellyMat = organicMaterial(art, 'belly', { roughness: 0.55 })
  const accentMat = organicMaterial(art, 'accent', { emissiveIntensity: 0.2 })
  const glowMat = material(art.glow, { emissive: art.glow, emissiveIntensity: 1.2, flatShading: false })
  const core = mesh(ico(0.62, 1), glowMat, 0, 2.55, 0)
  parts.root.add(core)
  parts.body = core
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2
    const chunk = mesh(ico(0.3 + (i % 2) * 0.18, 0), i % 2 ? bodyMat : bellyMat, Math.cos(a) * 1.15, 2.45 + Math.sin(i * 1.4) * 0.6, Math.sin(a) * 1.15)
    chunk.scale.set(1.1, 0.8, 0.75)
    chunk.rotation.set(i, i * 0.7, i * 0.2)
    chunk.userData.orbit = { a, r: 1.15, y: chunk.position.y, speed: 0.2 + i * 0.03 }
    parts.root.add(chunk)
    if (!parts.chunks) parts.chunks = []
    parts.chunks.push(chunk)
  }
  const head = new THREE.Group()
  head.position.set(0, 3.45, 0)
  parts.root.add(head)
  parts.head = head
  const halo = mesh(new THREE.TorusGeometry(0.72, 0.035, 4, 30), accentMat, 0, 0.18, 0, Math.PI / 2, 0, 0)
  head.add(halo)
  const face = mesh(ico(0.42, 0), bellyMat, 0, 0, 0.08)
  face.scale.set(0.9, 0.72, 0.7)
  head.add(face)
  for (const s of [-1, 1]) {
    const eye = mesh(ico(0.075, 1), glowMat, s * 0.14, 0.02, 0.4)
    head.add(eye)
  }
  addHorns(head, art, 'rings', {})
  const arms = []
  for (const s of [-1, 1]) {
    const arm = new THREE.Group()
    arm.position.set(s * 0.95, 2.75, 0)
    arm.rotation.z = s * 0.35
    arm.add(mesh(cyl(0.12, 0.2, 1.05, 6), bodyMat, 0, -0.5, 0))
    const hand = mesh(ico(0.3, 0), bodyMat, 0, -1.05, 0)
    hand.scale.set(0.8, 0.6, 1.1)
    arm.add(hand)
    parts.root.add(arm)
    arms.push(arm)
  }
  parts.arms = arms
  parts.legs = []
  parts.tail = null
}

export function buildCreature(speciesId, opts = {}) {
  const species = SPECIES[speciesId]
  const art = species.art
  const root = new THREE.Group()
  const model = new THREE.Group()
  root.add(model)
  const sizeScale = (species.size / 4) * (opts.scale || 1)
  model.scale.setScalar(sizeScale)
  const parts = { root: model, limbs: [], wings: null, tail: null, legs: [] }

  switch (art.form) {
    case 'stag':
    case 'hound':
    case 'yak':
    case 'lion':
    case 'turtle':
    case 'otter':
    case 'toad':
      buildQuad(parts, art, art.form, opts)
      break
    case 'drake': buildDrake(parts, art, opts); break
    case 'bird': buildBird(parts, art, opts); break
    case 'moth': buildMoth(parts, art, opts); break
    case 'jelly': buildJelly(parts, art, opts); break
    case 'mushroom': buildMushroom(parts, art, opts); break
    case 'scorpion': buildScorpion(parts, art, opts); break
    case 'eye': buildEye(parts, art, opts); break
    case 'golem': buildGolem(parts, art, opts); break
    default: buildQuad(parts, art, 'stag', opts)
  }

  if (opts.aura !== false) {
    parts.aura = addAura(root, art.glow, 16, 1.6, 2.0)
  }

  const floatOffset = ['jelly', 'eye', 'golem', 'moth'].includes(art.form) ? 0.35 : 0
  const baseY = 0
  model.position.y = baseY

  root.userData.species = speciesId
  root.userData.kind = 'creature'
  root.userData.height = species.size * 0.86
  root.userData.parts = parts
  root.userData.floatOffset = floatOffset
  root.userData.phase = Math.random() * Math.PI * 2
  root.userData.update = (t, moving = false) => {
    const ph = root.userData.phase
    const speed = moving ? 7.5 : 1.6
    const bob = Math.sin(t * speed + ph) * (moving ? 0.06 : 0.035)
    model.position.y = baseY + bob + (floatOffset ? Math.sin(t * 1.1 + ph) * 0.12 : 0)
    model.rotation.z = moving ? Math.sin(t * speed + ph) * 0.025 : Math.sin(t * 0.7 + ph) * 0.012
    if (parts.legs) {
      for (const l of parts.legs) {
        l.leg.rotation.x = moving ? Math.sin(t * 8 + (l.front ? Math.PI : 0) + (l.side > 0 ? 0.4 : 0)) * 0.45 : Math.sin(t * 1.6 + ph + l.side) * 0.035
      }
    }
    if (parts.arms) {
      for (let i = 0; i < parts.arms.length; i++) {
        parts.arms[i].rotation.x = Math.sin(t * 1.4 + i * 1.7 + ph) * 0.12
      }
    }
    if (parts.head) {
      parts.head.rotation.y = Math.sin(t * 0.7 + ph) * (moving ? 0.05 : 0.16)
      parts.head.rotation.x = Math.sin(t * 0.9 + ph) * 0.04
    }
    if (parts.wings) {
      for (let i = 0; i < parts.wings.length; i++) {
        const dir = i ? 1 : -1
        const flap = Math.sin(t * (moving ? 8 : 2.2) + ph) * 0.22
        parts.wings[i].rotation.z = dir * (0.12 + flap)
        parts.wings[i].rotation.x = Math.sin(t * 1.4 + ph) * 0.05
      }
    }
    if (parts.tail) {
      parts.tail.rotation.y = Math.sin(t * 1.5 + ph) * 0.22
      parts.tail.rotation.x = Math.sin(t * 1.1 + ph) * 0.06
    }
    if (parts.tentacles) {
      for (const tn of parts.tentacles) {
        tn.rotation.x = Math.sin(t * 1.3 + tn.userData.phase + ph) * 0.18
        tn.rotation.z = Math.cos(t * 1.1 + tn.userData.phase + ph) * 0.14
      }
    }
    if (parts.rings) {
      for (let i = 0; i < parts.rings.length; i++) {
        parts.rings[i].rotation.z += 0.0025 + i * 0.001
        parts.rings[i].rotation.y += 0.0015
      }
    }
    if (parts.chunks) {
      for (const c of parts.chunks) {
        const o = c.userData.orbit
        const a = o.a + t * o.speed
        c.position.x = Math.cos(a) * o.r
        c.position.z = Math.sin(a) * o.r
        c.position.y = o.y + Math.sin(t * 0.8 + o.a) * 0.15
        c.rotation.y += 0.004
      }
    }
    if (parts.aura) {
      const pos = parts.aura.geometry.attributes.position
      for (let i = 0; i < pos.count; i++) {
        const y0 = pos.getY(i)
        pos.setY(i, y0 + Math.sin(t * 1.3 + i + ph) * 0.0025)
      }
      pos.needsUpdate = true
      parts.aura.material.opacity = 0.45 + Math.sin(t * 1.8 + ph) * 0.2
    }
  }
  return root
}

export function makeNameplate(title, sub, color = '#ffe08a') {
  const canvas = document.createElement('canvas')
  canvas.width = 640; canvas.height = 192
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  const grd = ctx.createLinearGradient(0, 30, 0, 160)
  grd.addColorStop(0, 'rgba(9, 13, 22, 0.82)')
  grd.addColorStop(1, 'rgba(9, 13, 22, 0.24)')
  ctx.fillStyle = grd
  roundRect(ctx, 20, 24, 600, 130, 26)
  ctx.fill()
  ctx.strokeStyle = color
  ctx.lineWidth = 2
  ctx.globalAlpha = 0.65
  roundRect(ctx, 20, 24, 600, 130, 26)
  ctx.stroke()
  ctx.globalAlpha = 1
  ctx.textAlign = 'center'
  ctx.fillStyle = '#fff9e8'
  ctx.font = '600 48px Georgia, serif'
  ctx.fillText(title, 320, 88)
  ctx.fillStyle = color
  ctx.font = '500 27px Inter, system-ui, sans-serif'
  ctx.fillText(sub.toUpperCase(), 320, 128)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: true, depthWrite: false })
  const sprite = new THREE.Sprite(mat)
  sprite.scale.set(4.2, 1.26, 1)
  sprite.userData.isNameplate = true
  return sprite
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

export function buildTrainer(opts = {}) {
  const root = new THREE.Group()
  const model = new THREE.Group()
  root.add(model)
  const gender = opts.gender || 'female'
  const skin = opts.skin || '#e0a778'
  const hair = opts.hairColor || '#56372a'
  const outfit = opts.outfit || '#e5b85f'
  const style = opts.hairStyle ?? 2

  const skinMat = material(skin, { roughness: 0.85 })
  const outfitMat = material(outfit, { roughness: 0.72 })
  const outfitDark = material(new THREE.Color(outfit).multiplyScalar(0.62).getStyle(), { roughness: 0.8 })
  const hairMat = material(hair, { roughness: 0.68 })
  const darkMat = material('#202431', { roughness: 0.78 })
  const leatherMat = material('#6b4c37', { roughness: 0.9 })
  const accentMat = material('#f3d47a', { metalness: 0.45, roughness: 0.4, emissive: '#b78b30', emissiveIntensity: 0.18 })

  const hipW = gender === 'male' ? 0.28 : 0.31
  const shoulderW = gender === 'male' ? 0.46 : 0.38

  const legs = []
  for (const s of [-1, 1]) {
    const leg = new THREE.Group()
    leg.position.set(s * 0.17, 0.92, 0)
    const upper = mesh(cyl(0.12, 0.14, 0.6, 6), darkMat, 0, -0.3, 0)
    const boot = mesh(cyl(0.13, 0.17, 0.32, 6), leatherMat, 0, -0.72, 0)
    const foot = mesh(ico(0.16, 0), leatherMat, 0, -0.91, 0.08)
    foot.scale.set(1, 0.55, 1.5)
    leg.add(upper, boot, foot)
    model.add(leg)
    legs.push({ leg, side: s })
  }

  const torso = mesh(capsule(0.28, 0.52, 8), outfitMat, 0, 1.4, 0)
  torso.scale.set(gender === 'male' ? 1.22 : 1.02, 1, 0.76)
  model.add(torso)
  const belt = mesh(cyl(0.31, 0.31, 0.1, 8), leatherMat, 0, 1.08, 0)
  belt.scale.z = 0.78
  model.add(belt)
  const buckle = mesh(box(0.12, 0.09, 0.03), accentMat, 0, 1.08, 0.26)
  model.add(buckle)
  const collar = mesh(new THREE.TorusGeometry(0.2, 0.055, 4, 12), outfitDark, 0, 1.74, 0, Math.PI / 2, 0, 0)
  collar.scale.z = 0.75
  model.add(collar)

  const arms = []
  for (const s of [-1, 1]) {
    const arm = new THREE.Group()
    arm.position.set(s * shoulderW, 1.65, 0)
    arm.rotation.z = s * 0.08
    const sleeve = mesh(cyl(0.095, 0.12, 0.42, 6), outfitMat, 0, -0.21, 0)
    const fore = mesh(cyl(0.075, 0.095, 0.38, 6), skinMat, 0, -0.58, 0)
    const hand = mesh(ico(0.09, 0), skinMat, 0, -0.82, 0)
    arm.add(sleeve, fore, hand)
    model.add(arm)
    arms.push({ arm, side: s })
  }

  const head = new THREE.Group()
  head.position.set(0, 1.98, 0)
  model.add(head)
  const skull = mesh(ico(0.235, 1), skinMat, 0, 0, 0)
  skull.scale.set(0.95, 1.06, 0.92)
  head.add(skull)
  const nose = mesh(cone(0.045, 0.1, 4), skinMat, 0, -0.01, 0.22, Math.PI / 2, 0, 0)
  head.add(nose)
  const eyeMat = material('#25212a', { roughness: 0.2, flatShading: false })
  for (const s of [-1, 1]) {
    const eye = mesh(ico(0.032, 1), eyeMat, s * 0.082, 0.035, 0.205)
    eye.castShadow = false
    head.add(eye)
  }
  const mouth = mesh(box(0.075, 0.012, 0.01), material('#9b5d55'), 0, -0.095, 0.215)
  head.add(mouth)

  const hairGroup = new THREE.Group()
  head.add(hairGroup)
  const cap = mesh(new THREE.SphereGeometry(0.247, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.58), hairMat, 0, 0.035, -0.015)
  cap.rotation.x = -0.08
  hairGroup.add(cap)
  if (style === 1) {
    for (let i = 0; i < 5; i++) {
      const spike = mesh(cone(0.08, 0.26, 4), hairMat, -0.16 + i * 0.08, 0.18, 0.08 - (i % 2) * 0.05, -0.4 - (i % 2) * 0.2, 0, 0.2 * (i - 2))
      hairGroup.add(spike)
    }
  } else if (style === 2) {
    const back = mesh(ico(0.22, 0), hairMat, 0, -0.04, -0.17)
    back.scale.set(0.9, 1.8, 0.55)
    hairGroup.add(back)
    if (gender === 'female') {
      const tail = mesh(ico(0.12, 0), hairMat, 0.15, -0.22, -0.25)
      tail.scale.set(0.7, 2.2, 0.55)
      hairGroup.add(tail)
    }
  } else if (style === 3) {
    for (const s of [-1, 1]) {
      const braid = new THREE.Group()
      braid.position.set(s * 0.17, -0.12, -0.12)
      for (let i = 0; i < 4; i++) braid.add(mesh(ico(0.075 - i * 0.008, 0), hairMat, 0, -i * 0.12, -0.01))
      hairGroup.add(braid)
    }
  } else if (style === 4) {
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2
      const curl = mesh(ico(0.11, 0), hairMat, Math.cos(a) * 0.18, 0.1 + (i % 2) * 0.04, Math.sin(a) * 0.15)
      hairGroup.add(curl)
    }
    const puff = mesh(ico(0.18, 1), hairMat, 0, 0.1, -0.18)
    hairGroup.add(puff)
  } else if (style === 5) {
    const bun = mesh(ico(0.13, 0), hairMat, 0, 0.26, -0.1)
    hairGroup.add(bun)
    const tie = mesh(new THREE.TorusGeometry(0.08, 0.022, 3, 10), accentMat, 0, 0.2, -0.08, Math.PI / 2, 0, 0)
    hairGroup.add(tie)
  }

  const scarf = new THREE.Group()
  scarf.position.set(0, 1.72, -0.02)
  const scarfWrap = mesh(new THREE.TorusGeometry(0.21, 0.07, 4, 12), material('#b84d4f', { roughness: 0.8 }), 0, 0, 0, Math.PI / 2, 0, 0)
  scarfWrap.scale.z = 0.8
  scarf.add(scarfWrap)
  const scarfTail = mesh(box(0.14, 0.5, 0.03), material('#b84d4f', { roughness: 0.8 }), 0.15, -0.25, -0.06, 0, 0, 0.18)
  scarf.add(scarfTail)
  model.add(scarf)

  const pack = mesh(ico(0.28, 1), leatherMat, 0, 1.42, -0.31)
  pack.scale.set(0.84, 1.15, 0.55)
  model.add(pack)
  const packStrap = mesh(new THREE.TorusGeometry(0.3, 0.025, 4, 12, Math.PI), darkMat, 0, 1.6, -0.22, 0, 0.15, 0)
  packStrap.scale.z = 0.5
  model.add(packStrap)

  root.userData.kind = 'trainer'
  root.userData.gender = gender
  root.userData.update = (t, moving = false) => {
    const speed = moving ? 8 : 1.5
    model.position.y = Math.abs(Math.sin(t * speed)) * (moving ? 0.045 : 0.008)
    legs.forEach(({ leg, side }) => { leg.rotation.x = Math.sin(t * speed + (side > 0 ? Math.PI : 0)) * (moving ? 0.65 : 0.02) })
    arms.forEach(({ arm, side }) => { arm.rotation.x = Math.sin(t * speed + (side > 0 ? 0 : Math.PI)) * (moving ? 0.5 : 0.04) })
    scarfTail.rotation.x = Math.sin(t * 2.2) * 0.15 + (moving ? 0.4 : 0)
    head.rotation.y = Math.sin(t * 0.6) * 0.06
  }
  return root
}

export function updateCreatureGroup(group, t, moving = false) {
  group.userData.update?.(t, moving)
}

export function makeGlowTexture(color = '#ffe9a8') {
  const canvas = document.createElement('canvas')
  canvas.width = 128; canvas.height = 128
  const ctx = canvas.getContext('2d')
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
  g.addColorStop(0, color)
  g.addColorStop(0.25, color)
  g.addColorStop(0.6, 'rgba(255,255,255,0.12)')
  g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 128, 128)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function makeSpriteGlow(color, size = 2) {
  const mat = new THREE.SpriteMaterial({ map: makeGlowTexture(color), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })
  const sprite = new THREE.Sprite(mat)
  sprite.scale.set(size, size, 1)
  return sprite
}

export function disposeObject(root) {
  root.traverse(o => {
    if (o.geometry) o.geometry.dispose()
    if (o.material) {
      const mats = Array.isArray(o.material) ? o.material : [o.material]
      for (const m of mats) {
        if (m.map) m.map.dispose()
        m.dispose()
      }
    }
  })
}
