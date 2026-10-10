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

// Replace these local paths with your photos and artwork in public/assets/portfolio.
export const portfolioImages = {
  homePortrait: {
    src: '/assets/portfolio/portraits/home-portrait.jpg',
    alt: 'Artist portrait',
    position: 'center 38%'
  },
  aboutPortrait: {
    src: '/assets/portfolio/portraits/about-portrait.jpg',
    alt: 'Photograph of the artist',
    position: 'center 42%'
  },
  daybookPreview: {
    src: '/assets/portfolio/daybook/01.jpg',
    alt: 'Daybook photograph preview'
  }
} satisfies Record<string, PortfolioImage>

// Change each colour, pigment, and image path here; existing collection URLs use the slug.
export const workCategories: WorkCategory[] = [
  {
    id: 'charcoal',
    color: 'Cobalt',
    slug: 'charcoal',
    pigment: '#47677b',
    artworks: [
      { src: '/assets/portfolio/categories/charcoal/01.jpg', alt: 'Artwork on paper', position: 'center 42%' },
      { src: '/assets/portfolio/categories/charcoal/02.jpg', alt: 'Artwork detail on paper', position: 'center 58%' }
    ]
  },
  {
    id: 'watercolor',
    color: 'Moss',
    slug: 'watercolor',
    pigment: '#78805b',
    artworks: [
      { src: '/assets/portfolio/categories/watercolor/01.jpg', alt: 'Artwork on paper', position: 'center 40%' },
      { src: '/assets/portfolio/categories/watercolor/02.jpg', alt: 'Artwork detail on paper', position: 'center 60%' }
    ]
  },
  {
    id: 'ink-watercolor',
    color: 'Terracotta',
    slug: 'ink-and-watercolor',
    pigment: '#aa684e',
    artworks: [
      { src: '/assets/portfolio/categories/ink-and-watercolor/01.jpg', alt: 'Artwork on paper', position: 'center 45%' },
      { src: '/assets/portfolio/categories/ink-and-watercolor/02.jpg', alt: 'Artwork detail on paper', position: 'center 55%' }
    ]
  },
  {
    id: 'acrylic',
    color: 'Ochre',
    slug: 'acrylic',
    pigment: '#bf914d',
    artworks: [
      { src: '/assets/portfolio/categories/acrylic/01.jpg', alt: 'Artwork on paper', position: 'center 44%' },
      { src: '/assets/portfolio/categories/acrylic/02.jpg', alt: 'Artwork detail on paper', position: 'center 58%' }
    ]
  },
  {
    id: 'sketches-doodles',
    color: 'Rose',
    slug: 'sketches-and-doodles',
    pigment: '#aa7479',
    artworks: [
      { src: '/assets/portfolio/categories/sketches-and-doodles/01.jpg', alt: 'Artwork on paper', position: 'center 40%' },
      { src: '/assets/portfolio/categories/sketches-and-doodles/02.jpg', alt: 'Artwork detail on paper', position: 'center 62%' }
    ]
  },
  {
    id: 'other-creations',
    color: 'Plum',
    slug: 'other-creations',
    pigment: '#806b80',
    artworks: [
      { src: '/assets/portfolio/categories/other-creations/01.jpg', alt: 'Artwork on paper', position: 'center 42%' },
      { src: '/assets/portfolio/categories/other-creations/02.jpg', alt: 'Artwork detail on paper', position: 'center 60%' }
    ]
  }
]

// Add or replace local drawings in public/assets/portfolio/sketchbook.
export const sketchbookPages: PortfolioImage[] = [
  { src: '/assets/portfolio/sketchbook/sheet-01.jpg', alt: 'Sketchbook drawing' },
  { src: '/assets/portfolio/sketchbook/sheet-02.jpg', alt: 'Sketchbook drawing' },
  { src: '/assets/portfolio/sketchbook/sheet-03.jpg', alt: 'Sketchbook drawing' },
  { src: '/assets/portfolio/sketchbook/sheet-04.jpg', alt: 'Sketchbook drawing' }
]

// Replace or extend these local photographs in public/assets/portfolio/daybook.
export const daybookEntries: DaybookEntry[] = [
  { src: '/assets/portfolio/daybook/01.jpg', alt: 'Daybook photograph 1' },
  { src: '/assets/portfolio/daybook/02.jpg', alt: 'Daybook photograph 2' },
  { src: '/assets/portfolio/daybook/03.jpg', alt: 'Daybook photograph 3' },
  { src: '/assets/portfolio/daybook/04.jpg', alt: 'Daybook photograph 4' },
  { src: '/assets/portfolio/daybook/05.jpg', alt: 'Daybook photograph 5' },
  { src: '/assets/portfolio/daybook/06.jpg', alt: 'Daybook photograph 6' },
  { src: '/assets/portfolio/daybook/07.jpg', alt: 'Daybook photograph 7' },
  { src: '/assets/portfolio/daybook/08.jpg', alt: 'Daybook photograph 8' }
]
