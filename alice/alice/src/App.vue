<style>
@font-face {
  font-family: navHeaderIconFont;
  src: url('//at.alicdn.com/t/font_952909_u3d3973k6re.ttf');
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  padding-top: 60px;
  font-family: navHeaderIconFont;
  font-size: 32px;
}

#nav a {
  font-weight: weight;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <nav-header></nav-header>
    <div id="nav">
      <router-link to="/">&#xeaf9;</router-link> |
      <router-link to="/about">&#xeb22;</router-link>
    </div>
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
