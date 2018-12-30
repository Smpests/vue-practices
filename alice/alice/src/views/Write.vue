<style scoped>
  .container {
    overflow-y: hidden;
    margin-top: 60px;
    //width: 320px;
    height: 92.5%;
    border: 2px solid #eee;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  input[type="button"]{
    margin-top: 25px;
    height: 35px;
    background: #357eb8;
    color:#bcedff;
    font-weight: bold;
    font-size: 16px;
  }
  input[type="button"]:hover{
    background:#0e62a3;
    cursor: pointer;
    }
  h1 {
  color: #FF6ECF;
  font-size: 1.8em;
  text-align: center;
  }
  textarea {
    width: 100%;
  }
  .footer {
      background-image: url('img/172356420975864.gif');
      background-size: cover;
      margin-left: 70px;
      width: 200px;
      height: 210px;
  }
  .text-count {
    color: red;
    font-style: italic;
  }
  .footer-tip {
    color: red;
  }
</style>

<template>
  <div class= "container">
    <div class="form-group" method="get">
      <!-- <div>
        <h1>标题</h1>
        <input class="form-control" autocomplete="off" name="title" type="text">
      </div> -->
      <div>
        <h1>内容</h1> 
        <textarea id="content" maxlength="200" name="content" rows="10" placeholder="分享你的心事..."></textarea>
        <div class="pull-right"> 
          还可输入<span class="text-count">200</span> 字
        </div>
        <input autocomplete="off" id="publish" type="button" name="finish" class="form-control" value="发布" >
      </div>
    </div>
    <div class="footer"></div>
    <div style="text-align:center;">
      <span class="footer-tip"></span>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'

export default {
  mounted: function() {
    $('#content').keyup(function() {
      var len = this.value.length;
      $('.text-count').text(200 - len);
    });
    $('#publish').click(function() {
      var content = $('#content').val();
      if (content.length < 15) {
        $('.footer-tip').text('发布失败,字数少于15字');
      } else {
        var uid = $('#uid').val();
        var nick_name = $('#user_nick_name').val();
        if (uid == '') {
          $('.footer-tip').text('发布失败, 请先登陆');
        } else {
          $.ajax({
            url: 'http://api.pjhubs.com/blog/createBlog',
              async: false,
              data: {
                'uid': uid,
                'nick_name': nick_name,
                'content': content
              },
              type: 'get',
              contentType: "application/json;charset=utf-8",
              dataType: 'jsonp',
              jsonp: 'callback',
              jsonpCallback: 'flightHandler',
              success: function(result) {
                if (result.msgCode == 666) {
                    $('.footer-tip').text('发布成功, 正在前往主页...');
                    setTimeout(function() {
                window.location.href = 'http://10.18.5.18:8080/#/'
              }, 2000);
                } else {
                  $('.footer-tip').text('发布失败');
                }
              },
              error: function() {
                console.log('出错了');
              }
            });
          }
        }
      });
  }
}
</script>