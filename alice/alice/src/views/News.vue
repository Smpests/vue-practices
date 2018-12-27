<style scoped>
  .container {
    overflow-y: auto;
    margin-top: 60px;
    width: 320px;
    height: 560px;
    border: 2px solid #eee;
    border-radius: 15px;
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