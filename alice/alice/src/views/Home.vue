<style scoped>
  .container {
    overflow-y: auto;
    margin-top: 60px;
    width: 320px;
    height: 560px;
    border: 2px solid #eee;
    border-radius: 15px;
  }
  .list {
    //margin: 55px 20px 20px 20px;
  }

  #nav {
    padding:0 10px;
    margin-top: 10px;
    font-family: navHeaderIconFont;
    font-size: 32px;
    margin-bottom: 65px;
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
  <div class="container">
    <div id="nav">
      <div class="pull-left">
        <router-link to="/">&#xeaf9;</router-link>
      </div>
      <div class="pull-right">
        <router-link to="/about">&#xeb22;</router-link>
      </div>
    </div>
    <div class="list" id="page_list">
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
