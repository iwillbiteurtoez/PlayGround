export const TYPES = {
  bloom: { name: 'Bloom', color: '#67e8a2', dark: '#124d38', icon: '❧', glyph: '✿' },
  ember: { name: 'Ember', color: '#ff8659', dark: '#5c1f14', icon: '♨', glyph: '🔥' },
  tide: { name: 'Tide', color: '#59d8ff', dark: '#123d57', icon: '≈', glyph: '🌊' },
  frost: { name: 'Frost', color: '#b8f4ff', dark: '#1e4c63', icon: '❄', glyph: '❄' },
  storm: { name: 'Storm', color: '#ffe066', dark: '#554112', icon: 'ϟ', glyph: '⚡' },
  stone: { name: 'Stone', color: '#d4b08a', dark: '#4b382a', icon: '▲', glyph: '⛰' },
  umbra: { name: 'Umbra', color: '#c4a5ff', dark: '#37254f', icon: '☾', glyph: '☾' },
  aether: { name: 'Aether', color: '#ffd98b', dark: '#5a4626', icon: '✦', glyph: '✦' }
}

const STRONG = {
  bloom: ['tide', 'stone'],
  ember: ['bloom', 'frost'],
  tide: ['ember', 'stone'],
  frost: ['bloom', 'storm'],
  storm: ['tide', 'frost'],
  stone: ['ember', 'storm'],
  umbra: ['storm', 'aether'],
  aether: ['umbra']
}

const RESIST = {
  bloom: ['ember', 'frost'],
  ember: ['tide', 'stone'],
  tide: ['bloom', 'storm'],
  frost: ['ember', 'stone'],
  storm: ['stone', 'umbra'],
  stone: ['bloom', 'tide'],
  umbra: ['bloom', 'aether'],
  aether: ['aether', 'storm']
}

export function typeMultiplier(attackType, defendType) {
  if (STRONG[attackType]?.includes(defendType)) return 1.55
  if (RESIST[attackType]?.includes(defendType)) return 0.68
  return 1
}

export const STATUS = {
  scorch: { name: 'Scorched', icon: '♨', color: '#ff7b52', text: 'Burns for 6% each round.' },
  chill: { name: 'Chilled', icon: '❄', color: '#a5f3fc', text: 'Attack reduced by 25%.' },
  static: { name: 'Static', icon: 'ϟ', color: '#ffe066', text: 'May lose the turn.' },
  root: { name: 'Rooted', icon: '❧', color: '#67e8a2', text: 'Defense reduced by 25%.' },
  guard: { name: 'Guarded', icon: '◈', color: '#b9c7ff', text: 'Defense raised.' },
  fury: { name: 'Fury', icon: '⟡', color: '#ff8659', text: 'Attack raised.' },
  haste: { name: 'Haste', icon: '»', color: '#59d8ff', text: 'Speed raised.' }
}

