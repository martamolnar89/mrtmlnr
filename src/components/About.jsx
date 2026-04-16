import data from '../data/portfolio.json'
import { useLang } from './LangContext'
import useReveal from './useReveal'

export default function About() {
  const imgReveal = useReveal()
  const contentReveal = useReveal()
  const { t } = useLang()

  return (
    <section id="about">
      <div className="about">
        <div
          ref={imgReveal.ref}
          className={`about-image ${imgReveal.className}`}
          style={{ backgroundImage: `url('${data.about.image}')` }}
        />
        <div ref={contentReveal.ref} className={`about-content ${contentReveal.className}`}>
          <span className="section-number">{t.about.number}</span>
          <h2>{t.about.title}</h2>
          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="about-signature">{t.about.signature}</div>
        </div>
      </div>
    </section>
  )
}
