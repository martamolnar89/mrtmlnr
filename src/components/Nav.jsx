import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav style={{ padding: scrolled ? '1rem 3rem' : '1.75rem 3rem' }}>
        <div className="logo">
          mrtmlnr photography
        </div>
        <ul className="nav-links">
          <li><a href="#portfolio">Portfólió</a></li>
          <li><a href="#about">Rólam</a></li>
          <li><a href="#services">Szolgáltatások</a></li>
          <li><a href="#contact-form">Kapcsolat</a></li>
        </ul>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' active' : ''}`}>
        <ul>
          <li><a href="#portfolio" onClick={close}>Portfólió</a></li>
          <li><a href="#about" onClick={close}>Rólam</a></li>
          <li><a href="#services" onClick={close}>Szolgáltatások</a></li>
          <li><a href="#contact-form" onClick={close}>Kapcsolat</a></li>
        </ul>
      </div>
    </>
  )
}
