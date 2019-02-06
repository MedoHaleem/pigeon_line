<template>
  <div>
    <div style="">
      <div id='settings-options'>
        <p align="center"
           class="selection-text">Settings</p>
        <hr>
        <h6 class="selection-text">Add or Remove Columns by checking the checkbox:</h6>
        <div class="column_2">
          <div v-for="option in options" class="item">
            <div class="ui checkbox">
              <input type="checkbox"
                     :id="option"
                     :value="option"
                     v-model="selectedColumns">
              <label for="name">{{option.replace(/_/g, " ").replace(/^./, str => str.toUpperCase())}}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['columns'],
    watch: {
      selectedColumns: function () {
        // An array can contain duplicate elements, each value contained in a set is unique, by using Set then converting to array we avoid duplicate elements
        let SortedColumns = [...new Set(this.selectedColumns)]
        // this just an extra step that maintain the order of the columns according to the order of the data in json file
        SortedColumns = this.options.filter(v => this.selectedColumns.includes(v))
        this.$emit('ColumnsChanged', SortedColumns)
      }
    },
    data () {
      return {
        selectedColumns: this.columns,
        options: ['first_name', 'last_name', 'company_name', 'address', 'city', 'province', 'phone1', 'phone2', 'email', 'web']
      }
    }
  }
</script>

<style>
  .selection-text {
    font-family: Cabin;
    font-weight: bold;
    letter-spacing: 0.6px;
    color: #34495e;
  }
  .column_2{
    -webkit-column-count: 5; /* Chrome, Safari, Opera */
    -moz-column-count: 5; /* Firefox */
    column-count: 5;
  }
  .column_2>span{
    display:block;
  }
</style>

