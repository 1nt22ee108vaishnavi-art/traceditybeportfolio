import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

const navigation = [
  { id: 'about', label: 'About Me' },
  { id: 'work', label: 'Work' },
  { id: 'sketchbook', label: 'Sketchbook' },
  { id: 'custom-creations', label: 'Custom Creations' },
  { id: 'contact', label: 'Contact' }
]
export default function Header(){
  const location = useLocation()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const [bloom, setBloom] = useState<{ key: number; section: string } | null>(null)
  const bloomSequence = useRef(0)
  const bloomTimeout = useRef<number | null>(null)

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

  useEffect(() => () => {
    if (bloomTimeout.current !== null) window.clearTimeout(bloomTimeout.current)
  }, [])

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

    if (bloomTimeout.current !== null) window.clearTimeout(bloomTimeout.current)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setActiveSection(section)
    window.history.pushState(null, '', `#${section}`)
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })

    if (reducedMotion) {
      setBloom(null)
      return
    }

    setBloom({ key: ++bloomSequence.current, section })
    bloomTimeout.current = window.setTimeout(() => setBloom(null), 1500)
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
                href={location.pathname === '/' ? `#${item.id}` : `/#${item.id}`}
                aria-current={activeSection === item.id ? 'location' : undefined}
                onClick={event => {
                  if (location.pathname === '/') navigateToSection(event, item.id)
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
      {bloom && (
        <div key={bloom.key} className={`watercolor-bloom watercolor-bloom--${bloom.section}`} aria-hidden="true">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="watercolor-edge" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency=".012" numOctaves="2" seed="13" result="pigmentGrain" />
                <feDisplacementMap in="SourceGraphic" in2="pigmentGrain" scale="24" xChannelSelector="R" yChannelSelector="G" result="irregularEdge" />
                <feGaussianBlur in="irregularEdge" stdDeviation="1.6" />
              </filter>
            </defs>
            <g className="watercolor-bloom__wash">
              <path d="M492 55 C548 32 580 69 626 83 C674 98 702 68 741 99 C779 129 770 169 813 198 C853 225 905 221 928 269 C949 314 914 349 937 394 C959 438 1004 463 988 510 C973 555 925 566 916 612 C907 659 939 701 906 740 C875 777 828 754 791 787 C750 824 753 876 708 894 C659 914 622 873 574 889 C525 906 496 954 447 940 C400 927 389 878 343 859 C297 840 246 866 210 831 C174 797 197 749 164 711 C131 674 79 667 65 619 C52 573 91 540 79 493 C68 446 22 409 43 363 C63 319 113 315 137 273 C162 230 148 179 187 147 C226 116 270 144 315 124 C360 103 392 62 438 75 C459 81 473 69 492 55 Z" />
              <path d="M139 330 C175 289 209 304 230 331 C251 359 233 389 204 402 C173 414 128 390 139 330 Z" />
              <path d="M762 574 C799 547 842 562 850 593 C858 624 831 648 799 642 C766 636 740 603 762 574 Z" />
              <path d="M343 807 C366 775 402 781 415 808 C427 833 407 859 378 858 C350 857 328 831 343 807 Z" />
            </g>
          </svg>
        </div>
      )}
    </>
  )
}
