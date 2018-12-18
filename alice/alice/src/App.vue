<style>
@font-face {
  font-family: navHeaderIconFont;
  src: url('//at.alicdn.com/t/font_952909_u3d3973k6re.ttf');
}

html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  overflow:hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(240, 245, 246);
  position: absolute;
}
#nav {
  /* padding: 30px; */
  padding-top: 60px;
  font-family: navHeaderIconFont;
  font-size: 32px;
}

#nav a {
  font-weight: weight;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-item {
  float: left;
  width: 50%;
}

</style>

<template>
  <div id="app">
    <nav-header></nav-header>
    <div id="nav">
      <div class="nav-item">
        <router-link to="/">&#xeaf9;</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/about">&#xeb22;</router-link>
      </div>
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
