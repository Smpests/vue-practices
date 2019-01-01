<style scoped>
  .container {
    //overflow-y: scroll;
    padding-top: 60px;
    //width: 320px;
    //height: 560px;
    height: 100%;
    width: 100%;
    position: absolute;
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
  padding-top: 40%;
  width: 100%;
  height: 100%;
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
          <span class="input-group-addon">昵 称</span>
          <input id="register_nick_name" class="form-control" type="text" autocomplete="off" placeholder="昵称最大7位" maxlength="7" required>
        </div>
        <div class="block-edge"></div>
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
      <div style="text-align:center;">
        <span class="footer-tip"></span>
      </div>
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
      var nick_name = $('#register_nick_name').val();
      var re = /^1[34578]\d{9}$/;
      if(nick_name == '') {
        $('.footer-tip').text('注册失败(昵称为必填项)');
        $('.footer-tip').fadeIn();
        $('.footer-tip').fadeOut(3000);
      } else if(pw.length < 6) {
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
            'nick_name': '',
            'password': pw
          },
          type: 'get',
          contentType: "application/json;charset=utf-8",
          dataType: 'jsonp',
          jsonp: 'callback',
          jsonpCallback: 'flightHandler',
          success: function(result) {
            if (result.msgCode == 666) {
              var register_uid = result.msg.masuser['uid'];
              $('.footer-tip').text('载入中...');
              $('.footer-tip').fadeIn();
              $('.footer-tip').fadeOut(3000);
              $.ajax({
                url: 'http://api.pjhubs.com/masuser/updateUser',
                async: false,
                data: {
                  'uid': register_uid,
                  'nick_name': nick_name
                },
                type: 'get',
                contentType: "application/json;charset=utf-8",
                dataType: 'jsonp',
                jsonp: 'callback',
                jsonpCallback: 'flightHandler',
                success: function(result) {
                  console.log('uid', uid);
                  console.log('nick_name', nick_name);
                  console.log(result);
                  if (result.msgCode == 666) {
                    $('user_nick_name').attr('value', result.msg.masuser['nick_name']);
                    console.log('昵称已载入');
                  } else {
                    console.log('写入昵称失败');
                  }
                },
                error: function(result) {
                  alert('服务器连接失败');
                }
              });
              setTimeout(function() {
                window.location.href = 'http://192.168.109.1:8080/#/me'
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