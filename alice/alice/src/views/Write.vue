<style scoped>
  .container {
     //overflow-y: scroll;
    margin-top: 60px;
    width: 320px;
    height: 560px;
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
      width: 150px;
      height: 150px;
  }
  .text-count {
    color: red;
    font-style: italic;
  }
</style>

<template>
  <div class= "container">
    <div class="form-group" method="get">
      <div>
        <h1>标题</h1>
        <input class="form-control" autocomplete="off" name="title" type="text">
      </div>
      <div>
        <h1>内容</h1> 
        <textarea id="content" maxlength="200" name="content" rows="10" placeholder="分享你的心事..."></textarea>
        <div class="pull-right"> 
          还可输入<span class="text-count">200</span>字
        </div>
        <input autocomplete="off" id="publish" type="button" name="finish" class="form-control" value="发布" >
      </div>
    </div>
    <div class="footer"></div>
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
      $.ajax({
        url: 'http://api.pjhubs.com/blog/createBlog',
          async: false,
          data: {
            'uid': '6496237762',
            'nick_name': 'alice_20181228',
            'content': content
          },
          type: 'get',
          contentType: "application/json;charset=utf-8",
          dataType: 'jsonp',
          jsonp: 'callback',
          jsonpCallback: 'flightHandler',
          success: function(result) {
            if (result.msgCode == 666) {
                alert(result.msg + ', 去主页查看');
            } else {
              console.log('uid'+ '20181228' + '发布失败, 原因' + result.msg);
            }
          },
          error: function() {
            console.log('出错了');
          }
        });
      });
  }
}
</script>