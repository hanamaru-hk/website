import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import zhHant from './locales/zhHant.js'

export const SUPPORTED_LOCALES = {
  en: { label: 'English', shortLabel: 'EN' },
  'zh-Hant': { label: '繁體中文', shortLabel: '繁中' },
}

export const DEFAULT_LOCALE = 'en'
export const STORAGE_KEY = 'hanamaru-locale'

function readStoredLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && SUPPORTED_LOCALES[stored]) return stored
  } catch {
    /* ignore storage errors */
  }
  return null
}

const i18n = createI18n({
  legacy: false,
  locale: readStoredLocale() || DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { en, 'zh-Hant': zhHant },
})

export default i18n
