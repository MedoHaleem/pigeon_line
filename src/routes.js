import Home from './components/Home.vue';
import CustomerDataTable from './components/Customer/CustomerDataTable.vue';

 export  const  routes = [
  { path: '', component: Home },
  { path: '/customers', component: CustomerDataTable },
];
