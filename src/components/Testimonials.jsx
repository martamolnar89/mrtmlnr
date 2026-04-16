import { useState, useCallback } from 'react'
import data from '../data/portfolio.json'
import useReveal from './useReveal'

export default function Testimonials() {
  const { testimonials } = data
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const go = useCallback((dir) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  const t = testimonials[current]
  const reveal = useReveal()

  return (
    <section className="testimonials">
      <div ref={reveal.ref} className={reveal.className}>
        <div className="section-header">
          <div>
            <span className="section-number">— 04 / Kedves szavak</span>
            <h2 className="section-title">Ajánlások</h2>
          </div>
          <div className="section-meta">{testimonials.length} vélemény</div>
        </div>

        <div className="testimonial-slider">
          <div className="testimonial-image">
            <img
              key={t.id}
              src={t.image}
              alt={t.name}
              loading="lazy"
            />
          </div>

          <div className="testimonial-content">
            <blockquote key={t.id} className="testimonial-text">
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <div className="testimonial-author">— {t.name}</div>

            <div className="testimonial-nav">
              <button
                className="testimonial-arrow"
                onClick={() => go(-1)}
                aria-label="Előző"
              >
                &#8592;
              </button>
              <span className="testimonial-counter">
                {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
              <button
                className="testimonial-arrow"
                onClick={() => go(1)}
                aria-label="Következő"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