export const MOVES = {
  petal_lash: { name: 'Petal Lash', type: 'bloom', power: 54, cost: 1, acc: 0.97, desc: 'A whipping arc of razor petals.' },
  thorn_guard: { name: 'Thorn Guard', type: 'bloom', power: 0, cost: 2, desc: 'Bristle and raise defense.', selfStatus: 'guard' },
  bloom_burst: { name: 'Bloom Burst', type: 'bloom', power: 82, cost: 4, acc: 0.94, desc: 'An exploding blossom.', status: { id: 'root', chance: 0.28 } },
  verdant_crown: { name: 'Verdant Crown', type: 'bloom', power: 108, cost: 6, acc: 0.9, desc: 'Ancient roots drain life.', drain: 0.3, signature: true },
  ember_nip: { name: 'Ember Nip', type: 'ember', power: 54, cost: 1, acc: 0.97, desc: 'A searing bite.' },
  cinder_rush: { name: 'Cinder Rush', type: 'ember', power: 76, cost: 3, acc: 0.95, desc: 'A blazing charge.', selfStatus: 'haste' },
  flame_ward: { name: 'Flame Ward', type: 'ember', power: 0, cost: 2, desc: 'A mantle of coals raises attack.', selfStatus: 'fury' },
  magma_fang: { name: 'Magma Fang', type: 'ember', power: 104, cost: 6, acc: 0.9, desc: 'Molten fangs that scorch.', status: { id: 'scorch', chance: 0.38 }, signature: true },
  ember_lash: { name: 'Inferno Lash', type: 'ember', power: 86, cost: 4, acc: 0.93, desc: 'A whip of living fire.', status: { id: 'scorch', chance: 0.24 } },
  ripple_slam: { name: 'Ripple Slam', type: 'tide', power: 54, cost: 1, acc: 0.98, desc: 'A crushing wave.' },
  mist_veil: { name: 'Mist Veil', type: 'tide', power: 0, cost: 2, desc: 'Cool mist sharpens speed.', selfStatus: 'haste' },
  tidal_crush: { name: 'Tidal Crush', type: 'tide', power: 84, cost: 4, acc: 0.93, desc: 'A pressure wave that chills.', status: { id: 'chill', chance: 0.3 } },
  abyss_pulse: { name: 'Abyss Pulse', type: 'tide', power: 106, cost: 6, acc: 0.9, desc: 'Light drinks the foe’s strength.', drain: 0.28, signature: true },
  frost_bite: { name: 'Frost Bite', type: 'frost', power: 55, cost: 1, acc: 0.97, desc: 'A flash of frozen fangs.' },
  hail_guard: { name: 'Hail Guard', type: 'frost', power: 0, cost: 2, desc: 'A shell of ice raises defense.', selfStatus: 'guard' },
  glacial_fang: { name: 'Glacial Fang', type: 'frost', power: 88, cost: 4, acc: 0.92, desc: 'Ice that bites to the bone.', status: { id: 'chill', chance: 0.38 } },
  permafrost: { name: 'Permafrost', type: 'frost', power: 110, cost: 6, acc: 0.88, desc: 'The air itself freezes.', status: { id: 'static', chance: 0.25 }, signature: true },
  spark_peck: { name: 'Spark Peck', type: 'storm', power: 55, cost: 1, acc: 0.98, desc: 'A crackling jab.' },
  static_field: { name: 'Static Field', type: 'storm', power: 0, cost: 2, desc: 'Charge the air and gain speed.', selfStatus: 'haste' },
  thunderclap: { name: 'Thunderclap', type: 'storm', power: 86, cost: 4, acc: 0.92, desc: 'A deafening thunderstrike.', status: { id: 'static', chance: 0.3 } },
  storm_surge: { name: 'Storm Surge', type: 'storm', power: 112, cost: 7, acc: 0.88, desc: 'A crown of living lightning.', signature: true },
  boulder_bash: { name: 'Boulder Bash', type: 'stone', power: 58, cost: 1, acc: 0.95, desc: 'A hurled slab of rock.' },
  stonewall: { name: 'Stonewall', type: 'stone', power: 0, cost: 2, desc: 'Settle into an unbreakable stance.', selfStatus: 'guard' },
  quake_slam: { name: 'Quake Slam', type: 'stone', power: 86, cost: 4, acc: 0.92, desc: 'The ground buckles.' },
  titan_fall: { name: 'Titan Fall', type: 'stone', power: 114, cost: 7, acc: 0.87, desc: 'A mountain answers the call.', signature: true },
  shade_tap: { name: 'Shade Tap', type: 'umbra', power: 54, cost: 1, acc: 0.98, desc: 'A cold touch from the dark.' },
  veil_of_night: { name: 'Veil of Night', type: 'umbra', power: 0, cost: 2, desc: 'Wrap in shadow and sharpen attack.', selfStatus: 'fury' },
  void_gaze: { name: 'Void Gaze', type: 'umbra', power: 82, cost: 4, acc: 0.93, desc: 'A gaze that saps strength.', status: { id: 'chill', chance: 0.32 } },
  night_terror: { name: 'Night Terror', type: 'umbra', power: 108, cost: 6, acc: 0.89, desc: 'A dream turned inside out.', status: { id: 'static', chance: 0.28 }, signature: true },
  star_shard: { name: 'Star Shard', type: 'aether', power: 58, cost: 1, acc: 0.98, desc: 'A shard of fallen starlight.' },
  prism_guard: { name: 'Prism Guard', type: 'aether', power: 0, cost: 2, desc: 'Light bends around you.', selfStatus: 'guard' },
  radiant_beam: { name: 'Radiant Beam', type: 'aether', power: 90, cost: 4, acc: 0.93, desc: 'A beam of pure dawn.' },
  celestial_judgment: { name: 'Celestial Judgment', type: 'aether', power: 118, cost: 7, acc: 0.88, desc: 'The heavens deliver their verdict.', status: { id: 'scorch', chance: 0.2 }, signature: true },
  fungal_spore: { name: 'Fungal Spore', type: 'umbra', power: 60, cost: 2, acc: 0.96, desc: 'A cloud of dreaming spores.', status: { id: 'chill', chance: 0.35 } },
  tidal_embrace: { name: 'Tidal Embrace', type: 'tide', power: 94, cost: 5, acc: 0.91, desc: 'The deep pulls you under.', drain: 0.2 },
  molten_shell: { name: 'Molten Shell', type: 'ember', power: 70, cost: 3, acc: 0.95, desc: 'A shell of cooling lava.', selfStatus: 'guard' },
  sky_rend: { name: 'Sky Rend', type: 'storm', power: 94, cost: 5, acc: 0.92, desc: 'Talons carve the thunderhead.' },
  frost_lance: { name: 'Frost Lance', type: 'frost', power: 92, cost: 5, acc: 0.93, desc: 'A spear of ancient ice.' },
  stone_roots: { name: 'Stone Roots', type: 'stone', power: 74, cost: 3, acc: 0.95, desc: 'Stone tendrils grasp the foe.', status: { id: 'root', chance: 0.3 } },
  radiant_mend: { name: 'Radiant Mend', type: 'aether', power: 0, cost: 4, desc: 'Starlight knits the body together.', heal: 0.24 }
}

