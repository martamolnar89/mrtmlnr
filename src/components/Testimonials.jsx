import { useState, useCallback } from 'react'
import data from '../data/portfolio.json'
import { useLang } from './LangContext'
import useReveal from './useReveal'

export default function Testimonials() {
  const { testimonials } = data
  const [current, setCurrent] = useState(0)
  const { t } = useLang()

  const go = useCallback((dir) => {
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  const item = testimonials[current]
  const reveal = useReveal()

  return (
    <section className="testimonials">
      <div ref={reveal.ref} className={reveal.className}>
        <div className="section-header">
          <div>
            <span className="section-number">{t.testimonials.number}</span>
            <h2 className="section-title">{t.testimonials.title}</h2>
          </div>
          <div className="section-meta">{testimonials.length} {t.testimonials.title.toLowerCase()}</div>
        </div>

        <div className="testimonial-slider">
          <div className="testimonial-image">
            <img src={item.image} alt={item.name} loading="lazy" />
          </div>

          <div className="testimonial-content">
            <blockquote className="testimonial-text">
              &ldquo;{item.text}&rdquo;
            </blockquote>
            <div className="testimonial-author">— {item.name}</div>

            <div className="testimonial-nav">
              <button className="testimonial-arrow" onClick={() => go(-1)} aria-label={t.testimonials.prev}>
                &#8592;
              </button>
              <span className="testimonial-counter">
                {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
              <button className="testimonial-arrow" onClick={() => go(1)} aria-label={t.testimonials.next}>
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
