import React, { useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { contactEmail, customCreationsIntro, gmailLink, instagramHandle, instagramLink, portfolioImages, workCategories, type PortfolioImage } from '../data/portfolio'
import CustomCreationsForm from '../components/CustomCreationsForm'
import DaybookPhoto from '../components/DaybookPhoto'
import ScrollSunlight from '../components/ScrollSunlight'
import PaintedEyes from '../components/PaintedEyes'

function ImageSlot({
  image,
  className = ''
}: {
  image: PortfolioImage
  className?: string
}){
  const [failed, setFailed] = useState(false)

  return (
    <div className={`image-slot paper-image ${failed ? 'is-missing' : ''} ${className}`}>
      {!failed && (
        <img
          src={image.src}
          alt={image.alt}
          data-preview
          tabIndex={0}
          role="button"
          aria-label={`Preview ${image.alt}`}
          style={{ objectPosition: image.position || 'center' }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

function SectionHeading({ eyebrow, title, note }: { eyebrow?: string; title: string; note?: string }){
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </div>
  )
}

export default function Home(){
  // The pigment of the flower being hovered, reflected in the painted eyes.
  const [eyeTint, setEyeTint] = useState<string | null>(null)
  const [blinkSignal, setBlinkSignal] = useState(0)
  const navigate = useNavigate()

  // Choosing a flower makes the eyes blink before its collection opens.
  function selectFlower(event: React.MouseEvent<HTMLAnchorElement>, slug: string){
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    event.preventDefault()
    setBlinkSignal(count => count + 1)
    window.setTimeout(() => navigate(`/work/${slug}`), 420)
  }

  return (
    <div className="notebook-content" id="top">
      <section className="hero-section page-section" id="hero" aria-labelledby="hero-title">
        <ScrollSunlight />
        <div className="hero-copy">
          <h1 id="hero-title">A world of<br /><em>my own making.</em></h1>
          <p>Art, objects, experiments &amp; everything in between.</p>
          <a className="text-link hero-link" href="#about">Explore the collection <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
        <figure className="hero-photograph">
          <ImageSlot image={portfolioImages.homePortrait} className="photo-edge photo-edge-one" />
        </figure>
        <span className="folio-mark">01 / A world of my own making</span>
      </section>

      <section className="about-section page-section light-section" id="about">
        <div className="about-layout">
          <div className="about-copy">
            <div className="about-section-title">
              <h2>ABOUT ME</h2>
              <h3>A mind of my own.</h3>
            </div>
            <div className="about-body">
              <p>I'm Vaishnavi, an artist drawn to making things, exploring ideas, and finding inspiration in the little things around me. I work across drawing, painting, and illustration, always curious about what I can create next.</p>
            </div>
          </div>
          <figure className="about-photograph">
            <ImageSlot image={portfolioImages.aboutPortrait} className="photo-edge photo-edge-two" />
          </figure>
        </div>
        <span className="folio-mark">Page 02 — About Me</span>
      </section>

      <section className="work-section page-section" id="work">
        <SectionHeading eyebrow="A gathered collection" title="Work" />
        <div className="artist-palette" aria-label="Explore artwork by colour">
          {workCategories.map((category, index) => (
            <React.Fragment key={category.id}>
              {index === 3 && <PaintedEyes className="palette-eyes" tint={eyeTint} blinkSignal={blinkSignal} />}
              <Link
                className={`palette-item palette-item-${index + 1}`}
                to={`/work/${category.slug}`}
                style={{ '--pigment': category.pigment } as React.CSSProperties}
                aria-label={`Open the ${category.color} collection`}
                onClick={event => selectFlower(event, category.slug)}
                onMouseEnter={() => setEyeTint(category.pigment)}
                onMouseLeave={() => setEyeTint(null)}
                onFocus={() => setEyeTint(category.pigment)}
                onBlur={() => setEyeTint(null)}
              >
                <span className="palette-dab" aria-hidden="true" />
              </Link>
            </React.Fragment>
          ))}
        </div>
        <span className="folio-mark">Page 03 — Work</span>
      </section>


      <section className="daybook-teaser page-section light-section" aria-labelledby="daybook-teaser-title">
        <h2 id="daybook-teaser-title">Daybook</h2>
        <Link className="daybook-teaser-link" to="/daybook" aria-label="Open Daybook">
          <DaybookPhoto
            src={portfolioImages.daybookPreview.src}
            alt={portfolioImages.daybookPreview.alt}
            className="daybook-teaser-photo"
          />
        </Link>
      </section>
      <section className="custom-section page-section light-section" id="custom-creations">
        <div className="custom-intro">
          <SectionHeading title="Custom Creations" />
          <p>{customCreationsIntro}</p>
          <a className="text-link" href={gmailLink} target="_blank" rel="noreferrer">Prefer a direct note? Email me <ArrowUpRight size={15} /></a>
        </div>
        <CustomCreationsForm />
        <span className="folio-mark">Page 05 — Custom Creations</span>
      </section>

      <section className="contact-section page-section light-section" id="contact">
        <div className="contact-copy">
          <SectionHeading eyebrow="Say hello" title="Contact" note="For a question, a collaboration, or just to say hi." />
          <div className="contact-links">
            <a href={gmailLink} target="_blank" rel="noreferrer">{contactEmail} <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href={instagramLink} target="_blank" rel="noreferrer">@{instagramHandle} on Instagram <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <span className="folio-mark">Page 06 — Contact</span>
      </section>
    </div>
  )
}
