<style scoped>
  .container {
     //overflow-y: scroll;
    margin-top: 60px;
    width: 320px;
    height: 560px;
    border: 2px solid #eee;
    border-radius: 15px;
  }
  input[type="submit"]{
    margin-top: 25px;
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
  h1 {
  color: #FF6ECF;
  font-size: 1.8em;
  text-align: center;
  }
  textarea {
    width: 100%;
  }
  .footer {
      background-image: url('img/huocairen.jpg');
      background-size: cover;
      margin-left: 75px;
      width: 128px;
      height: 96px;
  }
</style>

<template>
  <div class= "container">
    <form action="/views/Write.vue" class="form-group" method="get">
      <div>
        <h1>标题</h1>
        <input class="form-control" autocomplete="off" name="title" type="text">
      </div>
      <div>
        <h1>内容</h1> 
        <textarea name="content" rows="10"></textarea>
        <input autocomplete="off" type="submit" name="finish" class="form-control" value="发布" >
      </div>
    </form>
    <div class="footer"></div>
  </div>
</template>