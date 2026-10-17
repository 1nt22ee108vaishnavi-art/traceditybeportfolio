import React, { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import CustomCreationsForm from '../components/CustomCreationsForm'
import { contactEmail, customCreationsIntro, gmailLink, instagramHandle, instagramLink } from '../data/portfolio'
import './menu.css'

// The first screen: a still of my world at night, like a game paused at its title, with three
// choices. Enter my world, Custom Creations (its own screen, at /custom-creations) or Contact (a
// small panel). The 3D world itself loads only once someone chooses to enter.

const loadWorld = () => import('../world/WorldPage')

export default function MainMenu(){
  const navigate = useNavigate()
  const custom = useLocation().pathname === '/custom-creations'
  const [contactOpen, setContactOpen] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const menuRef = useRef<HTMLElement>(null)
  const contactButton = useRef<HTMLButtonElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const reducedMotion = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches).current

  // Entering fades to dark, then the world takes over. It starts loading as soon as the choice is
  // pointed at, so it is usually ready by then.
  function enter(){
    loadWorld()
    if (reducedMotion){ navigate('/world'); return }
    setLeaving(true)
    window.setTimeout(() => navigate('/world'), 520)
  }

  function closeContact(){
    setContactOpen(false)
    contactButton.current?.focus()
  }

  useEffect(() => { if (contactOpen) closeButton.current?.focus() }, [contactOpen])
  useEffect(() => { document.title = custom ? 'Custom Creations · traced.it.bye' : 'traced.it.bye · A world of my own making' }, [custom])

  // Up and down move between the choices, as in a game menu; Escape closes the contact panel.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && contactOpen){ closeContact(); return }
      if (custom || contactOpen || (event.key !== 'ArrowDown' && event.key !== 'ArrowUp')) return
      const choices = Array.from(menuRef.current?.querySelectorAll<HTMLButtonElement>('.menu-choice') ?? [])
      if (!choices.length) return
      event.preventDefault()
      const at = choices.indexOf(document.activeElement as HTMLButtonElement)
      const next = at < 0 ? 0 : (at + (event.key === 'ArrowDown' ? 1 : -1) + choices.length) % choices.length
      choices[next].focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [contactOpen, custom])

  return (
    <div className={`menu-screen${custom ? ' is-custom' : ''}${leaving ? ' is-leaving' : ''}`}>
      <picture className="menu-backdrop">
        <source media="(max-aspect-ratio: 4/5)" srcSet="/assets/menu/world-night-portrait.webp" />
        <img src="/assets/menu/world-night.webp" alt="My painted world at night: lanterns glowing over the wooden deck, my cat asleep in its bed, and me out on the jetty under the stars." />
      </picture>
      <div className="menu-shade" aria-hidden="true" />

      {!custom && (
        <main className="menu-title-screen" aria-hidden={contactOpen || undefined}>
          <header className="menu-title">
            <span className="menu-eyebrow">traced.it.bye</span>
            <h1>A world of <em>my own making</em></h1>
          </header>
          <nav className="menu-choices" aria-label="Main menu" ref={menuRef}>
            <button type="button" className="menu-choice is-primary" onClick={enter} onPointerEnter={loadWorld} onFocus={loadWorld}>Enter my world</button>
            <button type="button" className="menu-choice" onClick={() => navigate('/custom-creations')}>Custom Creations</button>
            <button type="button" className="menu-choice" ref={contactButton} onClick={() => setContactOpen(true)}>Contact</button>
          </nav>
        </main>
      )}

      {contactOpen && (
        <div className="menu-overlay" onClick={closeContact}>
          <section className="menu-contact" role="dialog" aria-modal="true" aria-labelledby="menu-contact-title" onClick={event => event.stopPropagation()}>
            <button type="button" className="menu-close" ref={closeButton} onClick={closeContact} aria-label="Close contact and return to the menu"><X size={18} aria-hidden="true" /></button>
            <h2 id="menu-contact-title">Contact</h2>
            <p>For a question, a collaboration, or just to say hi.</p>
            <a href={gmailLink} target="_blank" rel="noreferrer"><span>Email</span>{contactEmail} <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a href={instagramLink} target="_blank" rel="noreferrer"><span>Instagram</span>@{instagramHandle} <ArrowUpRight size={15} aria-hidden="true" /></a>
          </section>
        </div>
      )}

      {custom && (
        <div className="menu-sheet-frame">
          <main className="menu-sheet light-section" aria-labelledby="menu-custom-title">
            <button type="button" className="menu-back" onClick={() => navigate('/')}><ArrowLeft size={15} aria-hidden="true" /> Main menu</button>
            <div className="custom-intro">
              <h1 id="menu-custom-title">Custom Creations</h1>
              <p>{customCreationsIntro}</p>
              <a className="text-link" href={gmailLink} target="_blank" rel="noreferrer">Prefer a direct note? Email me <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
            <CustomCreationsForm />
          </main>
        </div>
      )}
    </div>
  )
}
