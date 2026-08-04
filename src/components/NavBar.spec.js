import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from './NavBar.vue'
import i18n from '../i18n'

const push = vi.fn()

vi.mock('vue-router', () => ({
  useRoute: () => ({ name: 'home', path: '/' }),
  useRouter: () => ({ push }),
}))

describe('NavBar', () => {
  it('renders a desktop menu with all links', () => {
    const wrapper = mount(NavBar, { global: { plugins: [i18n] } })
    const menu = wrapper.find('.desktop-menu')
    expect(menu.exists()).toBe(true)
    expect(menu.text()).toContain('Home')
    expect(menu.text()).toContain('Services')
    expect(menu.text()).toContain('Contact')
  })

  it('renders a language switcher', () => {
    const wrapper = mount(NavBar, { global: { plugins: [i18n] } })
    expect(wrapper.find('.language-switcher').exists()).toBe(true)
    expect(wrapper.find('.language-switcher').text()).toContain('EN')
  })
})
