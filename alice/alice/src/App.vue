<style>
  body {
    background-color: rgb(240, 245, 246);
  }
  .app {
    padding: 0px;
    margin: 0px;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
    @font-face {
  font-family: 'iconfont';  /* project id 952909 */
  src: url('//at.alicdn.com/t/font_952909_fni4mkv42n.ttf') format('truetype');
  }
  .homeCell-container {
    background: #eee;
    padding: 15px 15px 15px 15px;
    margin-top: 20px;
    border-radius: 8px;
    //cursor: none;
  }
  .homeCell-container p {
    font-weight: weight;
  }
  .list .titleP {
    margin: 0;
    font-weight: bold;
    font-size: 18px;
  }
  .list .contentP {
    font-weight: weight;
    font-size: 16px;
    line-height: 23px;
  }
  .list .bottom {
    display: flex;
    align-content: space-between;
    align-items: center;
  }
  .list .bottom-views {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .list .bottom-views-span {
    margin: 0;
    width: 30px;
    font-size: 20px;
    font-family: iconfont;
    color: palevioletred;
  }
  .list .bottom-views-count {
    margin: 0;
    font-size: 14px;
  }
  .list .bottom-timeP {
    flex: 1;
    margin: 0;
    text-align: right;
    font-weight: weight;
    font-size: 12px;
    color: #1E90FF;
  }
  .list input[type="submit"]{
  /* margin-top: 25px;
  margin-left: 120px; */
  height: 20px;
  background: #2b9c3b;
  color:#bcedff;
  font-weight: bold;
  font-size: 13px;
  }
  .list input[type="submit"]:hover{
    background:#096568;
    cursor: pointer;
    }
</style>
<template>
  <div class="app">
    <nav-header></nav-header>
    <router-view/>    
  </div>
</template>

<script>
import navHeader from './components/NavHeader.vue'
import 'normalize.css'

export default {
  components: {
    navHeader: navHeader
  },
}
</script>
