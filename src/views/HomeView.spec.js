import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from './HomeView.vue'
import i18n from '../i18n'

describe('HomeView', () => {
  it('renders the English slogan', () => {
    const wrapper = mount(HomeView, { global: { plugins: [i18n] } })
    expect(wrapper.find('.slogan').text()).toBe('Build it. Own it.')
  })

  it('renders the slogan in English regardless of locale', () => {
    i18n.global.locale.value = 'zh-Hant'
    const wrapper = mount(HomeView, { global: { plugins: [i18n] } })
    expect(wrapper.find('.slogan').text()).toBe('Build it. Own it.')
    i18n.global.locale.value = 'en'
  })
})
