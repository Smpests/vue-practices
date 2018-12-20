<style scoped>
  @font-face {
  font-family: 'iconfont';  /* project id 952909 */
  src: url('//at.alicdn.com/t/font_952909_fni4mkv42n.eot');
  src: url('//at.alicdn.com/t/font_952909_fni4mkv42n.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_952909_fni4mkv42n.woff') format('woff'),
  url('//at.alicdn.com/t/font_952909_fni4mkv42n.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_952909_fni4mkv42n.svg#iconfont') format('svg');
}

  .homeCell-container {
    background: white;
    padding: 0.1px 15px 0.1px 15px;
    margin-top: 20px;
    border-radius: 8px;
  }
  .homeCell-container p {
    font-weight: weight;
  }
  .titleP {
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
    /* flex: 1; */
    align-content: space-between;
    align-items: center;
    justify-content: baseline;
  }
  .bottom-views-span {
    font-size: 20px;
    font-family: iconfont;
    color: palevioletred;
  }
  .bottom-views-count {
    font-size: 14px;
  }
  .bottom-timeP {
    flex: 1;
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
        <span class="bottom-views-span">&#xeac1;</span>
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
