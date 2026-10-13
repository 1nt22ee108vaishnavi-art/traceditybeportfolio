import artworkMapping from './artwork-mapping.json'
import extraArtwork from './extra-artwork.json'

export type PortfolioImage = {
  src: string
  alt: string
  position?: string
}

export type WorkCategory = {
  id: string
  color: string
  slug: string
  pigment: string
  artworks: PortfolioImage[]
}

export type DaybookEntry = {
  src: string
  alt: string
}

// Shape of the JSON exported by tools/artwork-organiser (format version 2).
type MappedImage = { file: string; fileName?: string } | null
type OrderedImage = { order: number; image: MappedImage }
type ArtworkMapping = {
  homepage: { heroImage: MappedImage }
  about: { portrait: MappedImage }
  work: {
    categories: Array<{ id: string; name: string; slug: string; pigment: string; order: number; artworks: OrderedImage[] }>
  }
  sketchbook: OrderedImage[]
  daybook: { coverImage: MappedImage; gallery: OrderedImage[] }
}

// Replace src/data/artwork-mapping.json with a new organiser export to update every image on the site.
// Each mapped file is a copy of the OneDrive original in public/assets/portfolio/organiser.
const mapping = artworkMapping as ArtworkMapping

const artworkPath = (relativePath: string) =>
  `/assets/portfolio/organiser/${relativePath.split('/').map(encodeURIComponent).join('/')}`

const byOrder = <T extends { order: number }>(items: T[]) => [...items].sort((a, b) => a.order - b.order)

function mappedImage(image: MappedImage, alt: string, slot: string): PortfolioImage {
  if (!image) console.warn(`Artwork mapping: no image assigned to ${slot}.`)
  return { src: image ? artworkPath(image.file) : '', alt }
}

function mappedImages(items: OrderedImage[], alt: (index: number) => string, slot: string): PortfolioImage[] {
  return byOrder(items).flatMap((item, index) => {
    if (item.image) return [mappedImage(item.image, alt(index), slot)]
    console.warn(`Artwork mapping: ${slot} entry ${item.order} has no image assigned.`)
    return []
  })
}

export const portfolioImages = {
  homePortrait: mappedImage(mapping.homepage.heroImage, 'Artist portrait', 'homepage hero'),
  aboutPortrait: mappedImage(mapping.about.portrait, 'Photograph of the artist', 'About portrait'),
  daybookPreview: mappedImage(mapping.daybook.coverImage, 'Daybook photograph preview', 'Daybook cover')
} satisfies Record<string, PortfolioImage>

// Additions on top of the organiser mapping (extra-artwork.json): artwork in the owner's folder that
// the mapping misses, sorted by medium; collections the owner added (which can take over another
// collection's mapped artwork); collections merged into another (mergedInto); and the Work order. Each collection shows its mapped artworks first,
// then its extras, with no limit on how many.
type ExtraCollection = { id: string; name: string; slug: string; pigment: string; takesMappedArtworkFrom?: string }
const extras = extraArtwork as { work: Record<string, string[]>; daybook: string[]; collections: ExtraCollection[]; order: string[]; mergedInto: Record<string, string> }
const extraImages = (files: string[] | undefined, alt: (index: number) => string): PortfolioImage[] =>
  (files ?? []).map((file, index) => ({ src: artworkPath(file), alt: alt(index) }))

// Names, slugs and colours come from the mapping (plus added collections); keep slugs stable as they
// are public URLs. Collections listed in extras.order come first, in that order.
const movedFrom = new Set(extras.collections.map(collection => collection.takesMappedArtworkFrom))
const mappedArtworks = (slug: string, name: string) => {
  const category = mapping.work.categories.find(item => item.slug === slug)
  return category ? mappedImages(category.artworks, () => `${name} collection artwork`, `${name} collection`) : []
}
// Artwork from collections merged into this one follows its own.
const mergedArtworks = (slug: string, name: string) => Object.entries(extras.mergedInto)
  .filter(([, into]) => into === slug)
  .flatMap(([from]) => [...mappedArtworks(from, name), ...extraImages(extras.work[from], () => `${name} collection artwork`)])
const allCategories: WorkCategory[] = [
  ...byOrder(mapping.work.categories).filter(category => !extras.mergedInto[category.slug]).map(category => ({
    id: category.id,
    color: category.name,
    slug: category.slug,
    pigment: category.pigment,
    artworks: [
      ...(movedFrom.has(category.slug) ? [] : mappedArtworks(category.slug, category.name)),
      ...extraImages(extras.work[category.slug], () => `${category.name} collection artwork`),
      ...mergedArtworks(category.slug, category.name)
    ]
  })),
  ...extras.collections.map(collection => ({
    id: collection.id,
    color: collection.name,
    slug: collection.slug,
    pigment: collection.pigment,
    artworks: [
      ...(collection.takesMappedArtworkFrom ? mappedArtworks(collection.takesMappedArtworkFrom, collection.name) : []),
      ...extraImages(extras.work[collection.slug], () => `${collection.name} collection artwork`)
    ]
  }))
]
const position = (slug: string) => { const index = extras.order.indexOf(slug); return index === -1 ? extras.order.length : index }
export const workCategories: WorkCategory[] = allCategories
  .map((category, index) => ({ category, index }))
  .sort((a, b) => position(a.category.slug) - position(b.category.slug) || a.index - b.index)
  .map(({ category }) => category)

// Old URLs of merged collections still open the collection they now belong to.
export const findWorkCategory = (slug?: string) => {
  const target = slug ? extras.mergedInto[slug] ?? slug : undefined
  return workCategories.find(item => item.slug === target)
}

export const sketchbookPages: PortfolioImage[] = mappedImages(mapping.sketchbook, () => 'Sketchbook drawing', 'Sketchbook')

const mappedDaybook = mappedImages(mapping.daybook.gallery, index => `Daybook photograph ${index + 1}`, 'Daybook gallery')
export const daybookEntries: DaybookEntry[] = [
  ...mappedDaybook,
  ...extraImages(extras.daybook, index => `Daybook photograph ${mappedDaybook.length + index + 1}`)
]
