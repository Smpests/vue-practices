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
  margin-top: 25px;
  margin-left: 120px;
  height: 35px;
  background: #357eb8;
  color:#bcedff;
  font-weight: bold;
  font-size: 16px;
  }
  input[type="submit"]:hover{
    background:#0e62a3;
    cursor: pointer;
    }
  .list {
    margin: 55px 20px 20px 20px;
  }
</style>

<template>
  <div class="container">
    <p class="headline">标题</p>
    <input class="atext" type="text">
    <p class="headline">内容</p>
    <div class="pagestyle">
        <textarea name="page" cols="30" rows="10"></textarea>
        <form action="./views/Write.vue" method="get">
        <input type="submit" name="finish" value="发布" >
        </form>
    </div>
  </div>
</template>