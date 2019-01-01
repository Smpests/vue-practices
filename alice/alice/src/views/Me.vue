<style scoped>
  .container {
    //overflow-y: scroll;
    padding-top: 60px;
    //width: 320px;
    //height: 560px;
    height: 100%;
    width: 100%;
    background-image: url('img/666406.jpg');
    background-size: cover;
    position: absolute;
    border: 3px black solid;
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
.container h1 {
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
  height: 100%;
  width: 100%;
  padding-top: 40%;
}
.tips {
  text-align: center;
}
.footer-tip {
  dispaly:none;
  color: red;
}
.user-detail-container {
  z-index: 999;
  height: 100%;
  width: 100%;
  display: none;
  //background-color: #eee;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.thumbnail {
  margin-bottom: 0px;
}
.user-detail-container h1 {
  color: #FF6ECF;
  font-size: 1.8em;
  text-align: center;
}
.person-msg {
  width: 100%;
  height: 180px;
}
.msg > div {
  margin-top: 15px;
  color: #FF6ECF;
  display: block;
  font-size: 1.2em;
}
.nick-name {
  color: #888;
  font-size: 1.4em;
}
.user-id {
  color: #888;
  font-size: 1.4em;
}
.func-list ul {
  padding-left: 0;
}
.func-list li {
  padding-top: 15px;
  padding-bottom: 15px;
  list-style: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #888;
}
.func-list li > span {
  padding: 0 30px;
  color: #333;
}
.func-list li:hover {
  background-color: #eee;
}
.msg li {
  padding: 6px 0;
  list-style: none;
  text-align: center;
}
.msg ul {
  padding-left: 0;
}
hr {
  margin: 0;
  border-top: 1px solid #ddd;
}
</style>

<template>
  <div class="container">
    <div class="input-container">
      <div class="form-group">
        <h1>Alice</h1>
        <div class="input-group">
          <span class="input-group-addon">账 号</span>
          <input name="uid" id="uid_log" oninput="value=value.replace(/[^\d]/g,'')" class="form-control" type="text" maxlength="11" autocomplete="off" placeholder="请输入手机号">
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
        <div style="text-align:center;">
          <span class="footer-tip"></span>
        </div>
      </div>
    </div>
    <div class="user-detail-container">
      <h1>个人信息</h1>
      <div class="person-msg">
        <div class="thumbnail col-xs-5 col-sm-3 col-md-1">
          <img src="@/views/img/head.png" alt="head">
        </div>
        <div class="msg col-xs-7 col-sm-9 col-md-11">
          <ul>
            <li><span class="nick-name"></span></li>
            <li><span class="user-id"></span></li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="func-list">
        <ul>
          <li id="my_blog"><span class="glyphicon glyphicon-pencil"></span> 我发布的</li>
          <hr>
          <li id="favourite"><span class="glyphicon glyphicon-heart"></span> 点赞过的</li>
          <hr>
          <li id="edit_info"><span class="glyphicon glyphicon-edit"></span> 修改个人信息</li>
          <hr>
          <li id="logout"><span class="glyphicon glyphicon-log-out"></span> 登出</li>
          <router-link to="/" id="to_my_blog" hidden></router-link>
          <router-link to="/" id="to_favourite" hidden></router-link>
          <router-link to="/" id="to_edit_info" hidden></router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import md5 from 'js-md5'

export default {
  mounted: function() {
    $(document).ready(function() {
      if ($('#uid').val() != '') {
        $('.input-container').toggle();
        $('.container').css('background-image', 'url("")');
        $('.user-id').text($('#uid').val());
        $('.nick-name').text($('#user_nick_name').val());
        $('.user-detail-container').toggle();
      }
      $('#favourite').click(function() {
        document.getElementById('to_favourite').click();
      });
      $('#edit_info').click(function() {
        document.getElementById('to_edit_info').click();
      });
      $('#my_blog').click(function() {
        document.getElementById('to_my_blog').click();
      });
      $('#logout').click(function() {
        $('#uid').attr('value', '');
        $('#user_nick_name').attr('value', '');
        window.location.reload();
      });
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
          'phoneNumber': uid,
          'uid': uid,
          'nick_name': 'alice_' + uid,
          'sign': pw,
          //'phoneNumber': '110',
          //'uid': '110',
          //'nick_name': '',
          //'sign': '123456',
          'timestamp': new Date().getTime()
        },
        type: 'get',
        contentType: "application/json;charset=utf-8",
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'flightHandler',
        success: function(result) {
          if (result.msgCode == 666) {
            console.log('result', result);
            $('.footer-tip').text('登陆成功,获取中...');
            $('.footer-tip').fadeIn();
            $('.footer-tip').fadeOut(3000);
            $('#uid').attr('value', result.msg.masuser['uid']);
            //admin -> result.msg.masuser['nick_name']
            $('#user_nick_name').attr('value', result.msg.masuser['nick_name']);
            $('.input-container').toggle();
            $('.container').css('background-image', 'url("")');
            $('.nick-name').text(result.msg.masuser['nick_name']);
            $('.user-id').text(result.msg.masuser['uid']);
            $('.user-detail-container').toggle();
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
    });
  }
}
</script>