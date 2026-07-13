import { useLang } from './LangContext'
import useReveal from './useReveal'

const WEDDING_BG = '/photos/wedding-hands.jpg'

function PriceCard({ item }) {
  const reveal = useReveal()
  return (
    <div ref={reveal.ref} className={`price-card ${reveal.className}`}>
      <h3 className="price-card-title">{item.title}</h3>
      <div className="price-card-amount">{item.price}</div>
      <div className="price-card-rule" />
      <p className="price-card-desc">{item.desc}</p>
    </div>
  )
}

export default function Pricing() {
  const headerReveal = useReveal()
  const weddingReveal = useReveal()
  const termsReveal = useReveal()
  const { t } = useLang()
  const p = t.pricing

  return (
    <section id="pricing" className="pricing">
      <div ref={headerReveal.ref} className={`section-header ${headerReveal.className}`}>
        <div>
          <span className="section-number">{p.number}</span>
          <h2 className="section-title">{p.title}</h2>
        </div>
        <div className="section-meta">{p.meta}</div>
      </div>

      <div className="price-grid">
        {p.items.map((item) => (
          <PriceCard key={item.title} item={item} />
        ))}
      </div>

      <ul ref={termsReveal.ref} className={`price-terms ${termsReveal.className}`}>
        {p.terms.map((term) => (
          <li key={term}>{term}</li>
        ))}
      </ul>

      <div
        ref={weddingReveal.ref}
        className={`price-wedding ${weddingReveal.className}`}
        style={{ backgroundImage: `url(${WEDDING_BG})` }}
      >
        <span className="price-wedding-eyebrow">{p.weddingEyebrow}</span>
        <h3 className="price-wedding-title">{p.weddingTitle}</h3>
        <div className="price-wedding-tiers">
          {p.weddingItems.map((item) => (
            <div key={item.title} className="price-tier">
              <div className="price-tier-amount">{item.price}</div>
              <div className="price-tier-name">{item.title}</div>
              <p className="price-tier-desc">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="price-wedding-footer">
          <div className="price-wedding-includes">
            <h4 className="price-wedding-includes-title">{p.weddingIncludesTitle}</h4>
            <ul>
              {p.weddingIncludes.map((inc) => (
                <li key={inc}>{inc}</li>
              ))}
            </ul>
          </div>
          <p className="price-wedding-terms">{p.weddingTerms}</p>
        </div>
      </div>
    </section>
  )
}
