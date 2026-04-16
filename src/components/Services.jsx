import { useLang } from './LangContext'
import useReveal from './useReveal'

function ServiceItem({ service }) {
  const reveal = useReveal()
  return (
    <div ref={reveal.ref} className={`service ${reveal.className}`}>
      <div className="service-num">{service.num}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.desc}</p>
    </div>
  )
}

export default function Services() {
  const headerReveal = useReveal()
  const { t } = useLang()

  return (
    <section id="services" className="services">
      <div ref={headerReveal.ref} className={`section-header ${headerReveal.className}`}>
        <div>
          <span className="section-number">{t.services.number}</span>
          <h2 className="section-title">{t.services.title}</h2>
        </div>
        <div className="section-meta">{t.services.meta}</div>
      </div>

      <div className="services-grid">
        {t.services.items.map((s) => (
          <ServiceItem key={s.num} service={s} />
        ))}
      </div>
    </section>
  )
}
