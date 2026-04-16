import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
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
    </nav>
  )
}
