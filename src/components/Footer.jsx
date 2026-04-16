import data from '../data/portfolio.json'
import { useLang } from './LangContext'

export default function Footer() {
  const { contact } = data
  const { t } = useLang()

  return (
    <footer id="contact">
      <div>
        <h4>mrtmlnr photography</h4>
        <p>{t.location}</p>
        <p>{contact.email}</p>
      </div>
      <div>
        <h4>{t.footer.menu}</h4>
        <a href="#portfolio">{t.nav.portfolio}</a>
        <a href="#about">{t.nav.about}</a>
        <a href="#services">{t.nav.services}</a>
        <a href="#contact-form">{t.nav.contact}</a>
      </div>
      <div>
        <h4>{t.footer.follow}</h4>
        {contact.instagram && <a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
        {contact.facebook && <a href={contact.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>}
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 mrtmlnr photography</span>
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  )
}
