import { useState } from 'react'
import useReveal from './useReveal'

export default function ContactForm() {
  const reveal = useReveal()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact-form" className="contact-form-section">
      <div ref={reveal.ref} className={reveal.className}>
        <div className="section-header">
          <div>
            <span className="section-number">— 05 / Kapcsolat</span>
            <h2 className="section-title">Dolgozzunk együtt</h2>
          </div>
        </div>

        <div className="contact-form-wrap">
          <p className="contact-form-intro">
            Írj néhány sort a projektedről — 48 órán belül válaszolok.
          </p>

          {status === 'success' ? (
            <div className="contact-success">
              Köszönöm az üzeneted! Hamarosan jelentkezem.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="hidden" name="access_key" value="3fe6b3a0-9a07-4305-a9e8-2540797bd0bc" />
              <input type="hidden" name="subject" value="Új érdeklődés — mrtmlnr photography" />
              <input type="hidden" name="from_name" value="mrtmlnr photography weboldal" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Név</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Milyen fotózás érdekel?</label>
                <select id="service" name="service">
                  <option value="">Válassz...</option>
                  <option value="Esküvő">Esküvő</option>
                  <option value="Jegyes">Jegyes</option>
                  <option value="Családi">Családi</option>
                  <option value="Portré">Portré</option>
                  <option value="Divat">Divat</option>
                  <option value="Egyéb">Egyéb</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Üzenet</label>
                <textarea id="message" name="message" rows="5" required />
              </div>

              <button type="submit" className="form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Küldés...' : 'Üzenet küldése'}
              </button>

              {status === 'error' && (
                <p className="form-error">Hiba történt. Próbáld újra, vagy írj a mrtmlnrphotography@gmail.com címre.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
