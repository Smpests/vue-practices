<style scoped>
  .container {
    overflow-y: scroll;
    margin-top: 60px;
  }
  .list {
    margin: 55px 20px 20px 20px;
  }

  #nav {
    margin-top: 10px;
    text-align: center;
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
  <div class="container">
    <div id="nav">
      <div class="nav-item">
        <router-link to="/">&#xeaf9;</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/about">&#xeb22;</router-link>
      </div>
    </div>
    <div class="list">
      <home-cell content='2' v-for="index in 20" :key="index"></home-cell>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCell from '@/components/HomeCell.vue'

export default {
  name: 'home',
  components: {
    HomeCell
  }
}
</script>