export const INGREDIENTS = {
  sunpetal: { name: 'Sunpetal', icon: '✾', color: '#ffd86b', desc: 'Warm petals that turn to face any light.' },
  embercap: { name: 'Embercap', icon: '🍄', color: '#ff7d54', desc: 'A mushroom that smolders without ash.' },
  pearlkelp: { name: 'Pearlkelp', icon: '🪸', color: '#6fe4ff', desc: 'Glass-bright kelp from tideglass pools.' },
  frostberry: { name: 'Frostberry', icon: '🫐', color: '#b9f4ff', desc: 'A berry wrapped in permanent rime.' },
  gloomcap: { name: 'Gloomcap', icon: '☾', color: '#b78cff', desc: 'It glows brightest in the deepest shade.' },
  stormglass: { name: 'Stormglass', icon: 'ϟ', color: '#ffe066', desc: 'Sand fused by a lightning strike.' },
  ashsalt: { name: 'Ash Salt', icon: '◇', color: '#e6c2a3', desc: 'Mineral crust from a dead caldera.' },
  starfruit: { name: 'Starfruit', icon: '✦', color: '#ffe5a3', desc: 'A fruit that only ripens under starlight.' },
  wildgrain: { name: 'Wildgrain', icon: '⋮', color: '#d8c58a', desc: 'Hardy grain that binds every trail treat.' }
}

export const TREATS = {
  bloom: { name: 'Sunpetal Tart', type: 'bloom', recipe: { sunpetal: 2, wildgrain: 1 }, icon: '🥧', desc: 'A fragrant tart that bloom titans adore.', bonus: 1.45, yield: 2 },
  ember: { name: 'Ember Jerky', type: 'ember', recipe: { embercap: 2, wildgrain: 1 }, icon: '🍖', desc: 'Smoked over a sleeping vent. Savory and warm.', bonus: 1.45, yield: 2 },
  tide: { name: 'Tide Pop', type: 'tide', recipe: { pearlkelp: 2, wildgrain: 1 }, icon: '🍬', desc: 'A salty-sweet candy that fizzes like surf.', bonus: 1.45, yield: 2 },
  frost: { name: 'Rime Honey', type: 'frost', recipe: { frostberry: 2, wildgrain: 1 }, icon: '🍯', desc: 'Crystal honey that stays cold on the tongue.', bonus: 1.45, yield: 2 },
  umbra: { name: 'Gloom Truffle', type: 'umbra', recipe: { gloomcap: 2, wildgrain: 1 }, icon: '🍫', desc: 'Bitter, velvety, and faintly luminous.', bonus: 1.45, yield: 2 },
  storm: { name: 'Storm Snap', type: 'storm', recipe: { stormglass: 2, wildgrain: 1 }, icon: '🍪', desc: 'A crackling biscuit with a citrus bite.', bonus: 1.45, yield: 2 },
  stone: { name: 'Ash Crunch', type: 'stone', recipe: { ashsalt: 2, wildgrain: 1 }, icon: '🥨', desc: 'Dense, smoky, and satisfyingly crunchy.', bonus: 1.45, yield: 2 },
  aether: { name: 'Star Candy', type: 'aether', recipe: { starfruit: 2, wildgrain: 1 }, icon: '⭐', desc: 'It tastes like the moment before dawn.', bonus: 1.45, yield: 2 }
}

const moveSet = (basic, utility, strong, signature, basicUnlock = 1, utilityUnlock = 4, strongUnlock = 9, signatureUnlock = 14) => [
  { id: basic, level: basicUnlock },
  { id: utility, level: utilityUnlock },
  { id: strong, level: strongUnlock },
  { id: signature, level: signatureUnlock }
]

