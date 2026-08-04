import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from './HomeView.vue'

describe('HomeView', () => {
  it('renders the slogan and subtitle', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.find('.slogan').text()).toBe('Your trusted software partner.')
    expect(wrapper.find('.subtitle').text()).toBe(
      'Hanamaru Company Limited 花丸有限公司',
    )
  })
})
