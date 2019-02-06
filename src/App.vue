<template>
  <div id="app">
      <header>
      <app-navigation></app-navigation>
      </header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header'
export default {
  name: 'app',
  components: {
    appNavigation: Header
  }
};
</script>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

h1,
h2,
h3 {
    color: #001826;
}

button {
    margin: 5px;
}

ul.unstyled {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.center {
    margin: auto;
    width: 80%;
    padding: 10px;
    text-align: center;
}


</style>
