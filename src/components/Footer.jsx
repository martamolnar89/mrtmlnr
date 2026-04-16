import data from '../data/portfolio.json'

export default function Footer() {
  const { contact } = data

  return (
    <footer id="contact">
      <div>
        <h4>mrtmlnr photography</h4>
        <p>{contact.location}</p>
        <p>{contact.email}</p>
      </div>
      <div>
        <h4>Menü</h4>
        <a href="#portfolio">Portfólió</a>
        <a href="#about">Rólam</a>
        <a href="#services">Szolgáltatások</a>
        <a href="#contact">Kapcsolat</a>
      </div>
      <div>
        <h4>Követés</h4>
        {contact.instagram && <a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
        {contact.facebook && <a href={contact.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>}
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 mrtmlnr photography</span>
        <span>Minden jog fenntartva</span>
      </div>
    </footer>
  )
}
