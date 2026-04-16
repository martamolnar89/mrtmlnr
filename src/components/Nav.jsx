import { useEffect, useState } from 'react'
import { useLang } from './LangContext'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, t, toggle } = useLang()

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
          <li><a href="#portfolio">{t.nav.portfolio}</a></li>
          <li><a href="#about">{t.nav.about}</a></li>
          <li><a href="#services">{t.nav.services}</a></li>
          <li><a href="#contact-form">{t.nav.contact}</a></li>
          <li>
            <button className="lang-toggle" onClick={toggle}>
              {lang === 'hu' ? 'EN' : 'HU'}
            </button>
          </li>
        </ul>
        <div className="nav-right-mobile">
          <button className="lang-toggle" onClick={toggle}>
            {lang === 'hu' ? 'EN' : 'HU'}
          </button>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' active' : ''}`}>
        <ul>
          <li><a href="#portfolio" onClick={close}>{t.nav.portfolio}</a></li>
          <li><a href="#about" onClick={close}>{t.nav.about}</a></li>
          <li><a href="#services" onClick={close}>{t.nav.services}</a></li>
          <li><a href="#contact-form" onClick={close}>{t.nav.contact}</a></li>
        </ul>
      </div>
    </>
  )
}
