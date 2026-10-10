import React, { MouseEvent, useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

const navigation = [
  { id: 'about', label: 'About Me' },
  { id: 'work', label: 'Work' },
  { id: 'sketchbook', label: 'Sketchbook' },
  { id: 'daybook', label: 'Daybook' },
  { id: 'custom-creations', label: 'Custom Creations' },
  { id: 'contact', label: 'Contact' }
]
export default function Header(){
  const location = useLocation()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navigation
      .map(item => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(entries => {
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visibleSections[0]) setActiveSection(visibleSections[0].target.id)
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.1, 0.25, 0.5] })

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname])

  function closeMenu(){
    setMenuOpen(false)
  }

  function navigateToSection(event: MouseEvent<HTMLAnchorElement>, section: string){
    event.preventDefault()
    closeMenu()

    const target = document.getElementById(section)
    if (!target) {
      console.error(`Navigation target not found: #${section}`)
      return
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setActiveSection(section)
    window.history.pushState(null, '', `#${section}`)
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <a className="wordmark" href="#top" onClick={closeMenu}>A world of my own making</a>
          <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            {navigation.map(item => (
              <a
                key={item.id}
                href={item.id === 'daybook' ? '/daybook' : location.pathname === '/' ? `#${item.id}` : `/#${item.id}`}
                aria-current={(item.id === 'daybook' && location.pathname === '/daybook') || activeSection === item.id ? 'location' : undefined}
                onClick={event => {
                  if (item.id === 'daybook') {
                    event.preventDefault()
                    closeMenu()
                    navigate('/daybook')
                  } else if (location.pathname === '/') navigateToSection(event, item.id)
                  else {
                    event.preventDefault()
                    closeMenu()
                    navigate(`/#${item.id}`)
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(open => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>
    </>
  )
}
