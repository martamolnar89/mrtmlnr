import data from '../data/portfolio.json'
import useReveal from './useReveal'

export default function About() {
  const imgReveal = useReveal()
  const contentReveal = useReveal()

  return (
    <section id="about">
      <div className="about">
        <div
          ref={imgReveal.ref}
          className={`about-image ${imgReveal.className}`}
          style={{ backgroundImage: `url('${data.about.image}')` }}
        />
        <div ref={contentReveal.ref} className={`about-content ${contentReveal.className}`}>
          <span className="section-number">— 02 / Rólam</span>
          <h2>Minden fotó mögött áll egy történet</h2>
          {data.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="about-signature">— Molnár Márta</div>
        </div>
      </div>
    </section>
  )
}
