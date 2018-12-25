<style>
  body {
    background-color: rgb(240, 245, 246);
  }
  .app {
    padding: 0px;
    margin: 0px;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div class="app">
    <nav-header></nav-header>
    <router-view/>    
  </div>
</template>

<script>
import navHeader from './components/NavHeader.vue'
import 'normalize.css'

export default {
  components: {
    navHeader: navHeader
  },
}
</script>
