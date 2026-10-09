export type PortfolioImage = {
  src: string
  alt: string
  position?: string
}

export type WorkCategory = {
  id: string
  name: string
  slug: string
  pigment: string
  thumbnail: PortfolioImage
  artworks: PortfolioImage[]
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
  sketchbookFeature: {
    src: '/assets/portfolio/sketchbook/sketchbook-feature.jpg',
    alt: 'Sketchbook artwork in progress',
    position: 'center center'
  }
} satisfies Record<string, PortfolioImage>

// Change each pigment colour and image path here; category URLs use the slug.
export const workCategories: WorkCategory[] = [
  {
    id: 'charcoal',
    name: 'Charcoal',
    slug: 'charcoal',
    pigment: '#45413d',
    thumbnail: { src: '/assets/portfolio/categories/charcoal/thumbnail.jpg', alt: 'Charcoal artwork thumbnail' },
    artworks: [
      { src: '/assets/portfolio/categories/charcoal/01.jpg', alt: 'Charcoal artwork', position: 'center 42%' },
      { src: '/assets/portfolio/categories/charcoal/02.jpg', alt: 'Charcoal drawing detail', position: 'center 58%' }
    ]
  },
  {
    id: 'watercolor',
    name: 'Watercolor',
    slug: 'watercolor',
    pigment: '#7b9eae',
    thumbnail: { src: '/assets/portfolio/categories/watercolor/thumbnail.jpg', alt: 'Watercolor artwork thumbnail' },
    artworks: [
      { src: '/assets/portfolio/categories/watercolor/01.jpg', alt: 'Watercolor artwork', position: 'center 40%' },
      { src: '/assets/portfolio/categories/watercolor/02.jpg', alt: 'Watercolor painting detail', position: 'center 60%' }
    ]
  },
  {
    id: 'ink-watercolor',
    name: 'Ink and Watercolor',
    slug: 'ink-and-watercolor',
    pigment: '#9a6553',
    thumbnail: { src: '/assets/portfolio/categories/ink-and-watercolor/thumbnail.jpg', alt: 'Ink and watercolor artwork thumbnail' },
    artworks: [
      { src: '/assets/portfolio/categories/ink-and-watercolor/01.jpg', alt: 'Ink and watercolor artwork', position: 'center 45%' },
      { src: '/assets/portfolio/categories/ink-and-watercolor/02.jpg', alt: 'Ink and watercolor detail', position: 'center 55%' }
    ]
  },
  {
    id: 'acrylic',
    name: 'Acrylic',
    slug: 'acrylic',
    pigment: '#bd8650',
    thumbnail: { src: '/assets/portfolio/categories/acrylic/thumbnail.jpg', alt: 'Acrylic artwork thumbnail' },
    artworks: [
      { src: '/assets/portfolio/categories/acrylic/01.jpg', alt: 'Acrylic artwork', position: 'center 44%' },
      { src: '/assets/portfolio/categories/acrylic/02.jpg', alt: 'Acrylic painting detail', position: 'center 58%' }
    ]
  },
  {
    id: 'sketches-doodles',
    name: 'Sketches and Doodles',
    slug: 'sketches-and-doodles',
    pigment: '#a88b62',
    thumbnail: { src: '/assets/portfolio/categories/sketches-and-doodles/thumbnail.jpg', alt: 'Sketchbook thumbnail' },
    artworks: [
      { src: '/assets/portfolio/categories/sketches-and-doodles/01.jpg', alt: 'Sketchbook drawing', position: 'center 40%' },
      { src: '/assets/portfolio/categories/sketches-and-doodles/02.jpg', alt: 'Doodle detail', position: 'center 62%' }
    ]
  },
  {
    id: 'other-creations',
    name: 'Other Creations',
    slug: 'other-creations',
    pigment: '#9c7774',
    thumbnail: { src: '/assets/portfolio/categories/other-creations/thumbnail.jpg', alt: 'Mixed media artwork thumbnail' },
    artworks: [
      { src: '/assets/portfolio/categories/other-creations/01.jpg', alt: 'Mixed media creation', position: 'center 42%' },
      { src: '/assets/portfolio/categories/other-creations/02.jpg', alt: 'Handmade artwork detail', position: 'center 60%' }
    ]
  }
]
