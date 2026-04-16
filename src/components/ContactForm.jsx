import { useState } from 'react'
import { useLang } from './LangContext'
import useReveal from './useReveal'

export default function ContactForm() {
  const reveal = useReveal()
  const [status, setStatus] = useState('idle')
  const { t } = useLang()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const formData = new FormData(form)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
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
            <span className="section-number">{t.contact.number}</span>
            <h2 className="section-title">{t.contact.title}</h2>
          </div>
        </div>

        <div className="contact-form-wrap">
          <p className="contact-form-intro">{t.contact.intro}</p>

          {status === 'success' ? (
            <div className="contact-success">{t.contact.success}</div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="hidden" name="access_key" value="3fe6b3a0-9a07-4305-a9e8-2540797bd0bc" />
              <input type="hidden" name="subject" value="Új érdeklődés — mrtmlnr photography" />
              <input type="hidden" name="from_name" value="mrtmlnr photography weboldal" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t.contact.name}</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t.contact.email}</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">{t.contact.service}</label>
                <select id="service" name="service">
                  <option value="">{t.contact.servicePlaceholder}</option>
                  {t.contact.serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.contact.message}</label>
                <textarea id="message" name="message" rows="5" required />
              </div>

              <button type="submit" className="form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? t.contact.sending : t.contact.submit}
              </button>

              {status === 'error' && (
                <p className="form-error">{t.contact.error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
