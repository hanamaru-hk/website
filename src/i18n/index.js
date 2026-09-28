import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, zhHant } from './resources.js'

const queryLanguage = new URLSearchParams(window.location.search).get('lang')
let savedLanguage = 'en'
try {
  savedLanguage = window.localStorage.getItem('hanamaru-editorial-lang') || 'en'
} catch {
  // Storage can be unavailable in strict privacy modes.
}
const initialLanguage = queryLanguage
  ? (queryLanguage.toLowerCase().startsWith('zh') ? 'zh-Hant' : 'en')
  : savedLanguage || 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    'zh-Hant': { translation: zhHant },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
