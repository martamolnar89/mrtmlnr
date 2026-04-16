import { LangProvider } from './components/LangContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <Nav />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </LangProvider>
  )
}
