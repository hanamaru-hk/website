import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from './HomeView.vue'
import i18n from '../i18n'

describe('HomeView', () => {
  it('renders the English slogan and subtitle', () => {
    const wrapper = mount(HomeView, { global: { plugins: [i18n] } })
    expect(wrapper.find('.slogan').text()).toBe('Build it. Own it.')
    expect(wrapper.find('.subtitle').text()).toBe('Hanamaru Software')
  })

  it('renders the slogan and subtitle in English regardless of locale', () => {
    i18n.global.locale.value = 'zh-Hant'
    const wrapper = mount(HomeView, { global: { plugins: [i18n] } })
    expect(wrapper.find('.slogan').text()).toBe('Build it. Own it.')
    expect(wrapper.find('.subtitle').text()).toBe('Hanamaru Software')
    i18n.global.locale.value = 'en'
  })
})
