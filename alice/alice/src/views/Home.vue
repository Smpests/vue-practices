<style scoped>
  .container {
    overflow-y: auto;
    padding-top: 60px;
    //width: 320px;
    height: 100%;
    width: 100%;
    border: 2px solid #eee;
    position: absolute;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    z-index: 0;
  }
  .list {
    //margin: 55px 20px 20px 20px;
  }

  #nav {
    padding:0 10px;
    margin-top: 10px;
    font-family: navHeaderIconFont;
    //font-size: 32px;
    text-align: center;
    height: 50px;
  }

  #nav a {
    font-weight: weight;
    font-size: 32px;
    color: #2c3e50;
    text-decoration: none;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  #current_page {
    display: none;
  }
  .tip {
    margin-top: 0;
    height: 15px;
    text-align: center;
  }
  .tip-span {
    color: red;
    display: none;
  }
  .glyphicon {
    margin: 15px 50px;
    font-size: 20px;
    color: #666;
  }
</style>

<template>
  <div class="container" id="con">
    <div id="nav">
      <div class="pull-left">
        <router-link id="blog" to="/">&#xeaf9;</router-link>
      </div>
      <span id="prev_page" class="glyphicon glyphicon-menu-left"></span>
      <span id="next_page" class="glyphicon glyphicon-menu-right"><span id="current_page">1</span></span>
      <div class="pull-right">
        <router-link id="about" to="/about">&#xeb22;</router-link>
      </div>
    </div>
    <div class="tip">
      <span class="tip-span">请登陆后查看详情</span>
    </div>
    <div class="list" id="page_list">
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
        query('1');
        $('#next_page').click(function() {
          var current_page = $('#current_page').text();
          var query_page = (parseInt(current_page) + 1).toString();
          $('#current_page').text(query_page);
          query(query_page);
        });
        $('#blog').click(function() {
          query('1');
        });
        $('#prev_page').click(function() {
          var current_page = $('#current_page').text();
          var query_page = (parseInt(current_page) - 1).toString();
          if(query_page >= 1) {
            $('#current_page').text(query_page);
            query(query_page);
          }
        });
        function timestampToTime(timestamp) {
          var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
          var Y = date.getFullYear() + '-';
          var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
          var D = date.getDate() + ' ';
          var h = (date.getHours() < 10) ? ('0' + date.getHours() + ':') : (date.getHours() + ':');
          var m = (date.getMinutes() < 10) ? ('0' + date.getMinutes() + ':') : (date.getMinutes() + ':');
          var s = (date.getSeconds() < 10) ? ('0' + date.getSeconds()) : (date.getSeconds());
          return Y+M+D+h+m+s;
        }
        function query_comments(uid, nick_name, blog_id, page) {
          $.ajax({
            url: 'http://api.pjhubs.com/comment/getComment',
            async: false,
            data: {
              'page': page,
              'blog_id': blog_id,
              'uid': uid,
              'nick_name': nick_name
            },
            type: 'get',
            contentType: "application/json;charset=utf-8",
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: 'flightHandler',
            success: function(result) {
              console.log('query_info', [uid, nick_name, blog_id, page]);
              $('#comment').attr('value', '');
              var comment_list = $('.comment-list');
              var comments = result.msg.comments;
              for (var i = 0;i < comments.length;i++) {
                var nick_name = $('<div class="well" style="width: 100%;"><span class="pull-left" style="display: block;width: 100%;padding-left: -25px;"> From: ' + $('#user_nick_name').val() + '<span style="color: #66ccff;margin-left: 25px;">' + timestampToTime(comments[i].comment_created_time) + '</span></span></div>');
                var comment = $('<p class="pull-left" style="margin-left: 15px;margin-top: 8px;" id="' + comments[i]['comment_id'] + '"> ' + comments[i]['comment_content'] + '</p><hr>');
                comment.appendTo(nick_name);
                nick_name.appendTo(comment_list);
              }
            },
            error: function(result) {
              console.log('连接服务器失败');
            }
          });
        }
        function query(page) {
          $.ajax({
            url: 'http://api.pjhubs.com/blog',
            async: false,
            data: {
              'page': page,
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
                list.empty();
                if (blogs.length < 10) {
                  $('#current_page').text((parseInt(page) - 1).toString());
                }
                for (var i = 0;i < blogs.length;i++) {
                  var object_id = blogs[i].id;
                  //console.log('点赞数', blogs[i].like_num);
                  var container = $('<div class="homeCell-container" id="' + object_id + '"></div>');
                  //container.addClass("homeCell-container");
                  var title = $('<h1 class="titleP"> ' + blogs[i].masuser['nick_name'] + '</h1>');
                  var content = $('<p class="contentP"> ' + blogs[i].content + '</p>');
                  var bottom_container = $('<div class="bottom"></div>');
                  var bottom_views = $('<div class="bottom-views"></div>');
                  var icon = $('<span class="glyphicon glyphicon-check"></span>');
                  var read_num = $('<span class="bottom-views-count"> ' + blogs[i].read_num + '</span>');
                  var like_num = $('<span id="thumbs_up" class="glyphicon glyphicon-thumbs-up"></span><span> ' + '5' + '</span>');
                  var created_time = $('<p class="bottom-timeP"> ' + timestampToTime(blogs[i].created_time) + '</p>');
                  icon.appendTo(bottom_views);
                  read_num.appendTo(bottom_views);
                  like_num.appendTo(bottom_views);
                  bottom_views.appendTo(bottom_container);
                  created_time.appendTo(bottom_container);
                  title.appendTo(container);
                  content.appendTo(container);
                  bottom_container.appendTo(container);
                  container.appendTo(list);
                  like_num.click(function() {
                    $.ajax({
                      url: 'http://api.pjhubs.com/like',
                      async: false,
                      data: {
                        'content_type': 'blog',
                        'object_id': object_id,
                        'uid': $('#uid').val(),
                        'nick_name': $('#user_nick_name').val(),
                        'is_like': 'true'
                      },
                      type: 'get',
                      contentType: "application/json;charset=utf-8",
                      dataType: 'jsonp',
                      jsonp: 'callback',
                      jsonpCallback: 'flightHandler',
                      success: function(result) {
                        console.log('点赞回执', result);
                        if (result.msgCode == '666') {
                          $('#' + result.msg.blog_id + ' #thumbs_up').next().text(result.msg.like_num);
                        } else if ($('#uid').val() == ''){
                          $('.tip-span').text('点赞失败, 请先登陆');
                          $('.tip-span').fadeIn();
                          $('.tip-span').fadeOut(3000);
                        } else {
                          $('.tip-span').text('点赞失败, 未知错误');
                          $('.tip-span').fadeIn();
                          $('.tip-span').fadeOut(3000);
                        }
                      },
                      error: function(result) {
                        console.log('连接服务器失败');
                      }
                    });
                  });
                  content.click(function() {
                    var uid = $('#uid').val();
                    var blog_id = $(this).parent().attr('id');
                    var nick_name = $('#user_nick_name').val();
                    console.log('fisrt ', nick_name);
                    if (uid == '') {
                      $('.tip-spam').text('请登陆后查看详情');
                      $('.tip-span').fadeIn();
                      $('.tip-span').fadeOut(2000);
                    } else {
                      $.ajax({
                        url: 'http://api.pjhubs.com/blog/blogDetails',
                        async: false,
                        data: {
                          'uid': uid,
                          'blog_id': blog_id,
                          'nick_name': nick_name
                        },
                        type: 'get',
                        contentType: "application/json;charset=utf-8",
                        dataType: 'jsonp',
                        jsonp: 'callback',
                        jsonpCallback: 'flightHandler',
                        success: function(result) {
                          console.log(result);
                          var blog_content = result.msg.blog_content;
                          var comments = result.msg.comment_num;
                          var detail_container = $('<div class="detail-container container well"></div>');
                          var return_button = $('<button class="btn btn-default pull-left" style="width: 100%;">返回</button>');
                          return_button.click(function() {
                            $('.detail-container').fadeOut();
                            $('.detail-container').remove();
                          });
                          //生成内容
                          var detail_content = $('<p class="well" style="margin-top: 60px;">' + blog_content +'</p>');
                          var read_num = $('<div class="pull-right"> 阅读量:<span style="color: red;"> ' + result.msg.read_num +' </span></div>')
                          //生成评论框
                          var comment = $('<textarea id="comment" maxlength="60" name="comment" rows="5" placeholder="评论该文章..." style="width: 100%"></textarea>');
                          var text_count = $('<div class="pull-right"> 还可输入<span class="text-count">60</span> 字</div>');
                          comment.keyup(function() {
                            var len = this.value.length;
                            $('.text-count').text(60 - len);
                          });
                          // 生成评论列表
                          var comment_list = $('<div class="comment-list"> 所有评论:<br></div>');
                          // 请求当前文章的评论
                          query_comments(uid, nick_name, blog_id, '1');
                          //生成提交评论
                          var comment_submit = $('<button style="width: 100%;display: block;" class="btn btn-default">提交</button>');
                          comment_submit.click(function() {
                            var create_comment = $('#comment').val();
                            if (create_comment == '') {
                              $('.comment-tip').text('评论失败, 不可为空');
                              $('.comment-tip').fadeIn();
                              $('.comment-tip').fadeOut(2000);
                            } else {
                              $.ajax({
                                url: 'http://api.pjhubs.com/comment/createComment',
                                async: false,
                                data: {
                                  'content_type': 'blog',
                                  'content_id': blog_id,
                                  'uid': uid,
                                  'nick_name': nick_name,
                                  'content': create_comment
                                },
                                type: 'get',
                                contentType: "application/json;charset=utf-8",
                                dataType: 'jsonp',
                                jsonp: 'callback',
                                jsonpCallback: 'flightHandler',
                                success: function(result) {
                                  console.log(result);
                                  $('#comment').val('');
                                  $('.comment-tip').text('评论成功');
                                  $('.comment-tip').fadeIn();
                                  $('.comment-tip').fadeOut(2000);
                                  $('#refresh').click();
                                },
                                error: function(result) {
                                  console.log('连接服务器失败');
                                }
                              });
                            }
                          });
                          // tips
                          var tip = $('<span class="comment-tip pull-left"></span>');
                          var hidden_refresh_btn = $('<input id="refresh" type="button" hidden value="刷新">');
                          hidden_refresh_btn.click(function() {
                            $('.comment-list').empty();
                            query_comments(uid, nick_name, blog_id, '1');
                          });
                          return_button.appendTo(detail_container);
                          detail_content.appendTo(detail_container);
                          read_num.appendTo(detail_container);
                          comment.appendTo(detail_container);
                          tip.appendTo(detail_container);
                          text_count.appendTo(detail_container);
                          comment_submit.appendTo(detail_container);
                          comment_list.appendTo(detail_container);
                          hidden_refresh_btn.appendTo(detail_container);
                          //tip.appendTo(detail_container);
                          detail_container.appendTo($('.app'));
                          detail_container.fadeIn();
                        },
                        error: function(result) {
                          console.log('连接服务器失败');
                        }
                      });
                    }
                  });
                }
              } else {
                console.log(result.msg);
              }
            },
            error: function() {
              console.log('出错了');
            }
          });
        }
      });
    }
  }
</script>
