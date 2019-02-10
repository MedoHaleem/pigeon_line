import {shallowMount, mount} from '@vue/test-utils'
import CustomerVisualization from '@/components/Customer/CustomerVisualization'

describe('CustomerVisualization.vue', () => {
  it('renders Customer Visualization page', () => {
    const wrapper = shallowMount(CustomerVisualization)
    expect(wrapper.text()).toMatch('Customer Data Visualization')
  });

  it('should have correct number of Gmail counts for all provinces', () => {
    const wrapper = mount(CustomerVisualization);
    expect(wrapper.vm.gmailCount).toBe(66)
  });

  it('should update number of email count when we change province', () => {
    const wrapper = mount(CustomerVisualization);
    expect(wrapper.vm.gmailCount).toBe(66)
    wrapper.setData({selectedProvince: 'BC'})
    expect(wrapper.vm.selectedProvince).toBe('BC')
    expect(wrapper.vm.gmailCount).toBe(9)
  });

  it('should update number of email count when we remove province', () => {
    const wrapper = mount(CustomerVisualization);
    wrapper.setData({selectedProvince: 'BC'})
    expect(wrapper.vm.selectedProvince).toBe('BC')
    expect(wrapper.vm.gmailCount).toBe(9)
    wrapper.setData({selectedProvince: null})
    expect(wrapper.vm.gmailCount).toBe(66)

  });
});
