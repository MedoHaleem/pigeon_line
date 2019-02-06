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
    width: 50%;
    border: 3px solid #4f878d;
    padding: 10px;
    text-align: center;
}


pre {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid #f36d33;
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
}

</style>
