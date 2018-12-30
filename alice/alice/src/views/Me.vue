<style scoped>
  .container {
    //overflow-y: scroll;
    margin-top: 60px;
    //width: 320px;
    //height: 560px;
    height: 92.5%;
    background-image: url('img/666406.jpg');
    background-size: cover;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
input[type="button"]{
  margin-top: 25px;
  height: 35px;
  background: rgba(0, 191, 255, 0.6);
  color: #eeffff;
  font-weight: bold;
  font-size: 16px;
}
input[type="button"]:hover{
  background: rgba(30, 144, 255, 0.6);
  cursor: pointer;
}
.container input[type="text"], .container input[type="password"] {
  background: rgba(255, 255, 255, 0.5);
}
input[type="password"] {
  min_width: 6;
}
h1 {
  color: #FF6ECF;
  font-size: 3em;
  text-align: center;
}
.block-edge {
  height: 12px;
}
.head{
  position: absolute;
}
.container .input-container {
  margin-top: 30%;
}
.tips {
  text-align: center;
}
.footer-tip {
  dispaly:none;
  color: red;
}
</style>

<template>
  <div class="container">
    <div class="input-container">
      <div class="form-group">
        <h1>Alice</h1>
        <div class="input-group">
          <span class="input-group-addon">账 号</span>
          <input name="uid" id="uid_log" oninput="value=value.replace(/[^\d]/g,'')" class="form-control" type="text" autocomplete="off">
        </div>
        <div class="block-edge"></div>
        <div class="input-group">
          <span class="input-group-addon">密 码</span>
          <input name="pw" id="pw_log" class="form-control" type="password" maxlength="16" autocomplete="off">
        </div>
        <input type="button" id="login" class="form-control" value="登陆" name="login">
        <p class="pull-left"><input type="checkbox" name="rempas">  记住密码</p>
        <p class="pull-right">忘记密码</p>
        <div class="block-edge"></div>
        <div class="block-edge"></div>
        <p class="tips">没有账号？<router-link to="/register" class="navbar-link">立即注册</router-link></p>
      </div>
    </div>
    <div style="text-align:center;">
      <span class="footer-tip"></span>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import md5 from 'js-md5'

export default {
  mounted: function() {
    $('#login').click(function() {
      var uid = $('#uid_log').val();
      var pw = $('#pw_log').val();
      //var pw_md5 = md5($('#pw_log').val().split('').reverse().join(''));

      //var pw_md5 = pw;
      console.log('登陆账号:', uid);
      console.log('登陆密码(加密前):', pw);
      //console.log('登陆密码(加密后):', pw_md5);
      $.ajax({
        url: 'http://api.pjhubs.com/masuser/login',
        async: false,
        data: {
          //'phoneNumber': uid,
          //'uid': uid,
          //'nick_name': 'alice_' + uid,
          //'sign': pw,
          'phoneNumber': '18323135254',
          'uid': '18323135254',
          'nick_name': 'alice_' + '18323135254',
          'sign': '18323135254',
          'timestamp': new Date().getTime()
        },
        type: 'get',
        contentType: "application/json;charset=utf-8",
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'flightHandler',
        success: function(result) {
          if (result.msgCode == 666) {
            $('.footer-tip').text('登陆成功,获取中...');
            $('.footer-tip').fadeIn();
            $('#uid').attr('value', result.msg.masuser['uid']);
            $('#user_nick_name').attr('value', 'alice_' + '18323135254');

            console.log('alice_' + '18323135254');
          } else {
            $('.footer-tip').text('登陆失败' + result.msg);
            $('.footer-tip').fadeIn();
            $('.footer-tip').fadeOut(3000);
          }
        },
        error: function(result) {
          $('.footer-tip').text('连接服务器失败~');
        }
      });
    });
  }
}
</script>