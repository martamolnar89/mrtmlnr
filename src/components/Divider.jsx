import { useLang } from './LangContext'
import useReveal from './useReveal'

const DIVIDER_BG = '/photos/divider-couple-bw.jpg'

export default function Divider() {
  const reveal = useReveal()
  const { t } = useLang()

  return (
    <div
      ref={reveal.ref}
      className={`divider ${reveal.className}`}
      style={{ backgroundImage: `url(${DIVIDER_BG})` }}
    >
      <div className="divider-overlay" />
      <p className="divider-quote">{t.dividerQuote}</p>
    </div>
  )
}
