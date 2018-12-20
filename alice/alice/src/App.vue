<style scoped>

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
  }
}
</script>
