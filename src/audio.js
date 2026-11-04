export class AudioEngine {
  constructor() {
    this.ctx = null
    this.enabled = true
    this.master = null
    this.ambient = null
    this.ambientGain = null
    this.notes = []
    this.region = null
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume()
      return
    }
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    this.ctx = new AC()
    this.master = this.ctx.createGain()
    this.master.gain.value = this.enabled ? 0.42 : 0
    const comp = this.ctx.createDynamicsCompressor()
    comp.threshold.value = -24
    comp.ratio.value = 4
    this.master.connect(comp)
    comp.connect(this.ctx.destination)
    this.ambient = this.ctx.createGain()
    this.ambient.gain.value = 0.12
    this.ambient.connect(this.master)
    this.noiseBuffer = this.makeNoise(3)
    this.startWind()
  }

  makeNoise(seconds) {
    const rate = this.ctx.sampleRate
    const buffer = this.ctx.createBuffer(1, rate * seconds, rate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
    return buffer
  }

  startWind() {
    const src = this.ctx.createBufferSource()
    src.buffer = this.noiseBuffer
    src.loop = true
    const filter = this.ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 420
    const gain = this.ctx.createGain()
    gain.gain.value = 0.022
    src.connect(filter)
    filter.connect(gain)
    gain.connect(this.master)
    src.start()
    this.wind = { src, filter, gain }
  }

  setEnabled(on) {
    this.enabled = on
    if (!this.ctx) return
    this.master.gain.cancelScheduledValues(this.ctx.currentTime)
    this.master.gain.linearRampToValueAtTime(on ? 0.42 : 0, this.ctx.currentTime + 0.15)
  }

  toggle() {
    this.setEnabled(!this.enabled)
    return this.enabled
  }

  chordFor(region) {
    switch (region) {
      case 'verdant': return [130.81, 196.0, 261.63, 329.63]
      case 'ember': return [98.0, 146.83, 196.0, 246.94]
      case 'tide': return [110.0, 164.81, 220.0, 293.66]
      case 'frost': return [123.47, 185.0, 246.94, 311.13]
      case 'sunken': return [92.5, 138.59, 185.0, 233.08]
      case 'storm': return [103.83, 155.56, 207.65, 261.63]
      case 'cinder': return [87.31, 130.81, 174.61, 220.0]
      case 'celestial': return [146.83, 220.0, 293.66, 369.99]
      default: return [110, 165, 220, 330]
    }
  }

  setRegion(region) {
    if (!this.ctx || this.region === region) return
    this.region = region
    if (!this.ambient) return
    const now = this.ctx.currentTime
    for (const n of this.notes) {
      n.gain.gain.cancelScheduledValues(now)
      n.gain.gain.linearRampToValueAtTime(0, now + 1.2)
      try { n.osc.stop(now + 1.3) } catch {}
    }
    this.notes = []
    const chord = this.chordFor(region)
    chord.forEach((f, i) => {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      const filter = this.ctx.createBiquadFilter()
      osc.type = i % 2 ? 'sine' : 'triangle'
      osc.frequency.value = f
      osc.detune.value = (i - 1.5) * 4
      filter.type = 'lowpass'
      filter.frequency.value = 600 + i * 180
      gain.gain.value = 0
      gain.gain.linearRampToValueAtTime(0.032 / (i * 0.5 + 1), now + 2)
      osc.connect(filter)
      filter.connect(gain)
      gain.connect(this.ambient)
      osc.start()
      this.notes.push({ osc, gain })
    })
  }

  tone(freq, dur = 0.12, type = 'sine', gain = 0.1, slide = 0) {
    if (!this.ctx || !this.enabled) return
    const now = this.ctx.currentTime
    const osc = this.ctx.createOscillator()
    const g = this.ctx.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, now)
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), now + dur)
    g.gain.setValueAtTime(0.0001, now)
    g.gain.exponentialRampToValueAtTime(gain, now + 0.012)
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur)
    osc.connect(g)
    g.connect(this.master)
    osc.start(now)
    osc.stop(now + dur + 0.02)
  }

  noise(dur = 0.2, freq = 900, gain = 0.12) {
    if (!this.ctx || !this.enabled) return
    const now = this.ctx.currentTime
    const src = this.ctx.createBufferSource()
    src.buffer = this.noiseBuffer
    const filter = this.ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.setValueAtTime(freq, now)
    filter.Q.value = 0.9
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(gain, now)
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur)
    src.connect(filter)
    filter.connect(g)
    g.connect(this.master)
    src.start(now)
    src.stop(now + dur + 0.02)
  }

  click() { this.tone(660, 0.07, 'triangle', 0.05) }
  select() { this.tone(520, 0.08, 'sine', 0.06); setTimeout(() => this.tone(780, 0.1, 'sine', 0.04), 60) }
  hit(heavy = false) {
    this.noise(heavy ? 0.35 : 0.2, heavy ? 380 : 850, heavy ? 0.18 : 0.12)
    this.tone(heavy ? 90 : 150, heavy ? 0.28 : 0.16, 'sawtooth', 0.08, -40)
  }
  special() {
    this.tone(440, 0.2, 'sine', 0.07, 320)
    setTimeout(() => this.tone(660, 0.25, 'triangle', 0.055, 280), 80)
  }
  capture() {
    const seq = [523, 659, 784, 1046]
    seq.forEach((f, i) => setTimeout(() => this.tone(f, 0.22, 'sine', 0.08), i * 95))
  }
  levelUp() {
    const seq = [392, 523, 659, 784, 1046]
    seq.forEach((f, i) => setTimeout(() => this.tone(f, 0.3, 'triangle', 0.075), i * 110))
  }
  badge() {
    const seq = [261, 329, 392, 523, 659]
    seq.forEach((f, i) => setTimeout(() => this.tone(f, 0.5, 'sine', 0.1), i * 130))
  }
  error() { this.tone(140, 0.18, 'square', 0.05, -20) }
  whoosh() { this.noise(0.35, 1600, 0.08) }
}
