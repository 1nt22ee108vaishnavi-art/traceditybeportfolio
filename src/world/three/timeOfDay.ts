import { Color, Vector3 } from 'three'

// The light and weather of the world. Every mood, and every hour of the optional day cycle, is one
// Atmosphere: the same set of values that drives the sky, sun, fill light, fog, water, clouds, rain,
// creatures and the final colour grade. Changing mood blends from one Atmosphere to the next, so the
// whole scene changes together and smoothly, and nothing is duplicated per mood.

const colourNames = ['skyTop', 'skyHorizon', 'sun', 'hemiSky', 'hemiGround', 'fog', 'water', 'cloud', 'shadowTint', 'highlightTint'] as const
const numberNames = [
  'sunIntensity', 'hemiIntensity', 'stars', 'fireflies', 'dust', 'exposure', 'rain', 'wet', 'gloom', 'birds', 'fogNear', 'fogFar',
  'saturation', 'rays', 'cloudCover'
] as const
type ColourName = typeof colourNames[number]
type NumberName = typeof numberNames[number]

export type Atmosphere = Record<ColourName, Color> & Record<NumberName, number> & { light: Vector3; sunDirection: Vector3; sunUp: number; isSun: number }
type Key = Record<ColourName, string> & Record<NumberName, number>

// Values most moods share: clear weather and a neutral grade.
const clear = {
  rain: 0, wet: 0, gloom: 0, birds: 0, fogNear: 60, fogFar: 750, saturation: 1.08, rays: 0.6, cloudCover: 0.75,
  shadowTint: '#00000a', highlightTint: '#060300'
}

const night: Key = {
  ...clear,
  skyTop: '#0d1530', skyHorizon: '#2b3866', sun: '#9fb4ff', sunIntensity: 0.55,
  hemiSky: '#4c62a6', hemiGround: '#1a2030', hemiIntensity: 0.7, fog: '#222e52',
  water: '#16223f', cloud: '#3a4670', stars: 1, fireflies: 1, dust: 0, exposure: 1.3,
  fogNear: 30, fogFar: 520, saturation: 1.05, rays: 0, cloudCover: 0.45, shadowTint: '#000414', highlightTint: '#020208'
}

// The moods a visitor can choose. `hour` places the sun or moon.
export type MoodId = 'golden-day' | 'dreamy-dusk' | 'midnight-blue' | 'rainy-solitude'
export const moods: Array<{ id: MoodId; name: string; description: string; hour: number; swatch: [string, string]; key: Key }> = [
  {
    id: 'golden-day',
    name: 'Golden Day',
    description: 'Bright daylight and warm sun',
    hour: 15.2,
    swatch: ['#6aa2e0', '#f6d48e'],
    key: {
      ...clear,
      skyTop: '#3d7fd4', skyHorizon: '#c4dcea', sun: '#ffe1ae', sunIntensity: 3.1,
      hemiSky: '#cfe0f0', hemiGround: '#8a8450', hemiIntensity: 1.05, fog: '#c9dbe2',
      water: '#4f7f7c', cloud: '#fffaf0', stars: 0, fireflies: 0, dust: 1, exposure: 1,
      birds: 1, rays: 0.5, fogNear: 80, fogFar: 900, highlightTint: '#0a0500'
    }
  },
  {
    id: 'dreamy-dusk',
    name: 'Dreamy Dusk',
    description: 'Soft twilight and pink reflections',
    hour: 18.65,
    swatch: ['#8a86c2', '#f3a283'],
    key: {
      ...clear,
      skyTop: '#6d76b6', skyHorizon: '#f2a585', sun: '#ff9a58', sunIntensity: 1.9,
      hemiSky: '#bba7cb', hemiGround: '#4d463f', hemiIntensity: 0.85, fog: '#d5a6a6',
      water: '#7c6f8e', cloud: '#ffc0a6', stars: 0.12, fireflies: 0.45, dust: 0.5, exposure: 1.08,
      birds: 0.6, fogNear: 45, fogFar: 650, rays: 0.9, shadowTint: '#06000c', highlightTint: '#0c0300'
    }
  },
  {
    id: 'midnight-blue',
    name: 'Midnight Blue',
    description: 'Deep blue night, stars and fireflies',
    hour: 23,
    swatch: ['#0f1a3c', '#4c62a6'],
    key: night
  },
  {
    id: 'rainy-solitude',
    name: 'Rainy Solitude',
    description: 'Gentle rain and a quiet, grey lake',
    hour: 13,
    swatch: ['#7f8b94', '#b9c2c2'],
    key: {
      ...clear,
      skyTop: '#7a8792', skyHorizon: '#b4bcbd', sun: '#dfe3e2', sunIntensity: 0.45,
      hemiSky: '#b3bdc2', hemiGround: '#4c5444', hemiIntensity: 1.25, fog: '#a8b0b0',
      water: '#41575a', cloud: '#8b959b', stars: 0, fireflies: 0, dust: 0, exposure: 1.05,
      rain: 1, wet: 1, gloom: 1, fogNear: 14, fogFar: 330, saturation: 0.92, rays: 0, cloudCover: 1,
      shadowTint: '#000306', highlightTint: '#000000'
    }
  }
]

