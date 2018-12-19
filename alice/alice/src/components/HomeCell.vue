<style module>
  .homeCell-contanier {
    background: white;
    height: 100px;
    border-radius: 8px;
    font-weight: bold;
  }

  .homeCell-contanier p {
    color: black;
    font-size: 46px;
  }
</style>

<template>
  <div class="homeCell-container">
    <h3> 北京信息科技大学计算机学院 </h3>
    <p> 计算机学院人才多计算机学院人才多计算机学院人才多计算机学院人才多计算机学院人才多计算机学院人才多计算机学院人才多计算机学院人才多计算机学院人才多 </p>
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
