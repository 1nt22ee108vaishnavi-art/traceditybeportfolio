import React, { FormEvent, useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { portfolioImages, workCategories, type PortfolioImage } from '../data/portfolio'
import SketchbookFlipbook from '../components/SketchbookFlipbook'
import DaybookPhoto from '../components/DaybookPhoto'
import ScrollSunlight from '../components/ScrollSunlight'

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
  function prepareCreationEmail(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const details = [
      `What would you like me to create?\n${formData.get('idea') || ''}`,
      `Preferred medium\n${formData.get('medium') || ''}`,
      `Colours, size, occasion, references, and other details\n${formData.get('details') || ''}`,
      `Budget\n${formData.get('budget') || ''}`,
      `Deadline\n${formData.get('deadline') || ''}`,
      `Name\n${formData.get('name') || ''}`,
      `Preferred contact details\n${formData.get('contact') || ''}`
    ].join('\n')
    const mailto = `mailto:vonthegoo@gmail.com?subject=${encodeURIComponent('Custom creation idea')}&body=${encodeURIComponent(details)}`
    window.location.href = mailto
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
            <a
              className={`palette-item palette-item-${index + 1}`}
              href={`/work/${category.slug}`}
              target="_blank"
              rel="noreferrer"
              key={category.id}
              style={{ '--pigment': category.pigment } as React.CSSProperties}
              aria-label={`Open the ${category.color} collection in a new tab`}
            >
              <span className="palette-dab" aria-hidden="true" />
            </a>
          ))}
        </div>
        <span className="folio-mark">Page 03 — Work</span>
      </section>

      <section className="sketchbook-section page-section light-section" id="sketchbook">
        <SectionHeading title="Sketchbook" />
        <SketchbookFlipbook />
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
          <SectionHeading title="Custom Creations" note="Have an idea in mind? Let's make something." />
          <p>I work across drawing, painting, illustration, and other handmade creations. Tell me what you're imagining, even if it doesn't fit a category.</p>
          <a className="text-link" href="mailto:vonthegoo@gmail.com">Prefer a direct note? Email me <ArrowUpRight size={15} /></a>
        </div>
        <form className="order-form" onSubmit={prepareCreationEmail}>
          <label className="form-wide">What would you like me to create?<textarea name="idea" rows={3} placeholder="Tell me about the idea that's been on your mind…" /></label>
          <label>Preferred medium, optional<input name="medium" placeholder="Drawing, painting, illustration, or something else" /></label>
          <label>Budget, optional<input name="budget" type="text" inputMode="decimal" placeholder="Your comfortable range" /></label>
          <label className="form-wide">Colours, size, occasion, references, and other details, optional<textarea name="details" rows={3} placeholder="Add any details or reference links you'd like to share" /></label>
          <label>Deadline, optional<input name="deadline" type="text" placeholder="A date or approximate timing" /></label>
          <label>Name, optional<input name="name" autoComplete="name" /></label>
          <label className="form-wide">Preferred contact details, optional<input name="contact" type="text" placeholder="Email, phone, or Instagram" /></label>
          <div className="form-wide">
            <button className="button button-dark" type="submit">Let's make something <ArrowUpRight size={16} /></button>
            <p className="form-disclaimer">This opens a prepared email in your email app. Nothing is sent until you choose to send it.</p>
          </div>
        </form>
        <span className="folio-mark">Page 05 — Custom Creations</span>
      </section>

      <section className="contact-section page-section light-section" id="contact">
        <div className="contact-copy">
          <SectionHeading eyebrow="Say hello" title="Contact" note="For a question, a collaboration, or just to say hi." />
          <div className="contact-links">
            <a href="mailto:vonthegoo@gmail.com">vonthegoo@gmail.com <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href="https://instagram.com/traced.it.bye" target="_blank" rel="noreferrer">@traced.it.bye on Instagram <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="contact-qr" aria-label="Instagram QR code placeholder">
            <span>Instagram QR</span>
            <div>QR<br />placeholder</div>
          </div>
        </div>
        <span className="folio-mark">Page 06 — Contact</span>
      </section>
    </div>
  )
}
