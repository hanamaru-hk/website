import { createElement } from 'react'
import { useTranslation } from 'react-i18next'

function toHtml(value) {
  if (Array.isArray(value)) return value.map(toHtml).join('')
  if (value == null || typeof value === 'boolean') return ''
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (value.type === 'br') return '<br>'
  if (value.type === 'em') return `<em>${toHtml(value.props.children)}</em>`
  return toHtml(value.props?.children)
}

export default function I18nText({ as = 'span', i18nKey, children, ...props }) {
  const { t } = useTranslation()
  return createElement(as, {
    ...props,
    dangerouslySetInnerHTML: { __html: t(i18nKey, { defaultValue: toHtml(children) }) },
  })
}
