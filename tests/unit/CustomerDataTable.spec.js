import { shallowMount, mount } from '@vue/test-utils'
import CustomerDataTable from '@/components/Customer/CustomerDataTable'

describe('CustomerDataTable.vue', () => {
  it('renders Customer DataTable page', () => {
    const wrapper = shallowMount(CustomerDataTable)
    expect(wrapper.text()).toMatch('Customer Data Table')
  })

  it('renders actual table', () => {
    const wrapper = mount(CustomerDataTable)
    expect(wrapper.html()).toContain('<span title="" class="VueTables__heading">First name</span>')
    expect(wrapper.find('td').text()).toMatch('Francoise')
  })
  it('should remove a column from the table', () => {
    const wrapper = mount(CustomerDataTable)
    wrapper.find('#first_name').setChecked(false)
    expect(wrapper.html()).not.toContain('<span title="" class="VueTables__heading">First name</span>')
  })
  it('should add a column to the table', () => {
    const wrapper = mount(CustomerDataTable)
    wrapper.find('#web').setChecked(true)
    expect(wrapper.html()).toContain('<span title="" class="VueTables__heading">Web</span>')
  })
})
