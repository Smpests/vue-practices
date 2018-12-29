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
      <div class="list" id="msg_list">

      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import $ from 'jquery'

export default {
  mounted: function() {
    $(document).ready(function() {
      $.ajax({
          url: 'http://api.pjhubs.com/notifications',
          async: false,
          data: {
            'page': '1',
            'uid': '20181228',
            'nick_name': 'alice_20181228'
          },
          type: 'get',
          contentType: "application/json;charset=utf-8",
          dataType: 'jsonp',
          jsonp: 'callback',
          jsonpCallback: 'flightHandler',
          success: function(result) {
              console.log(result);
            if (result.msgCode == 666) {
              var notifications = result.msg.notifications;
              var list = $('#msg_list');
              for (var i = 0;i < notifications.length;i++) {
                var container = $('<div class="newsCell-container"></div>');
                //container.addClass("homeCell-container");
                console.log(notifications[i].p_uid);
                var title = $('<h1 class="titleP"> ' + notifications[i].p_uid + '</h1>');
                var content = $('<p class="contentP"> ' + notifications[i].content['content'] + '</p>');
                var contentReply = $('<p class="contentP"> ' + notifications[i].p_content + '</p>');
                var reply = $('<input type="submit" name="finish" value="回复" >');
                var bottom_container = $('<div class="bottom"></div>');
                var bottom_views = $('<div class="bottom-views"></div>');
                var icon = $('<p class="bottom-views-span">&#xeac1;</p>');
                //var read_num = $('<p class="bottom-views-count" style="margin: 0;font-size: 14px;"> ' + notifications[i].p_created_time + '</p>');
                var created_time = $('<p class="bottom-timeP"> ' + notifications[i].p_created_time + '</p>');
                icon.appendTo(bottom_views);
                //read_num.appendTo(bottom_views);
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
  }
}
</script>