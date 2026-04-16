import { createContext, useContext, useState } from 'react'
import translations from '../data/translations.json'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('hu')
  const t = translations[lang]
  const toggle = () => setLang((l) => (l === 'hu' ? 'en' : 'hu'))

  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