// The optional day cycle: a mood for each part of the day, blended hour by hour.
const day: Array<{ hour: number } & Key> = [
  { hour: 0, ...night },
  { hour: 4.6, ...night, skyHorizon: '#3c3f70', stars: 0.85 },
  { hour: 6.2, ...clear, skyTop: '#9fb0da', skyHorizon: '#f6c4b2', sun: '#ffb38a', sunIntensity: 1.5, hemiSky: '#e6d2d6', hemiGround: '#5d6045', hemiIntensity: 0.8, fog: '#e2c8c4', water: '#8d8a9a', cloud: '#ffd9cc', stars: 0.08, fireflies: 0, dust: 0.6, exposure: 1.05, birds: 0.6 },
  { hour: 9, ...moods[0].key, skyTop: '#6f9fdc', sun: '#fff0da', sunIntensity: 2.6 },
  { hour: 14, ...moods[0].key },
  { hour: 17.2, ...moods[0].key, skyTop: '#8ea6d2', skyHorizon: '#f3cfa6', sun: '#ffc283', sunIntensity: 2.5, hemiSky: '#efdcc8', fog: '#e9d2b6', water: '#7f8a7a', cloud: '#ffe2c4' },
  { hour: 18.7, ...moods[1].key },
  { hour: 20.2, ...night },
  { hour: 24, ...night }
]

// The sun rises to the front left and sets low over the lake, so the scene is often backlit; by night
// the moon lights it from high on the left.
const moon = new Vector3(-0.45, 0.62, -0.65).normalize()
function placeLight(hour: number, atmosphere: Atmosphere){
  const angle = ((hour - 6.25) / 13) * Math.PI
  const elevation = Math.sin(angle)
  atmosphere.sunDirection.set(-Math.cos(angle) * 0.35, elevation, -0.95).normalize()
  if (elevation < -0.04){
    atmosphere.light.copy(moon)
    atmosphere.isSun = 0
  } else {
    atmosphere.light.set(-Math.cos(angle) * 0.35, Math.max(elevation, 0.02), -0.95).normalize()
    atmosphere.isSun = 1
  }
  atmosphere.sunUp = Math.min(1, Math.max(0, atmosphere.sunDirection.y * 6 + 0.2))
}

export function createAtmosphere(): Atmosphere {
  const atmosphere = { light: new Vector3(0, 1, 0), sunDirection: new Vector3(0, 1, 0), sunUp: 1, isSun: 1 } as Atmosphere
  colourNames.forEach(name => { atmosphere[name] = new Color() })
  numberNames.forEach(name => { atmosphere[name] = 0 })
  return atmosphere
}

function fromKeys(out: Atmosphere, a: Key, b: Key, t: number){
  colourNames.forEach(name => out[name].set(a[name]).lerp(scratchColour.set(b[name]), t))
  numberNames.forEach(name => { out[name] = a[name] + (b[name] - a[name]) * t })
  return out
}
const scratchColour = new Color()

export function moodAtmosphere(id: MoodId, out = createAtmosphere()){
  const mood = moods.find(item => item.id === id) ?? moods[0]
  fromKeys(out, mood.key, mood.key, 0)
  placeLight(mood.hour, out)
  return out
}

export function cycleAtmosphere(hour: number, out = createAtmosphere()){
  const h = ((hour % 24) + 24) % 24
  let index = day.findIndex(key => key.hour > h) - 1
  if (index < 0) index = day.length - 2
  const a = day[index], b = day[index + 1]
  const raw = (h - a.hour) / (b.hour - a.hour)
  fromKeys(out, a, b, raw * raw * (3 - 2 * raw))
  placeLight(h, out)
  return out
}

// Eases `current` a step towards `target`; called every frame, so changes of mood take a few seconds.
export function blendAtmosphere(current: Atmosphere, target: Atmosphere, amount: number){
  colourNames.forEach(name => current[name].lerp(target[name], amount))
  numberNames.forEach(name => { current[name] += (target[name] - current[name]) * amount })
  current.light.lerp(target.light, amount).normalize()
  current.sunDirection.lerp(target.sunDirection, amount).normalize()
  current.sunUp += (target.sunUp - current.sunUp) * amount
  current.isSun += (target.isSun - current.isSun) * amount
}

export function copyAtmosphere(current: Atmosphere, target: Atmosphere){ blendAtmosphere(current, target, 1) }

export function periodName(hour: number){
  const h = ((hour % 24) + 24) % 24
  if (h < 5.5 || h >= 20) return 'Night'
  if (h < 7.6) return 'Sunrise'
  if (h < 12) return 'Morning'
  if (h < 16.3) return 'Afternoon'
  if (h < 18.1) return 'Golden hour'
  return 'Sunset'
}
