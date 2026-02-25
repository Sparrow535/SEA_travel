import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__menu">
        <button className="navbar__menu-button" type="button" aria-label="Open menu">
          <svg
            className="navbar__menu-icon"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path className="navbar__menu-line navbar__menu-line--top" d="M1.5 2H16.5" />
            <path className="navbar__menu-line navbar__menu-line--middle" d="M1.5 8H20.5" />
            <path className="navbar__menu-line navbar__menu-line--bottom" d="M5.5 14H20.5" />
          </svg>
          <span>Menu</span>
        </button>
      </div>

      <a className="navbar__brand" href="/" aria-label="Spiritual Escape Adventure home">
        <img className="navbar__brand-logo" src="/logo.png" alt="Spiritual Escape Adventure" />
      </a>

      <a className="navbar__contact" href="#contact">
        Contact Us
      </a>
    </nav>
  )
}

export default Navbar