export const SPECIES = {
  mossling: {
    name: 'Mossling', epithet: 'The Dawn Fawn', type: 'bloom', rarity: 1, size: 2.9, catchRate: 0.42,
    desc: 'A gentle colossus whose antlers bloom with the seasons. It hums to seeds until they sprout.',
    stats: { hp: 64, atk: 52, def: 57, spd: 54 }, favorite: 'bloom',
    moves: moveSet('petal_lash', 'thorn_guard', 'bloom_burst', 'verdant_crown'),
    art: { form: 'stag', body: '#4f8d64', belly: '#b7d49a', accent: '#8ff0b5', glow: '#c8ff8f', horns: 'antlers', eye: '#f4ffcf', pattern: 'spots', mane: '#b6e3a3' }
  },
  cindercub: {
    name: 'Cindercub', epithet: 'The Hearth Prowler', type: 'ember', rarity: 1, size: 3.1, catchRate: 0.42,
    desc: 'A lion-hearted cub with a mane of warm cinders. It purrs at the temperature of a forge.',
    stats: { hp: 68, atk: 61, def: 48, spd: 56 }, favorite: 'ember',
    moves: moveSet('ember_nip', 'flame_ward', 'ember_lash', 'magma_fang'),
    art: { form: 'lion', body: '#c75a3f', belly: '#f2b27b', accent: '#ffb04e', glow: '#ff6b2e', horns: 'none', eye: '#ffe7a3', pattern: 'stripes', mane: '#ff9b4a' }
  },
  ripplefin: {
    name: 'Ripplefin', epithet: 'The River Comet', type: 'tide', rarity: 1, size: 2.9, catchRate: 0.42,
    desc: 'A sleek river guardian that swims through air as easily as water, leaving rings of light behind.',
    stats: { hp: 62, atk: 54, def: 52, spd: 64 }, favorite: 'tide',
    moves: moveSet('ripple_slam', 'mist_veil', 'tidal_embrace', 'abyss_pulse'),
    art: { form: 'otter', body: '#2a7899', belly: '#98e3e8', accent: '#5ff2e0', glow: '#73fff2', horns: 'fins', eye: '#d9ffff', pattern: 'rings', mane: '#9ff7ef' }
  },
  thornox: {
    name: 'Thornox', epithet: 'The Bramble King', type: 'bloom', rarity: 2, size: 4.3, catchRate: 0.28,
    desc: 'An ancient stag whose antlers carry a small forest. Entire flocks nest between its branches.',
    stats: { hp: 86, atk: 68, def: 73, spd: 45 }, favorite: 'bloom',
    moves: moveSet('petal_lash', 'thorn_guard', 'bloom_burst', 'verdant_crown'),
    art: { form: 'stag', body: '#3e7450', belly: '#a9c788', accent: '#69f0a1', glow: '#b6ff7a', horns: 'antlers', eye: '#eaffb5', pattern: 'moss', mane: '#8fce8b', big: true }
  },
  glimmerwing: {
    name: 'Glimmerwing', epithet: 'The Lantern Moth', type: 'bloom', rarity: 2, size: 2.8, catchRate: 0.33,
    desc: 'Its wings hold tiny galaxies of pollen. At dusk, whole valleys shimmer when it takes flight.',
    stats: { hp: 58, atk: 59, def: 46, spd: 78 }, favorite: 'bloom',
    moves: moveSet('petal_lash', 'thorn_guard', 'bloom_burst', 'verdant_crown'),
    art: { form: 'moth', body: '#5b6f3c', belly: '#e4d79a', accent: '#ffd86b', glow: '#ffe58f', horns: 'feather', eye: '#fff7c2', pattern: 'eyes', mane: '#f5e7a0', wings: '#a5f3b9' }
  },
  cindermaw: {
    name: 'Cindermaw', epithet: 'The Cinder Hound', type: 'ember', rarity: 2, size: 3.6, catchRate: 0.27,
    desc: 'A furnace with legs. Its jaw glows white-hot when it catches the scent of stormglass.',
    stats: { hp: 78, atk: 82, def: 56, spd: 64 }, favorite: 'ember',
    moves: moveSet('ember_nip', 'cinder_rush', 'ember_lash', 'magma_fang'),
    art: { form: 'hound', body: '#8f3f31', belly: '#e6a067', accent: '#ff9c3f', glow: '#ff4d1f', horns: 'spikes', eye: '#ffd36e', pattern: 'stripes', mane: '#c85b32' }
  },
  obsidrake: {
    name: 'Obsidrake', epithet: 'The Glass Volcano', type: 'ember', rarity: 3, size: 4.8, catchRate: 0.18,
    desc: 'Its scales cool into black glass between eruptions. A single wingbeat scatters molten sand.',
    stats: { hp: 88, atk: 91, def: 74, spd: 58 }, favorite: 'ember',
    moves: moveSet('ember_nip', 'molten_shell', 'ember_lash', 'magma_fang'),
    art: { form: 'drake', body: '#352b31', belly: '#8c4a34', accent: '#ff7a35', glow: '#ff4a1c', horns: 'crown', eye: '#ffe36e', pattern: 'lava', mane: '#ff6a2c', wings: '#33242d' }
  },
  tideback: {
    name: 'Tideback', epithet: 'The Wandering Reef', type: 'tide', rarity: 2, size: 4.6, catchRate: 0.24,
    desc: 'A living island. Tide pools gather on its shell, and tiny creatures make homes in the grooves.',
    stats: { hp: 94, atk: 60, def: 92, spd: 32 }, favorite: 'tide',
    moves: moveSet('ripple_slam', 'mist_veil', 'tidal_crush', 'tidal_embrace'),
    art: { form: 'turtle', body: '#3b7890', belly: '#c8e0c2', accent: '#61e4da', glow: '#7dfff0', horns: 'none', eye: '#c9ffff', pattern: 'shell', mane: '#a5ece4' }
  },
  abyssalume: {
    name: 'Abyssalume', epithet: 'The Drowned Lantern', type: 'tide', rarity: 3, size: 3.8, catchRate: 0.2,
    desc: 'A drifting bell of cold light. Fishermen say its song is the sound of the sea remembering.',
    stats: { hp: 82, atk: 72, def: 58, spd: 76 }, favorite: 'tide',
    moves: moveSet('ripple_slam', 'mist_veil', 'abyss_pulse', 'tidal_embrace'),
    art: { form: 'jelly', body: '#2f5a88', belly: '#a6f7ff', accent: '#77ffe9', glow: '#68fff6', horns: 'none', eye: '#ffffff', pattern: 'glow', mane: '#b5ffff' }
  },
  glacierhorn: {
    name: 'Glacierhorn', epithet: 'The Avalanche Shepherd', type: 'frost', rarity: 2, size: 4.4, catchRate: 0.24,
    desc: 'It walks ahead of blizzards, carving safe paths with horns that have never known thaw.',
    stats: { hp: 96, atk: 77, def: 84, spd: 39 }, favorite: 'frost',
    moves: moveSet('frost_bite', 'hail_guard', 'glacial_fang', 'permafrost'),
    art: { form: 'yak', body: '#6d8d9e', belly: '#d7ebea', accent: '#a9f4ff', glow: '#8eecff', horns: 'ice', eye: '#e9ffff', pattern: 'snow', mane: '#ddf8f5', big: true }
  },
  rimewing: {
    name: 'Rimewing', epithet: 'The Snow Owl', type: 'frost', rarity: 2, size: 3.3, catchRate: 0.3,
    desc: 'A silent hunter with feathers like splintered glass. It sees the heat of a heartbeat through snow.',
    stats: { hp: 70, atk: 72, def: 58, spd: 82 }, favorite: 'frost',
    moves: moveSet('frost_bite', 'hail_guard', 'frost_lance', 'permafrost'),
    art: { form: 'bird', body: '#9ab5c4', belly: '#e6f8ff', accent: '#bff7ff', glow: '#9ceeff', horns: 'feather', eye: '#f7ffff', pattern: 'snow', mane: '#e9ffff', wings: '#d5f6ff' }
  },
  bogmaw: {
    name: 'Bogmaw', epithet: 'The Sunken Bell', type: 'umbra', rarity: 2, size: 3.8, catchRate: 0.26,
    desc: 'A patient titan that lets travelers mistake it for a mossy hill. Its croak sounds like a temple bell.',
    stats: { hp: 100, atk: 70, def: 86, spd: 33 }, favorite: 'umbra',
    moves: moveSet('shade_tap', 'veil_of_night', 'fungal_spore', 'night_terror'),
    art: { form: 'toad', body: '#3d5243', belly: '#9baa72', accent: '#b48cff', glow: '#a471ff', horns: 'none', eye: '#f4d76a', pattern: 'moss', mane: '#748b58' }
  },
  sporequeen: {
    name: 'Sporequeen', epithet: 'The Hollow Bloom', type: 'umbra', rarity: 3, size: 4.1, catchRate: 0.18,
    desc: 'A walking cathedral of fungus. Its spores show sleepers the futures they almost chose.',
    stats: { hp: 84, atk: 76, def: 66, spd: 65 }, favorite: 'umbra',
    moves: moveSet('shade_tap', 'veil_of_night', 'fungal_spore', 'night_terror'),
    art: { form: 'mushroom', body: '#5e4a68', belly: '#c2a8d8', accent: '#c78cff', glow: '#b36bff', horns: 'crown', eye: '#ffe4a8', pattern: 'spots', mane: '#b68fe0', wings: '#8a6fa0' }
  },
  voltaur: {
    name: 'Voltaur', epithet: 'The Thunder Falcon', type: 'storm', rarity: 2, size: 3.7, catchRate: 0.26,
    desc: 'It nests in storm cells and dives on lightning. Its feathers ring like struck copper.',
    stats: { hp: 74, atk: 84, def: 55, spd: 91 }, favorite: 'storm',
    moves: moveSet('spark_peck', 'static_field', 'sky_rend', 'storm_surge'),
    art: { form: 'bird', body: '#66552f', belly: '#f0d38a', accent: '#ffe45c', glow: '#ffd633', horns: 'crest', eye: '#fff8bf', pattern: 'bolts', mane: '#e6b94f', wings: '#b08f3b' }
  },
  thunderhoof: {
    name: 'Thunderhoof', epithet: 'The Storm Runner', type: 'storm', rarity: 3, size: 4.3, catchRate: 0.2,
    desc: 'A wild mare of the high plateau. Each hoofbeat leaves a little thunder rolling under the grass.',
    stats: { hp: 88, atk: 88, def: 66, spd: 86 }, favorite: 'storm',
    moves: moveSet('spark_peck', 'static_field', 'thunderclap', 'storm_surge'),
    art: { form: 'yak', body: '#4f4b58', belly: '#c1b4e4', accent: '#ffe45c', glow: '#ffd633', horns: 'bolt', eye: '#fff2a8', pattern: 'bolts', mane: '#d6c4ff' }
  },
  ashclaw: {
    name: 'Ashclaw', epithet: 'The Cinder Reaper', type: 'ember', rarity: 3, size: 4.0, catchRate: 0.19,
    desc: 'A scorpion the size of a caravan. Its claws are glass; its sting is a memory of the first fire.',
    stats: { hp: 86, atk: 93, def: 72, spd: 63 }, favorite: 'ember',
    moves: moveSet('ember_nip', 'molten_shell', 'ember_lash', 'magma_fang'),
    art: { form: 'scorpion', body: '#4b3431', belly: '#b67050', accent: '#ff9650', glow: '#ff5b22', horns: 'spikes', eye: '#ffe16a', pattern: 'lava', mane: '#8e4f35' }
  },
  nullgazer: {
    name: 'Nullgazer', epithet: 'The Quiet Star', type: 'umbra', rarity: 3, size: 3.4, catchRate: 0.17,
    desc: 'No one agrees on what it is. It drifts above the ash flats, watching something behind the sky.',
    stats: { hp: 78, atk: 86, def: 60, spd: 84 }, favorite: 'umbra',
    moves: moveSet('shade_tap', 'veil_of_night', 'void_gaze', 'night_terror'),
    art: { form: 'eye', body: '#33264e', belly: '#a888d9', accent: '#c49bff', glow: '#ac6cff', horns: 'rings', eye: '#f0d7ff', pattern: 'glow', mane: '#b08cff' }
  },
  astraleon: {
    name: 'Astraleon', epithet: 'The Crown of Dawn', type: 'aether', rarity: 3, size: 4.9, catchRate: 0.14,
    desc: 'The last light of a dying star, wearing the shape of a lion. It has guarded the Apex since before names.',
    stats: { hp: 98, atk: 96, def: 82, spd: 88 }, favorite: 'aether',
    moves: moveSet('star_shard', 'prism_guard', 'radiant_beam', 'celestial_judgment'),
    art: { form: 'lion', body: '#d8c49a', belly: '#fff4d6', accent: '#ffe391', glow: '#ffd56b', horns: 'crown', eye: '#fffbd8', pattern: 'constellation', mane: '#f5e6b8', big: true }
  },
  orreryn: {
    name: 'Orreryn', epithet: 'The Clockwork Sun', type: 'aether', rarity: 3, size: 4.5, catchRate: 0.15,
    desc: 'A vast stone orrery given a will. It turns slowly, and the stars keep its time.',
    stats: { hp: 102, atk: 86, def: 96, spd: 52 }, favorite: 'aether',
    moves: moveSet('star_shard', 'prism_guard', 'radiant_beam', 'celestial_judgment'),
    art: { form: 'golem', body: '#b7a878', belly: '#f5e7b4', accent: '#ffeaa2', glow: '#ffd56b', horns: 'rings', eye: '#fff6c8', pattern: 'constellation', mane: '#e9d79b' }
  }
}

