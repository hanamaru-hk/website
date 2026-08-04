import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  DEFAULT_LOCALE,
  STORAGE_KEY,
  SUPPORTED_LOCALES,
} from '../i18n'

function syncDocumentLang(lang) {
  document.documentElement.lang = lang
}

export function useLocale() {
  const { locale } = useI18n()

  const currentLocale = computed(() => locale.value)

  function setLocale(lang) {
    if (!SUPPORTED_LOCALES[lang]) return
    locale.value = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore storage errors */
    }
    syncDocumentLang(lang)
  }

  syncDocumentLang(locale.value)

  return {
    currentLocale,
    setLocale,
    locales: SUPPORTED_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
  }
}
