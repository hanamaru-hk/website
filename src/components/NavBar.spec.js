import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from './NavBar.vue'

const push = vi.fn()

vi.mock('vue-router', () => ({
  useRoute: () => ({ name: 'home', path: '/' }),
  useRouter: () => ({ push }),
}))

describe('NavBar', () => {
  it('renders the brand name', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.find('.brand').text()).toBe('Hanamaru')
  })

  it('renders a desktop menu with all links', () => {
    const wrapper = mount(NavBar)
    const menu = wrapper.find('.desktop-menu')
    expect(menu.exists()).toBe(true)
    expect(menu.text()).toContain('Home')
    expect(menu.text()).toContain('Services')
    expect(menu.text()).toContain('Contact')
  })
})
