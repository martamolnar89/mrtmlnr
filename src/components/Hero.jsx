import data from '../data/portfolio.json'

export default function Hero() {
  const { hero } = data
  const lines = hero.title.split('\n')

  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="hero-bg" />
      <div className="hero-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={hero.image}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-grain" />
      <div className="hero-content">
        <div className="hero-eyebrow">{hero.eyebrow}</div>
        <h1>
          {lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="hero-sub">{hero.subtitle}</p>
      </div>
      <div className="scroll-hint">Tekerj lejjebb</div>
    </section>
  )
}
