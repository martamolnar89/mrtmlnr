import { useState, useEffect, useCallback } from 'react'
import { useLang } from './LangContext'

export default function Lightbox({ project, onClose }) {
  const [current, setCurrent] = useState(0)
  const images = project.gallery || [project.image]
  const { t } = useLang()

  const go = useCallback((dir) => {
    setCurrent((prev) => (prev + dir + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, go])

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <div className="lightbox-header">
          <span className="lightbox-category">{t.categories[project.category] || project.category}</span>
          <span className="lightbox-title">{project.title}</span>
        </div>

        <div className="lightbox-image-wrap">
          {images.length > 1 && (
            <button className="lightbox-arrow lightbox-arrow--left" onClick={() => go(-1)} aria-label={t.testimonials.prev}>
              &#8592;
            </button>
          )}

          <img
            src={images[current]}
            alt={`${project.title} — ${current + 1}`}
            className="lightbox-image"
          />

          {images.length > 1 && (
            <button className="lightbox-arrow lightbox-arrow--right" onClick={() => go(1)} aria-label={t.testimonials.next}>
              &#8594;
            </button>
          )}
        </div>

        {images.length > 1 && (
          <div className="lightbox-counter">
            {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>
        )}

        {images.length > 1 && (
          <div className="lightbox-thumbs">
            {images.map((img, i) => (
              <button
                key={i}
                className={`lightbox-thumb${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
              >
                <img src={img} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
