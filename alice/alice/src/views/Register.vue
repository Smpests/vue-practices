<style scoped>
  .container {
    //overflow-y: scroll;
    margin-top: 60px;
    //width: 320px;
    //height: 560px;
    height: 92.5%;
    background-image: url('img/715495.jpg');
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
  color: red;
  display: none;
}
</style>

<template>
  <div class="container">
    <div class="input-container">
      <div class="form-group">
        <h1>Alice</h1>
        <div class="input-group">
          <span class="input-group-addon">账 号</span>
          <input id="user_phone" class="form-control" type="text" autocomplete="off" placeholder="请输入手机号" oninput="value=value.replace(/[^\d]/g,'')" maxlength="11">
        </div>
        <div class="block-edge"></div>
        <div class="input-group">
          <span class="input-group-addon">密 码</span>
          <input id="pw" maxlength="16" class="form-control" type="password" autocomplete="off">
        </div>
        <input type="button" class="form-control" value="注册" id="register" name="register" >
        <div class="block-edge"></div>
        <div class="block-edge"></div>
        <p class="tips">已有账号？<router-link to="/me" class="navbar-link">返回登陆</router-link></p>
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
    $('#register').click(function() {
      var uid  = $('#user_phone').val();
      //var pw = md5($('#pw').val().split('').reverse().join(''));
      var pw = $('#pw').val();
      var re = /^1[34578]\d{9}$/;
      if (pw.length < 6) {
        $('.footer-tip').text('注册失败(密码至少6位)');
        $('.footer-tip').fadeIn();
        $('.footer-tip').fadeOut(3000);
      } else if(!re.test(uid)) {
        $('.footer-tip').text('注册手机格式有误');
        $('.footer-tip').fadeIn();
        $('.footer-tip').fadeOut(3000);
      } else {
        console.log('注册账号:', uid);
        console.log('注册密码:', pw);
        $.ajax({
          url: 'http://api.pjhubs.com/masuser/createmasuser',
          async: false,
          data: {
            'phoneNumber': uid,
            'uid': uid,
            'nick_name': 'alice_' + uid,
            'password': pw
          },
          type: 'get',
          contentType: "application/json;charset=utf-8",
          dataType: 'jsonp',
          jsonp: 'callback',
          jsonpCallback: 'flightHandler',
          success: function(result) {
            if (result.msgCode == 666) {
              $('.footer-tip').text('载入中...');
              $('.footer-tip').fadeIn();
              setTimeout(function() {
                window.location.href = 'http://10.18.5.18:8080/#/me'
              }, 3000);
            } else {
              $('.footer-tip').text('注册失败' + result.msg);
              $('.footer-tip').fadeIn();
              $('.footer-tip').fadeOut(3000);
            }
          },
          error: function(result) {
            alert('服务器连接失败');
          }
        });
      }
    });
  }
}
</script>