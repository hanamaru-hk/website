import { createI18n } from 'vue-i18n'
import en from './src/i18n/locales/en.js'

const i18n = createI18n({ legacy: false, locale: 'en', messages: { en } })
const items = i18n.global.t('services.items')
console.log('isArray:', Array.isArray(items))
console.log('item0:', JSON.stringify(items[0], null, 2))
console.log('tags of item0:', items[0] && items[0].tags)
