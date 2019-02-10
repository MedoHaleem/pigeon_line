import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/Home'

describe('HelloWorld.vue', () => {
  it('renders Home page', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.text()).toMatch('Welcome To Pigeon, You can access the customer data through the navigation bar or you can check some pretty Data Visualization.')
  })
})


