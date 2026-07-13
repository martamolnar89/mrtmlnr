import { useState, useEffect } from 'react'
import data from '../data/portfolio.json'
import { useLang } from './LangContext'
import Lightbox from './Lightbox'

// Group projects by their category, preserving first-seen order.
const groups = data.projects.reduce((acc, project) => {
  const group = acc.find((g) => g.category === project.category)
  if (group) group.projects.push(project)
  else acc.push({ category: project.category, projects: [project] })
  return acc
}, [])

function CollectionCard({ project, categories, onClick }) {
  return (
    <button className="gallery-collection" onClick={() => onClick(project)} aria-label={project.title}>
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        style={project.focus ? { objectPosition: project.focus } : undefined}
      />
      <div className="overlay">
        <div className="category">{categories[project.category] || project.category}</div>
        <div className="title">{project.title}</div>
      </div>
    </button>
  )
}

export default function GalleryPage() {
  const { t } = useLang()
  const [active, setActive] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filters = ['all', ...groups.map((g) => g.category)]
  const shown = filter === 'all' ? groups : groups.filter((g) => g.category === filter)

  return (
    <main className="gallery-page">
      <div className="section-header">
        <div>
          <span className="section-number">{t.portfolio.galleryNumber}</span>
          <h1 className="section-title">{t.portfolio.galleryTitle}</h1>
        </div>
        <div className="section-meta">
          {data.projects.length} {t.portfolio.galleryMeta}
        </div>
      </div>

      <div className="gallery-filters">
        {filters.map((cat) => (
          <button
            key={cat}
            className={`gallery-filter-btn${filter === cat ? ' active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat === 'all' ? t.portfolio.filterAll : (t.categories[cat] || cat)}
          </button>
        ))}
      </div>

      {shown.map((group) => (
        <section key={group.category} className="gallery-category">
          <h2 className="gallery-category-title">
            {t.categories[group.category] || group.category}
          </h2>
          <div className="gallery-collections">
            {group.projects.map((project) => (
              <CollectionCard
                key={project.id}
                project={project}
                categories={t.categories}
                onClick={setActive}
              />
            ))}
          </div>
        </section>
      ))}

      <div className="gallery-back">
        <a href="/" className="portfolio-view-all">{t.portfolio.backHome}</a>
      </div>

      {active && (
        <Lightbox project={active} onClose={() => setActive(null)} />
      )}
    </main>
  )
}
