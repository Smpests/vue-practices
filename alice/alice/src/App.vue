<style>
@font-face {
  font-family: navHeaderIconFont;
  src: url('//at.alicdn.com/t/font_952909_u3d3973k6re.ttf');
}

html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  overflow: hidden;
}

#app {
  height: 100%;
  width: 100%;
  background-color: rgb(240, 245, 246);
  position: absolute;
}

#nav a {
  font-weight: weight;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>

<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view/>
  </div>
</template>

<script>
import navHeader from './components/NavHeader.vue'

export default {
  components: {
    navHeader: navHeader
  }
}
</script>
