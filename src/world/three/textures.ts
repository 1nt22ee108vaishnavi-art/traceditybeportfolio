import { CanvasTexture, RepeatWrapping, SRGBColorSpace, TextureLoader, type MeshStandardMaterial, type Texture } from 'three'

// Textures for the world. Surface materials (wood, bark, rock, ground) are CC0 scans from Poly Haven,
// kept in public/assets/world/textures (see the README there). Everything else is painted here on a
// canvas, so it costs no download.

const loader = new TextureLoader()
const base = '/assets/world/textures/'

// Gives a material its scanned colour, normal and ambient-occlusion/roughness maps once they load. The
// material is complete without them, so a missing file only loses detail, never the object.
export function scanned(material: MeshStandardMaterial, name: string, repeat: [number, number], options: { normal?: number; colour?: boolean } = {}){
  const set = (texture: Texture) => {
    texture.wrapS = texture.wrapT = RepeatWrapping
    texture.repeat.set(repeat[0], repeat[1])
    texture.anisotropy = 4
    return texture
  }
  if (options.colour !== false){
    loader.load(`${base}${name}_diff.webp`, texture => {
      texture.colorSpace = SRGBColorSpace
      material.map = set(texture)
      material.needsUpdate = true
    })
  }
  loader.load(`${base}${name}_nor_gl.webp`, texture => {
    material.normalMap = set(texture)
    material.normalScale.setScalar(options.normal ?? 1)
    material.needsUpdate = true
  })
  // ARM: ambient occlusion in red, roughness in green, metalness in blue.
  loader.load(`${base}${name}_arm.webp`, texture => {
    set(texture)
    material.aoMap = texture
    material.aoMapIntensity = 0.8
    material.roughnessMap = texture
    material.needsUpdate = true
  })
  return material
}

function canvas(width: number, height = width){
  const element = document.createElement('canvas')
  element.width = width
  element.height = height
  return { element, g: element.getContext('2d')! }
}
function finish(element: HTMLCanvasElement, colour = true){
  const texture = new CanvasTexture(element)
  if (colour) texture.colorSpace = SRGBColorSpace
  return texture
}

// Seeded randomness for painted textures.
function seeded(seed: number){
  let state = seed >>> 0
  return () => { state = (Math.imul(state ^ (state >>> 15), 2246822507) + 0x9e3779b9) >>> 0; return state / 4294967296 }
}

// A cluster of leaves on a transparent card. Leaves are painted in greys so each tree can tint them;
// the lighter ones sit on top, as sunlit leaves do.
export function leafClusterTexture(){
  const { element, g } = canvas(256)
  const rand = seeded(5)
  for (let i = 0; i < 70; i++){
    const angle = rand() * Math.PI * 2
    const reach = Math.pow(rand(), 0.6) * 96
    const x = 128 + Math.cos(angle) * reach, y = 128 + Math.sin(angle) * reach * 0.9
    const size = 13 + rand() * 13
    const tone = Math.round(150 + (1 - reach / 96) * 40 + rand() * 60)
    g.save()
    g.translate(x, y)
    g.rotate(angle + (rand() - 0.5) * 1.2)
    g.fillStyle = `rgb(${tone}, ${tone}, ${tone})`
    g.beginPath()
    g.moveTo(0, -size)
    g.quadraticCurveTo(size * 0.6, -size * 0.2, 0, size)
    g.quadraticCurveTo(-size * 0.6, -size * 0.2, 0, -size)
    g.fill()
    g.strokeStyle = `rgba(90, 90, 90, 0.35)`
    g.lineWidth = 1
    g.beginPath(); g.moveTo(0, -size * 0.85); g.lineTo(0, size * 0.85); g.stroke()
    g.restore()
  }
  return finish(element, false)
}

// A palm frond: a midrib with leaflets drooping either side.
export function frondTexture(){
  const { element, g } = canvas(128, 512)
  g.strokeStyle = '#d8d8c8'
  g.lineCap = 'round'
  g.lineWidth = 4
  g.beginPath(); g.moveTo(64, 512); g.lineTo(64, 6); g.stroke()
  for (let y = 500; y > 14; y -= 9){
    const t = 1 - y / 512
    const length = 58 * Math.sin(Math.min(1, (1 - t) * 1.25) * Math.PI * 0.9) + 6
    for (const side of [-1, 1]){
      const tone = 180 + Math.round(Math.random() * 60)
      g.strokeStyle = `rgb(${tone}, ${tone}, ${tone})`
      g.lineWidth = 7 - t * 3
      g.beginPath()
      g.moveTo(64, y)
      g.quadraticCurveTo(64 + side * length * 0.55, y - 6, 64 + side * length, y + 16 + t * 10)
      g.stroke()
    }
  }
  return finish(element, false)
}

