import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import menuImage from '../../assets/Navbar/bg.png'
import menuVector from '../../assets/Navbar/Vector.svg'
import './Navbar.css'

const menuLinks = [
  { label: 'HOME', to: '/', match: (pathname: string) => pathname === '/' },
  { label: 'ABOUT US', to: '/about', match: (pathname: string) => pathname === '/about' },
  {
    label: 'PACKAGES',
    to: '/packages',
    match: (pathname: string) => pathname.startsWith('/packages'),
  },
  { label: 'FAQ', to: '/faq', match: (pathname: string) => pathname === '/faq' },
  { label: 'CONTACT US', to: '/contact', match: (pathname: string) => pathname === '/contact' },
]

function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname, location.search, location.hash])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <nav className={`navbar ${isOpen ? 'navbar--open' : ''}`} aria-label="Main navigation">
      <div className="navbar__bar">
        <div className="navbar__menu">
          <button
            className="navbar__menu-button"
            type="button"
            aria-expanded={isOpen}
            aria-controls="navbar-overlay"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((previousState) => !previousState)}
          >
            <span className="navbar__menu-icon" aria-hidden="true">
              <span className="navbar__menu-line navbar__menu-line--top" />
              <span className="navbar__menu-line navbar__menu-line--middle" />
              <span className="navbar__menu-line navbar__menu-line--bottom" />
            </span>

            <span className="navbar__menu-copy" aria-hidden="true">
              <span className="navbar__menu-label navbar__menu-label--closed">Menu</span>
              <span className="navbar__menu-label navbar__menu-label--open">Close</span>
            </span>
          </button>
        </div>

        <Link
          className="navbar__brand"
          to="/"
          aria-label="Spiritual Escape Adventure home"
          onClick={() => setIsOpen(false)}
        >
          <img
            className="navbar__brand-logo"
            src="/logo.png"
            alt="Spiritual Escape Adventure"
            decoding="async"
          />
        </Link>

        <Link className="navbar__contact" to="/contact" onClick={() => setIsOpen(false)}>
          Contact Us
        </Link>
      </div>

      <div
        id="navbar-overlay"
        className="navbar__overlay"
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      >
        <div className="navbar__overlay-grid" onClick={(event) => event.stopPropagation()}>
          {isOpen ? (
            <img
              className="navbar__overlay-vector"
              src={menuVector}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
          ) : null}
          <div className="navbar__overlay-left">
            <div className="navbar__overlay-links">
              {menuLinks.map((link) => (
                <Link
                  key={`${link.label}-${link.to}`}
                  className={`navbar__overlay-link ${
                    link.match(location.pathname) ? 'navbar__overlay-link--active' : ''
                  }`}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="navbar__overlay-meta">
              <div className="navbar__overlay-meta-row">
                <span>Call us:</span>
                <a href="https://wa.me/97517123456" target="_blank" rel="noopener noreferrer">
                  +975 17 50 86 68
                </a>
              </div>

              <div className="navbar__overlay-meta-row">
                <span>Connect:</span>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="navbar__overlay-right">
            <div className="navbar__overlay-image-frame">
              {isOpen ? (
                <img
                  src={menuImage}
                  alt="Monks gathered near a Bhutanese temple"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
