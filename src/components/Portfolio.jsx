import { useState } from 'react'
import data from '../data/portfolio.json'
import useReveal from './useReveal'
import Lightbox from './Lightbox'

function PortfolioItem({ project, index, onClick }) {
  const reveal = useReveal()
  const cls = `item-${index + 1}`

  return (
    <div
      ref={reveal.ref}
      className={`portfolio-item ${cls} ${reveal.className}`}
      onClick={() => onClick(project)}
    >
      <img src={project.image} alt={project.category} loading="lazy" />
      <div className="overlay">
        <div className="category">{project.category}</div>
        <div className="title">{project.title}</div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const headerReveal = useReveal()
  const [active, setActive] = useState(null)

  return (
    <section id="portfolio">
      <div ref={headerReveal.ref} className={`section-header ${headerReveal.className}`}>
        <div>
          <span className="section-number">— 01 / Munkáim</span>
          <h2 className="section-title">Válogatott gyűjtemény</h2>
        </div>
        <div className="section-meta">
          {data.projects.length} projekt · 2020 — 2026
        </div>
      </div>

      <div className="portfolio-grid">
        {data.projects.map((project, i) => (
          <PortfolioItem
            key={project.id}
            project={project}
            index={i}
            onClick={setActive}
          />
        ))}
      </div>

      {active && (
        <Lightbox project={active} onClose={() => setActive(null)} />
      )}
    </section>
  )
}
