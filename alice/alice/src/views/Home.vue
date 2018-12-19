<style scoped>
  .container {
    overflow-y: scroll;
    height: 100%;
    width: 100%;
  }
  .list {
    margin: 20px 20px 20px 20px;
  }

  #nav {
    text-align: center;
    padding-top: 60px;
    margin-bottom: 50px;
    font-family: navHeaderIconFont;
    font-size: 32px;
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