export const STARTERS = ['mossling', 'cindercub', 'ripplefin']

const team = (entries) => entries.map(([species, level]) => ({ species, level }))

export const REGIONS = [
  {
    id: 'verdant', number: 1, name: 'Verdant Hollow', subtitle: 'Where ancient roots dream',
    type: 'bloom', danger: 1, levelRange: [3, 6],
    desc: 'A cradle of colossal trees and luminous fungus. The air tastes of rain and honey.',
    palette: {
      skyTop: '#183d45', skyBottom: '#e7a86c', fog: '#7ea887', ground: '#426e4e', ground2: '#71975a',
      rock: '#56624b', accent: '#7bf0a9', glow: '#d5ff8a', sun: '#ffd8a0', ambient: '#9ccfa1', water: '#5bc8b1'
    },
    creatures: ['thornox', 'glimmerwing'],
    material: 'sunpetal',
    gym: {
      name: 'Amberstep Grove', leader: 'Wren Thistle', title: 'Rootbound Warden', badge: 'Verdant Sigil', sigil: '❧',
      quote: 'Every giant was once a seed that refused to give up.',
      team: team([['glimmerwing', 6], ['thornox', 8]]), reward: { materials: { sunpetal: 3 }, xp: 60 }
    }
  },
  {
    id: 'ember', number: 2, name: 'Emberreach', subtitle: 'The mountain that breathes',
    type: 'ember', danger: 2, levelRange: [7, 10],
    desc: 'Basalt terraces glow above a slow river of fire. Cinder blooms crack open at dusk.',
    palette: {
      skyTop: '#2c1725', skyBottom: '#ef6d44', fog: '#8d4d3d', ground: '#4a3731', ground2: '#765045',
      rock: '#3b3030', accent: '#ff9d52', glow: '#ff6a2a', sun: '#ffbb73', ambient: '#d17e5e', water: '#ff7a36'
    },
    creatures: ['cindermaw', 'obsidrake'],
    material: 'embercap',
    gym: {
      name: 'The Caldera Ring', leader: 'Kael Ashford', title: 'Forgeheart', badge: 'Ember Brand', sigil: '♨',
      quote: 'A heart is just a furnace with better manners.',
      team: team([['cindermaw', 10], ['obsidrake', 12]]), reward: { materials: { embercap: 3 }, xp: 90 }
    }
  },
  {
    id: 'tide', number: 3, name: 'Tideglass Coast', subtitle: 'A sea that remembers',
    type: 'tide', danger: 3, levelRange: [11, 14],
    desc: 'Glass reefs rise from turquoise shallows. At night, the water mirrors a sky no one can see.',
    palette: {
      skyTop: '#10334e', skyBottom: '#f4b5a2', fog: '#4b8d9a', ground: '#836f58', ground2: '#bca98a',
      rock: '#4d7180', accent: '#5fe7e2', glow: '#7dfff0', sun: '#ffe0b5', ambient: '#7bcfd3', water: '#32cfd1'
    },
    creatures: ['tideback', 'abyssalume'],
    material: 'pearlkelp',
    gym: {
      name: 'The Glass Tide', leader: 'Mira Sable', title: 'Tidecaller', badge: 'Tidal Pearl', sigil: '≈',
      quote: 'The sea keeps every promise it ever made.',
      team: team([['abyssalume', 14], ['tideback', 16]]), reward: { materials: { pearlkelp: 3 }, xp: 120 }
    }
  },
  {
    id: 'frost', number: 4, name: 'Frostspire', subtitle: 'The white silence',
    type: 'frost', danger: 4, levelRange: [15, 18],
    desc: 'A staircase of glacier and black pine. Somewhere above, the aurora rings like a bell.',
    palette: {
      skyTop: '#1a3152', skyBottom: '#b9dbe4', fog: '#8cabb9', ground: '#b9cfd2', ground2: '#e6f1ef',
      rock: '#728794', accent: '#a9f4ff', glow: '#d0fbff', sun: '#e2f7ff', ambient: '#a8d9e6', water: '#79dce8'
    },
    creatures: ['rimewing', 'glacierhorn'],
    material: 'frostberry',
    gym: {
      name: 'The Rime Hold', leader: 'Bjorn Halvard', title: 'Avalanche Shepherd', badge: 'Rime Crown', sigil: '❄',
      quote: 'Stand still long enough and even winter will respect you.',
      team: team([['rimewing', 18], ['glacierhorn', 20]]), reward: { materials: { frostberry: 3 }, xp: 150 }
    }
  },
  {
    id: 'sunken', number: 5, name: 'Sunken Wilds', subtitle: 'The garden beneath',
    type: 'umbra', danger: 5, levelRange: [19, 22],
    desc: 'A drowned temple swallowed by violet moss. The trees lean close to hear you breathe.',
    palette: {
      skyTop: '#1d1937', skyBottom: '#7f5b8b', fog: '#51536b', ground: '#3e4a3f', ground2: '#62725a',
      rock: '#4f4a5e', accent: '#b78cff', glow: '#a471ff', sun: '#d8b7ff', ambient: '#8e86a8', water: '#6f5f97'
    },
    creatures: ['bogmaw', 'sporequeen'],
    material: 'gloomcap',
    gym: {
      name: 'The Hollow Nave', leader: 'Sable Vey', title: 'Keeper of Quiet', badge: 'Hollow Eye', sigil: '☾',
      quote: 'Listen. The dark is not empty. It is full of things that waited.',
      team: team([['bogmaw', 22], ['sporequeen', 24]]), reward: { materials: { gloomcap: 3 }, xp: 180 }
    }
  },
  {
    id: 'storm', number: 6, name: 'Stormcrest', subtitle: 'Where the sky breaks',
    type: 'storm', danger: 6, levelRange: [23, 26],
    desc: 'Shattered highlands float above a sea of cloud. Lightning walks from peak to peak.',
    palette: {
      skyTop: '#1b213d', skyBottom: '#c6b07a', fog: '#6c718c', ground: '#58634f', ground2: '#8a8b62',
      rock: '#575568', accent: '#ffe066', glow: '#ffef9e', sun: '#fff0b0', ambient: '#a7a7c7', water: '#6b7bc4'
    },
    creatures: ['voltaur', 'thunderhoof'],
    material: 'stormglass',
    gym: {
      name: 'The Thunder Seat', leader: 'Zephyra Vane', title: 'Stormwarden', badge: 'Storm Fang', sigil: 'ϟ',
      quote: 'A storm does not hate the mountain. It simply insists on being heard.',
      team: team([['voltaur', 26], ['thunderhoof', 28]]), reward: { materials: { stormglass: 3 }, xp: 220 }
    }
  },
  {
    id: 'cinder', number: 7, name: 'Cinder Wastes', subtitle: 'The ashen quiet',
    type: 'stone', danger: 7, levelRange: [27, 30],
    desc: 'A dead caldera under a red sun. Every footprint stays, because nothing remains to erase it.',
    palette: {
      skyTop: '#2b1b1d', skyBottom: '#b55742', fog: '#76544d', ground: '#5b4a42', ground2: '#897061',
      rock: '#3c3534', accent: '#ff9650', glow: '#ff5b22', sun: '#ffc27d', ambient: '#bb8b71', water: '#a64c32'
    },
    creatures: ['ashclaw', 'obsidrake'],
    material: 'ashsalt',
    gym: {
      name: 'The Last Furnace', leader: 'Vulcan Rook', title: 'Ash Sovereign', badge: 'Ashen Sun', sigil: '▲',
      quote: 'Everything ends in ash. The trick is deciding what to make from it.',
      team: team([['ashclaw', 30], ['obsidrake', 32]]), reward: { materials: { ashsalt: 3 }, xp: 260 }
    }
  },
  {
    id: 'celestial', number: 8, name: 'Celestial Apex', subtitle: 'The edge of the map',
    type: 'aether', danger: 8, levelRange: [31, 34],
    desc: 'An island adrift above the world. Broken constellations drift between white pillars.',
    palette: {
      skyTop: '#11122c', skyBottom: '#e9b98b', fog: '#8385a6', ground: '#b8ac91', ground2: '#e0d5b7',
      rock: '#8d88a0', accent: '#ffe391', glow: '#ffd56b', sun: '#fff2c7', ambient: '#c5bde3', water: '#9fd9ff'
    },
    creatures: ['astraleon', 'orreryn'],
    material: 'starfruit',
    gym: {
      name: 'The Orrery', leader: 'Astra Vale', title: 'The Last Light', badge: 'Astral Star', sigil: '✦',
      quote: 'We are all small things trying to carry a little light home.',
      team: team([['orreryn', 34], ['astraleon', 37]]), reward: { materials: { starfruit: 3 }, xp: 320 }
    }
  }
]

