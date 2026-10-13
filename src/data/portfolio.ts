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

const artworkPath = (relativePath: string) =>
  `/assets/portfolio/organiser/${relativePath.split('/').map(encodeURIComponent).join('/')}`

const workArtwork = (file: string, alt = 'Artwork on paper', position?: string): PortfolioImage => ({
  src: artworkPath(file),
  alt,
  position
})

// Original image files are preserved in OneDrive; these are local portfolio copies.
export const portfolioImages = {
  homePortrait: {
    src: artworkPath('WhatsApp Image 2026-10-10 at 7.35.11 PM (1).jpeg'),
    alt: 'Artist portrait',
    position: 'center 38%'
  },
  aboutPortrait: {
    src: artworkPath('WhatsApp Image 2026-10-10 at 9.06.53 PM (1).jpeg'),
    alt: 'Photograph of the artist',
    position: 'center 42%'
  },
  daybookPreview: {
    src: artworkPath('WhatsApp Image 2026-10-10 at 8.18.55 PM (1).jpeg'),
    alt: 'Daybook photograph preview'
  }
} satisfies Record<string, PortfolioImage>

// Artwork assignments and order come from the organiser mapping; keep slugs stable as they are public URLs.
export const workCategories: WorkCategory[] = [
  {
    id: 'charcoal',
    color: 'Cobalt',
    slug: 'charcoal',
    pigment: '#47677b',
    artworks: [
      workArtwork('WhatsApp Image 2026-10-10 at 7.20.22 PM.jpeg', 'Artwork on paper', 'center 42%'),
      workArtwork('WhatsApp Image 2026-10-10 at 7.20.22 PM (2).jpeg', 'Artwork detail on paper', 'center 58%')
    ]
  },
  {
    id: 'watercolor',
    color: 'Moss',
    slug: 'watercolor',
    pigment: '#78805b',
    artworks: [
      workArtwork('WhatsApp Image 2026-10-10 at 7.20.23 PM (3).jpeg', 'Artwork on paper', 'center 40%'),
      workArtwork('WhatsApp Image 2026-10-10 at 7.20.23 PM (5).jpeg', 'Artwork detail on paper', 'center 60%')
    ]
  },
  {
    id: 'ink-watercolor',
    color: 'Terracotta',
    slug: 'ink-and-watercolor',
    pigment: '#aa684e',
    artworks: [
      workArtwork('WhatsApp Image 2026-10-10 at 7.20.23 PM (8).jpeg', 'Artwork on paper', 'center 45%'),
      workArtwork('WhatsApp Image 2026-10-10 at 7.20.23 PM (7).jpeg', 'Artwork detail on paper', 'center 55%')
    ]
  },
  {
    id: 'acrylic',
    color: 'Ochre',
    slug: 'acrylic',
    pigment: '#bf914d',
    artworks: [
      workArtwork('WhatsApp Image 2026-10-10 at 7.20.24 PM (6).jpeg', 'Artwork on paper', 'center 44%'),
      workArtwork('WhatsApp Image 2026-10-10 at 7.20.24 PM (5).jpeg', 'Artwork detail on paper', 'center 58%')
    ]
  },
  {
    id: 'sketches-doodles',
    color: 'Rose',
    slug: 'sketches-and-doodles',
    pigment: '#aa7479',
    artworks: [
      workArtwork('WhatsApp Image 2026-10-10 at 7.20.24 PM (7).jpeg', 'Artwork on paper', 'center 40%'),
      workArtwork('WhatsApp Image 2026-10-10 at 7.20.25 PM (1).jpeg', 'Artwork detail on paper', 'center 62%')
    ]
  },
  {
    id: 'other-creations',
    color: 'Plum',
    slug: 'other-creations',
    pigment: '#806b80',
    artworks: [
      workArtwork('WhatsApp Image 2026-10-10 at 7.20.26 PM (9).jpeg', 'Artwork on paper', 'center 42%'),
      workArtwork('WhatsApp Image 2026-10-10 at 7.20.26 PM (5).jpeg', 'Artwork detail on paper', 'center 60%')
    ]
  }
]

export const sketchbookPages: PortfolioImage[] = [
  { src: artworkPath('WhatsApp Image 2026-10-10 at 7.20.23 PM (1).jpeg'), alt: 'Sketchbook drawing' },
  { src: artworkPath('WhatsApp Image 2026-10-10 at 7.20.23 PM (2).jpeg'), alt: 'Sketchbook drawing' },
  { src: artworkPath('WhatsApp Image 2026-10-10 at 7.20.23 PM (3).jpeg'), alt: 'Sketchbook drawing' },
  { src: artworkPath('WhatsApp Image 2026-10-10 at 7.20.23 PM (4).jpeg'), alt: 'Sketchbook drawing' },
  { src: artworkPath('WhatsApp Image 2026-10-10 at 7.20.23 PM (5).jpeg'), alt: 'Sketchbook drawing' }
]

export const daybookEntries: DaybookEntry[] = [
  { src: artworkPath('WhatsApp Image 2026-10-10 at 8.19.14 PM.jpeg'), alt: 'Daybook photograph 1' },
  { src: artworkPath('WhatsApp Image 2026-10-10 at 8.19.42 PM.jpeg'), alt: 'Daybook photograph 2' },
  { src: artworkPath('WhatsApp Image 2026-10-10 at 8.15.58 PM.jpeg'), alt: 'Daybook photograph 3' }
]
