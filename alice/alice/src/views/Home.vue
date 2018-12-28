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

  @font-face {
  font-family: 'iconfont';  /* project id 952909 */
  src: url('//at.alicdn.com/t/font_952909_fni4mkv42n.ttf') format('truetype');
  }
  .homeCell-container {
    background: #eee;
    padding: 15px 15px 15px 15px;
    margin-top: 20px;
    border-radius: 8px;
  }
  .homeCell-container p {
    font-weight: weight;
  }
  .list .titleP {
    margin: 0;
    font-weight: bold;
    font-size: 18px;
  }
  .list .contentP {
    font-weight: weight;
    font-size: 16px;
    line-height: 23px;
  }
  .list .bottom {
    display: flex;
    align-content: space-between;
    align-items: center;
  }
  .list .bottom-views {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .list .bottom-views-span {
    margin: 0;
    width: 30px;
    font-size: 20px;
    font-family: iconfont;
    color: palevioletred;
  }
  .list .bottom-views-count {
    margin: 0;
    font-size: 14px;
  }
  .list .bottom-timeP {
    flex: 1;
    margin: 0;
    text-align: right;
    font-weight: weight;
    font-size: 12px;
    color: #1E90FF;
  }

</style>

<template>
  <div class="container" id="con">
    <div id="nav">
      <div class="pull-left">
        <router-link id="blog" to="/">&#xeaf9;</router-link>
      </div>
      <div class="pull-right">
        <router-link id="about" to="/about">&#xeb22;</router-link>
      </div>
    </div>
    <div class="list" id="page_list">
    </div>
  </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HomeCell from '@/components/HomeCell.vue'
import $ from 'jquery'

export default {
    mounted: function() {
      $(document).ready(function() {
        $('#blog').click(function() {
          $.ajax({
            url: 'http://api.pjhubs.com/blog',
            async: false,
            data: {
              'page': '1',
              'uid': '9609352425',
              'nick_name': 'pjhubs',
              //'content': '溜得很啊秀儿？'
            },
            type: 'get',
            contentType: "application/json;charset=utf-8",
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: 'flightHandler',
            success: function(result) {
              if (result.msgCode == 666) {
                var blogs = result.msg.blogs;
                var list = $('#page_list');
                for (var i = 0;i < blogs.length;i++) {
                  var container = $('<div class="homeCell-container" style="background: #eee;padding: 15px 15px 15px 15px;margin-top: 20px;border-radius: 8px;"></div>');
                  //container.addClass("homeCell-container");
                  console.log(blogs[i].masuser['nick_name']);
                  var title = $('<h1 class="titleP" style="font-size: 1.5em"> ' + blogs[i].masuser['nick_name'] + '</h1>');
                  var content = $('<p class="contentP" style="margin: 0;font-weight: bold;font-size: 18px;max-height:100px;overflow: hidden;"> ' + blogs[i].content + '</p>');
                  var bottom_container = $('<div class="bottom" style="display: flex;align-content: space-between;align-items: center;"></div>');
                  var bottom_views = $('<div class="bottom-views" style="flex: 1;display: flex;align-items: center;"></div>');
                  var icon = $('<p class="bottom-views-span" style="margin: 0;width: 30px;font-size: 20px;font-family: iconfont;color: palevioletred;">&#xeac1;</p>');
                  var read_num = $('<p class="bottom-views-count" style="margin: 0;font-size: 14px;"> ' + blogs[i].read_num + '</p>');
                  var created_time = $('<p class="bottom-timeP" style="flex: 1;margin: 0;text-align: right;font-weight: weight;font-size: 12px;color: #1E90FF;"> ' + blogs[i].created_time + '</p>');
                  icon.appendTo(bottom_views);
                  read_num.appendTo(bottom_views);
                  bottom_views.appendTo(bottom_container);
                  created_time.appendTo(bottom_container);
                  title.appendTo(container);
                  content.appendTo(container);
                  bottom_container.appendTo(container);
                  container.appendTo(list);
                }
              } else {
                console.log(result.msg);
              }
            },
            error: function() {
              console.log('出错了');
            }
          });
        });
      });
    }
  }
</script>
