<template>
  <div class="center">
    <h1>Customer Data Table</h1>
    <div id="customers">
      <v-client-table :data="tableData" :columns="columns"></v-client-table>
    </div>
  </div>
</template>

<script>
  import {ClientTable, Event} from 'vue-tables-2';
  import customersData from './customers'
  import Vue from 'vue';

  Vue.use(ClientTable, {}, false, 'bootstrap4', 'default');
  export default {
    name: 'CustomerDataTable',
    data() {
      return {
        columns: ['first_name', 'last_name', 'company_name', 'address', 'city', 'province', 'phone1', 'phone2', 'email'],
        tableData: customersData
      };
    }
  };
</script>

<style scoped>

</style>