export const BADGES = REGIONS.map(r => ({ id: r.id, name: r.gym.badge, sigil: r.gym.sigil, type: r.type, leader: r.gym.leader }))

export const SKIN_TONES = ['#f2c6a0', '#e0a778', '#c68654', '#9b5f3b', '#6c402d', '#43291f']
export const HAIR_COLORS = ['#241d1b', '#56372a', '#9a6a3a', '#d8b869', '#b9c1c8', '#7c4dc4', '#d45b5b', '#3d7a72']
export const OUTFIT_COLORS = ['#e5b85f', '#4fc2a2', '#6f8fe8', '#d76b6b', '#a57ae0', '#e6e0cf', '#5f6a7d', '#cf7f48']
export const HAIR_STYLES = ['Short', 'Windswept', 'Long', 'Braids', 'Curls', 'Topknot']

export function xpToNext(level) {
  return Math.floor(28 + level * level * 1.9 + level * 8)
}

export function maxHpFor(species, level) {
  return Math.floor(species.stats.hp * (1 + 0.115 * (level - 1)) + level * 2.5)
}

export function statsFor(species, level) {
  const s = species.stats
  const k = 1 + 0.075 * (level - 1)
  return {
    hp: maxHpFor(species, level),
    atk: Math.floor(s.atk * k),
    def: Math.floor(s.def * k),
    spd: Math.floor(s.spd * k)
  }
}

export function movesFor(species, level) {
  return species.moves.filter(m => level >= m.level).map(m => m.id)
}

export function makeCreature(speciesId, level = 5, opts = {}) {
  const species = SPECIES[speciesId]
  const stats = statsFor(species, level)
  return {
    uid: opts.uid || `${speciesId}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    speciesId, level, xp: opts.xp || 0, hp: opts.hp ?? stats.hp, maxHp: stats.hp,
    nature: opts.nature || ['Bold', 'Curious', 'Gentle', 'Fierce', 'Calm', 'Mischievous'][Math.floor(Math.random() * 6)]
  }
}

export function regionById(id) {
  return REGIONS.find(r => r.id === id) || REGIONS[0]
}
