import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { workCategories, type PortfolioImage } from '../data/portfolio'
import { useState } from 'react'

function ArtworkImage({ image, index }: { image: PortfolioImage; index: number }){
  const [failed, setFailed] = useState(false)

  if (failed) return null

  return (
    <div className={`image-slot paper-image category-artwork category-artwork-${index + 1}`}>
      <img
        src={image.src}
        alt={image.alt}
        style={{ objectPosition: image.position || 'center' }}
        onError={() => setFailed(true)}
      />
    </div>
  )
}

export default function CategoryPage(){
  const { slug } = useParams()
  const category = workCategories.find(item => item.slug === slug)

  if (!category) {
    return (
      <section className="category-section page-section">
        <div className="category-not-found">
          <span className="eyebrow">A page misplaced</span>
          <h1>This collection isn't here.</h1>
          <Link className="text-link" to="/#work"><ArrowLeft size={15} /> Return to Work</Link>
        </div>
      </section>
    )
  }

  return (
    <section className={`category-section page-section category-section-${category.id}`} aria-label={`${category.color} artwork`}>
      <Link className="text-link category-back" to="/#work"><ArrowLeft size={15} /> Back to Work</Link>
      <div className="category-artworks">
        {category.artworks.map((image, index) => (
          <ArtworkImage key={image.src} image={image} index={index} />
        ))}
      </div>
    </section>
  )
}
