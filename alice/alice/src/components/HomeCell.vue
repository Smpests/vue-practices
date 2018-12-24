<style scoped>
  @font-face {
  font-family: 'iconfont';  /* project id 952909 */
  src: url('//at.alicdn.com/t/font_952909_fni4mkv42n.ttf') format('truetype');
}

  .homeCell-container {
    background: white;
    padding: 15px 15px 15px 15px;
    margin-top: 20px;
    border-radius: 8px;
  }
  .homeCell-container p {
    font-weight: weight;
  }
  .titleP {
    margin: 0;
    font-weight: bold;
    font-size: 18px;
  }
  .contentP {
    font-weight: weight;
    font-size: 16px;
    line-height: 23px;
  }
  .bottom {
    display: flex;
    align-content: space-between;
    align-items: center;
  }
  .bottom-views {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .bottom-views-span {
    margin: 0;
    width: 30px;
    font-size: 20px;
    font-family: iconfont;
    color: palevioletred;
  }
  .bottom-views-count {
    margin: 0;
    font-size: 14px;
  }
  .bottom-timeP {
    flex: 1;
    margin: 0;
    text-align: right;
    font-weight: weight;
    font-size: 12px;
    color: #1E90FF;
  }
</style>

<template>
  <div class="homeCell-container">
    <p class="titleP"> 北京信息科技大学计算机学院 </p>
    <p class="contentP"> 计算机学院人才多计算机学院人才多计算机学院人才多计算机学院人才多计算机学院人才多计算机学院人才多计算机学院人才多计算机学院人才多计算机学院人才多 </p>
    <div class="bottom">
      <div class="bottom-views">
        <p class="bottom-views-span">&#xeac1;</p>
        <p class="bottom-views-count">25</p>
      </div>
      <p class="bottom-timeP">3 小时前</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeCell',
  props: {
    content: {
      id: '',
      content: '',
      masuser_id: '',
      created_time: '',
      last_updated_time: '',
      read_num: ''
    }
  }
}
</script>
