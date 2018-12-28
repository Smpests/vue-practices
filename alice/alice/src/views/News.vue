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
  h1{
    color: #FF6ECF;
    font-size: 1.8em;
    text-align: center;
  }
</style>
<template>
  <div class="container">
    <h1>消息</h1>
    <div class="pagestyle">
      <div class="list">

      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import $ from 'jquery'

export default {
  mounted: function() {
    $('#login').click(function() {
      var uid = $('#uid_log').val();
      var pw = $('#pw_log').val();
      console.log('进来了',uid,pw);
      $.ajax({
        url: 'http://api.pjhubs.com/notifications',
        async: false,
        data: {
          'page': '1'
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