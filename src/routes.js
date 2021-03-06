import Home from './components/Home.vue';
import CustomerDataTable from './components/Customer/CustomerDataTable.vue';
import CustomerVisualization from './components/Customer/CustomerVisualization.vue';

export const routes = [
  {path: '', component: Home},
  {path: '/customers', component: CustomerDataTable},
  {path: '/customers/visualization', component: CustomerVisualization},
];
