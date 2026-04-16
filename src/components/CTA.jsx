import useReveal from './useReveal'

export default function CTA() {
  const reveal = useReveal()

  return (
    <section className="cta">
      <div ref={reveal.ref} className={reveal.className}>
        <span className="section-number">— 05 / Kapcsolat</span>
        <h2>Dolgozzunk együtt</h2>
        <p className="cta-sub">
          Írj néhány sort a projektedről — 48 órán belül válaszolok.
        </p>
        <a href="#contact" className="cta-button">
          Érdeklődés
        </a>
      </div>
    </section>
  )
}
