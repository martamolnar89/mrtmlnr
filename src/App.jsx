import { useState, useEffect } from 'react'
import { LangProvider } from './components/LangContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Services from './components/Services'
import Divider from './components/Divider'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import GalleryPage from './components/GalleryPage'

function getPage() {
  return window.location.pathname === '/galeria' ? 'gallery' : 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const onPop = () => setPage(getPage())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href]')
      if (!a) return
      const href = a.getAttribute('href')

      if (href === '/galeria') {
        e.preventDefault()
        window.history.pushState(null, '', '/galeria')
        setPage('gallery')
        window.scrollTo(0, 0)
      } else if (href === '/') {
        e.preventDefault()
        window.history.pushState(null, '', '/')
        setPage('home')
        window.scrollTo(0, 0)
      } else if (href.startsWith('#') && page !== 'home') {
        e.preventDefault()
        window.history.pushState(null, '', '/')
        setPage('home')
        setTimeout(() => {
          const el = document.querySelector(href)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 50)
      } else if (href.startsWith('#')) {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [page])

  return (
    <LangProvider>
      <Nav page={page} />
      {page === 'gallery' ? (
        <GalleryPage />
      ) : (
        <>
          <Hero />
          <Portfolio />
          <About />
          <Services />
          <Divider />
          <Pricing />
          <Testimonials />
          <ContactForm />
        </>
      )}
      <Footer />
    </LangProvider>
  )
}
