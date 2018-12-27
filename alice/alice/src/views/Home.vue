<style scoped>
  .container {
    overflow-y: auto;
    margin-top: 60px;
    width: 320px;
    height: 560px;
    border: 2px solid #eee;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
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
        <router-link id="blog" to="/" @click="get()">&#xeaf9;</router-link>
      </div>
      <div class="pull-right">
        <router-link id="about" to="/about">&#xeb22;</router-link>
      </div>
    </div>
    <div class="list" id="page_list">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HomeCell from '@/components/HomeCell.vue'
import $ from 'jquery'
import http from '@/views/js/http.js'

export default {
    mounted: function() {
      $('#blog').click(function() {
        $.ajax({
          url: 'http://api.pjhubs.com/blog',
          data: {
            'page': '1',
            'uid': '3758282752',
            'nick_name': 'pjhubs'
          },
          type: 'get',
          contentType: "application/json;charset=utf-8",
          dataType: 'jsonp',
          jsonp: 'callback',
          jsonpCallback: 'flightHandler',
          success: function(result) {
            console.log(json.stringify(result));
          },
          error: function() {
            console.log('出错了');
          }
        });
      });
    }
  }
</script>
