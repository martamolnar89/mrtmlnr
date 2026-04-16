import { useLang } from './LangContext'

export default function Hero() {
  const { t } = useLang()
  const lines = t.hero.title.split('\n')

  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="hero-bg" />
      <div className="hero-video">
        <video autoPlay muted loop playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-grain" />
      <div className="hero-content">
        <div className="hero-eyebrow">{t.hero.eyebrow}</div>
        <h1>
          {lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="hero-sub">{t.hero.subtitle}</p>
      </div>
      <div className="scroll-hint">{t.hero.scroll}</div>
    </section>
  )
}
