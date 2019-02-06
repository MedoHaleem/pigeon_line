<template>
  <div class="center">
    <h1 style="color: #34495e;">Customer Data Table</h1>
    <hr>
    <Settings  :columns="columns" @ColumnsChanged="columns = $event"></Settings>
    <div id="customers">
      <v-client-table :data="tableData" :columns="columns"></v-client-table>
    </div>
  </div>
</template>

<script>
  import {ClientTable, Event} from 'vue-tables-2';
  import settings from './settings'
  import customersData from './customers'
  import Vue from 'vue';
  import Settings from "@/components/Customer/settings";

  Vue.use(ClientTable, {}, false, 'bootstrap4', 'default');
  export default {
    name: 'CustomerDataTable',
    components: {Settings},
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