// Soft round glow, for the lanterns and candle.
export function glowTexture(inner = 'rgba(255, 220, 160, 1)', middle = 'rgba(255, 180, 90, 0.45)'){
  const { element, g } = canvas(128)
  const gradient = g.createRadialGradient(64, 64, 0, 64, 64, 64)
  gradient.addColorStop(0, inner)
  gradient.addColorStop(0.25, middle)
  gradient.addColorStop(1, 'rgba(255, 160, 60, 0)')
  g.fillStyle = gradient
  g.fillRect(0, 0, 128, 128)
  return finish(element)
}

// A soft dark blot laid under objects where they meet a surface, so they sit on it.
export function contactShadowTexture(){
  const { element, g } = canvas(64)
  const gradient = g.createRadialGradient(32, 32, 0, 32, 32, 32)
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0.55)')
  gradient.addColorStop(0.55, 'rgba(0, 0, 0, 0.22)')
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
  g.fillStyle = gradient
  g.fillRect(0, 0, 64, 64)
  return finish(element, false)
}

// Cork for the inspiration board.
export function corkTexture(){
  const { element, g } = canvas(256)
  const rand = seeded(9)
  g.fillStyle = '#b48a5c'
  g.fillRect(0, 0, 256, 256)
  for (let i = 0; i < 2600; i++){
    const tone = rand()
    g.fillStyle = tone > 0.5 ? `rgba(120, 80, 45, ${0.25 + rand() * 0.3})` : `rgba(215, 175, 125, ${0.2 + rand() * 0.3})`
    g.fillRect(rand() * 256, rand() * 256, 1 + rand() * 3, 1 + rand() * 2)
  }
  const texture = finish(element)
  texture.wrapS = texture.wrapT = RepeatWrapping
  return texture
}

// Woven cloth for cushions, throws and the cat's bed: a fine over-and-under weave with a slightly
// uneven yarn, painted in light greys so the material's colour tints it. With `stripes`, a few woven
// bands run across it, as on a throw.
export function fabricTexture(stripes = false){
  const { element, g } = canvas(128)
  const rand = seeded(stripes ? 21 : 17)
  g.fillStyle = '#d6d6d6'
  g.fillRect(0, 0, 128, 128)
  for (let y = 0; y < 128; y += 3){
    g.fillStyle = `rgba(255, 255, 255, ${0.18 + rand() * 0.16})`
    g.fillRect(0, y, 128, 1.5)
  }
  for (let x = 0; x < 128; x += 3){
    g.fillStyle = `rgba(0, 0, 0, ${0.06 + rand() * 0.07})`
    g.fillRect(x, 0, 1.5, 128)
  }
  for (let i = 0; i < 260; i++){
    g.fillStyle = `rgba(${rand() > 0.5 ? '0, 0, 0' : '255, 255, 255'}, 0.07)`
    g.fillRect(rand() * 128, rand() * 128, 2 + rand() * 4, 1)
  }
  if (stripes) for (const [y, height, tone] of [[18, 10, 'rgba(255, 250, 235, .55)'], [34, 3, 'rgba(40, 30, 20, .35)'], [82, 6, 'rgba(255, 250, 235, .45)'], [94, 3, 'rgba(40, 30, 20, .3)']] as Array<[number, number, string]>){
    g.fillStyle = tone
    g.fillRect(0, y, 128, height)
  }
  const texture = finish(element)
  texture.wrapS = texture.wrapT = RepeatWrapping
  return texture
}

// Painted plaster-and-board for the inside of the side wall.
export function limewashTexture(){
  const { element, g } = canvas(256)
  const rand = seeded(13)
  g.fillStyle = '#e4d4b8'
  g.fillRect(0, 0, 256, 256)
  for (let i = 0; i < 180; i++){
    g.fillStyle = `rgba(${rand() > 0.5 ? '190, 165, 125' : '245, 236, 214'}, ${0.08 + rand() * 0.12})`
    g.beginPath()
    g.ellipse(rand() * 256, rand() * 256, 10 + rand() * 40, 6 + rand() * 20, rand() * 3, 0, Math.PI * 2)
    g.fill()
  }
  const texture = finish(element)
  texture.wrapS = texture.wrapT = RepeatWrapping
  return texture
}
