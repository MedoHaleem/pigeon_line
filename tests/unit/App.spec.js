import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import Home from "@/components/Home"
import  CustomerDataTable from '@/components/Customer/CustomerDataTable'
import  {routes} from "@/routes.js"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("App", () => {
  it("renders a Home as default route", () => {
    const router = new VueRouter({ routes })
    const wrapper = mount(App, { localVue, router })
    expect(wrapper.find(Home).exists()).toBe(true)
  })
  it("renders a Customer DataTable via routing", () => {
    const router = new VueRouter({ routes })
    const wrapper = mount(App, { localVue, router })
    router.push("/customers")
    expect(wrapper.find(CustomerDataTable).exists()).toBe(true)
  })
})
