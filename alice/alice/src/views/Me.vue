<style scoped>
  .container {
    //overflow-y: scroll;
    margin-top: 60px;
    width: 320px;
    height: 560px;
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
  tex-aligin: center;
}
</style>

<template>
  <div class="container">
    <div class="input-container">
      <div class="form-group">
        <h1>Alice</h1>
        <div class="input-group">
          <span class="input-group-addon">账 号</span>
          <input name="uid" id="uid_log" class="form-control" type="text" autocomplete="off">
        </div>
        <div class="block-edge"></div>
        <div class="input-group">
          <span class="input-group-addon">密 码</span>
          <input name="pw" id="pw_log" class="form-control" type="password" autocomplete="off">
        </div>
        <input type="button" id="login" class="form-control" value="登陆" name="login">
        <p class="pull-left"><input type="checkbox" name="rempas">  记住密码</p>
        <p class="pull-right">忘记密码</p>
        <div class="block-edge"></div>
        <div class="block-edge"></div>
        <p class="tips">没有账号？<router-link to="/register" class="navbar-link">立即注册</router-link></p>
      </div>
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
      var pw = md5($('#pw_log').val().split('').reverse().join('') + new Date().getTime());
      console.log('登陆密码:', pw);
      $.ajax({
        url: 'http://api.pjhubs.com/masuser/login',
        async: false,
        data: {
          'phoneNumber': uid,
          'uid': uid,
          'nick_name': 'alice_' + uid,
          'sign': pw,
          'timestamp': new Date().getTime()
        },
        type: 'get',
        contentType: "application/json;charset=utf-8",
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'flightHandler',
        success: function(result) {
          if (result.msgCode == 666) {
            alert('登陆成功');
          } else {
            alert(result.msg);
          }
        },
        error: function(result) {
          alert('连接服务器失败!');
        }
      });
    });
  }
}
</script>