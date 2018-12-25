<style scoped>
  .container {
    overflow-y: scroll;
    margin-top: 60px;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    /* width: 80%;
    height: 60%; */
  }
  .headline{
    font-size: 22px;
    text-align: center;
    padding: 20px;
}
input[type="text"],
input[type="submit"]{
  -webkit-appearance: none;
  -webkit-animation: none;
  display: block;
  margin: 0 auto;
  font-size: 15px;
  width: 240px;
}
input[type="text"]{
  height: 35px;
  border-radius: 3px;
  border:1px solid #cBcccf;
  color:#6a6f77;
  outline: 0;
}
input[type="password"],
input[type="password"]{
    margin-left: 0px;
  height: 35px;
  border-radius: 3px;
  border:1px solid #cBcccf;
  color:#6a6f77;
  outline: 0;
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
.astyle{
  margin: 5px 0 5px 0px;
  font-size: 18px;
  color: #6a6f77;
}
.cstyle{
  display: block;
  float: left;
  margin-left: 0px;
  font-size: 15px;
}
.cstyle a{
  text-decoration: none;
}
</style>

<template>
  <div class="container">
    <div class="input-container">
      <form action="#" method="get">
        <p class="headline">用户注册</p>
        <p class="astyle">用户名：</p>
        <input class="astyle" type="text" placeholder="请输入用户名">
        <p class="astyle">密码：</p>
        <input class="astyle" type="password" placeholder="请输入密码">
        <input type="submit" value="注册" name="register" >
        <p class="cstyle">已有账号   <router-link to="/me">返回登陆</router-link></p>
      </form>
    </div>
  </div>
</template>
