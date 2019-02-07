<template>
  <div class="center">
    <h1>Customer Data Visualization</h1>
    <h4>You can filter by province please select province by searching or picking from dropdown</h4>
    <br>
    <div style="  margin: auto;width: 70%;">
      <multiselect :options="provinces"
                   v-model="selectedProvince"
                   :close-on-select="true"
                   :clear-on-select="false"
                   placeholder="Select a Province">
      </multiselect>
    </div>
    <br>
    <h5>Bar Chart</h5>
    <GChart
      type="BarChart"
      :data="chartData"
      :options="chartOptions"
    />
    <br>
    <hr>
    <h5>Pie Chart</h5>
    <GChart

      type="PieChart"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
  import {GChart} from 'vue-google-charts';
  import customers from './customers';
  import Multiselect from 'vue-multiselect';

  export default {
    name: "CustomerVisualization",
    components: {
      GChart,
      Multiselect
    },
    mounted() {
      this.countEmails(customers);
    },
    data() {
      return {
        selectedProvince: '',
        gmailCount: 0,
        yahooCount: 0,
        aolCount: 0,
        otherCount: 0,
        chartOptions: {
          title: 'Number of Users by Domain Provider',
          chartArea: {width: '50%'},
          hAxis: {
            title: 'Total Users',
            minValue: 0
          },
          height: 400,
          vAxis: {
            title: 'Email Providers'
          }
        }
      };
    },
    computed: {
      chartData: function () {
        return [
          ['Email Provider', 'Number of Users', {role: 'style'}],
          ['Gmail', this.gmailCount, "red"],
          ['Yahoo', this.yahooCount, "gold"],
          ['AOL', this.aolCount, "blue"],
          ['Other', this.otherCount, "gray"]
        ];
      },
      provinces: function () {
        //I use map to get provinces and put in separate array while I use Set to remove redundant value of provinces then I turn into an array to use it in vue-select
        return [...new Set(customers.map(c => c.province))];
      }
    },
    watch: {
      selectedProvince: function () {
        this.gmailCount = 0;
        this.yahooCount = 0;
        this.aolCount = 0;
        this.otherCount = 0;

        if (this.selectedProvince !== null) {
          let filteredCustomers = customers.filter(this.filterByProvince);
          this.countEmails(filteredCustomers);
        } else {
          this.countEmails(customers);
        }
      }
    },
    methods: {
      filterByProvince: function (item) {
        if (item.province === this.selectedProvince) {
          return true;
        }
        return false;
      },
      countEmails: function (items) {
        for (let c of items) {
          switch (c.email.match(/(?:[\w-]+\.)+(?:com|net|biz|org)/i)[0]) {
            case "gmail.com":
              this.gmailCount++;
              break;
            case "yahoo.com":
              this.yahooCount++;
              break;
            case "aol.com":
              this.aolCount++;
              break;
            default:
              this.otherCount++;
          }
        }
      }
    },
  };
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
