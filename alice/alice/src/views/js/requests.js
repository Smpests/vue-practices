/*
* @Author: Lqs
* @Date:   2018-12-27 09:25:23
* @Last Modified by:   Lqs
* @Last Modified time: 2018-12-27 14:46:29
*/

// 测试域名 http://api.pjhubs.com

// window.onload = function () {
//   var vm = new Vue(
//       element: '#page_list',
//       data: {
//         msg: ''
//       },
//       // 获取服务器上文章
//       methods: {
//         get: function() {
          // this.$http.get('http://api.pjhub.com/blog', {emulateJson: true, timeout: 1000}).then(function(result) {
          //   document.write(result.body);
          // }, function(result) {
          //   document.write('<small style="color: #eee">无连接，请检查网络!</small>');
          // });
//         }
//       }
//   );
// }
// import $ from 'jquery'
// import Vue from 'vue'
// export default {
//   getBlog: fucntion() {
//     var vm = new Vue({
//         element: '#page_list',
//         data: {
//           msg: ''
//         },
//         // 获取服务器上文章
//         methods: {
//           get: function() {
//             this.$http.get('http://api.pjhub.com/blog', {emulateJson: true, timeout: 1000}).then(function(result) {
//               document.write(result.body);
//             }, function(result) {
//               document.write('<small style="color: #eee">无连接，请检查网络!</small>');
//             });
//           }
//       });
//     }
// }
function getBlog(){
	console.log('测试成功');
}
export {
	getBlog
}