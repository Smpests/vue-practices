<style scoped>
  .container {
    overflow-y: scroll;
    margin-top: 60px;
  }
  .headline{
  font-size: 20px;
  text-align: center;
  padding: 10px;
  }
  .atext{
      font-size: 18px;
      margin-left: 50px;
      padding: 20px;
  }
  .pagestyle{
      font-size: 15px;
      margin-left: 30px;
      padding: 20px;
  }
  input[type="submit"]{
  /* margin-top: 25px;
  margin-left: 120px; */
  height: 20px;
  background: #2b9c3b;
  color:#bcedff;
  font-weight: bold;
  font-size: 13px;
  }
  input[type="submit"]:hover{
    background:#096568;
    cursor: pointer;
    }
  .list {
    margin: 0px 20px 20px 0px;
  }
  .bstyle{
      font-size: 18px;
      margin: 0;
      padding: 10px;
  }
  .cstyle{
      font-size: 15px;
      margin: 0;
      padding: 10px;
  }
</style>

<template>
  <div class="container">
    <p class="headline">消息</p>
    <div class="pagestyle">
        <div class="list">
      <news-cell content='2' v-for="index in 20" :key="index"></news-cell>
    </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import NewsCell from '@/components/NewsCell.vue'

export default {
  name: 'news',
  components: {
    NewsCell
  }
}
</script>