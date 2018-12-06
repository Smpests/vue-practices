<style scoped>
  @font-face {
    font-family: navHeaderIconFont;
    src: url('//at.alicdn.com/t/font_952909_u3d3973k6re.ttf');
  }
  .wrapper {
    background-color: #3A4953;
    flex: 1;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    font-weight: bold;
    height: 44px;
    line-height: 42px;
    padding: 0 1em;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }
  ul {
    padding:0;
    margin: 0 auto;
    display: flex;
    align-content: center;
    align-items: center;
  }
  ul li {
    flex: 1;
    font-size: 16px;
    text-align: center;
    font-family: navHeaderIconFont;
    list-style-type:none;
    float:left;
    display:block;
    color:#fff;
  }
  li:active {
    background-color:cadetblue
  }
</style>

<template>
  <div class="wrapper">
    <ul>
      <li @click="changeItemStatus(0)">&#xeaf0;
        <span v-show="checkStatus[0]" v-bind="checkStatus" @click="onSelected(event, 0)">海洋</span>
      </li>
      <li @click="changeItemStatus(1)">&#xeaf8;
        <span v-show="checkStatus[1]" v-bind="checkStatus" @click="onSelected(event, 1)">灵感</span>
      </li>
      <li @click="changeItemStatus(2)">&#xeb43;
        <span v-show="checkStatus[2]" v-bind="checkStatus" @click="onSelected(event, 2)">通知</span>
      </li>
      <li @click="changeItemStatus(3)">&#xeb24;
        <span v-show="checkStatus[3]" v-bind="checkStatus" @click="onSelected(event, 3)">alice</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navHeader',
  props: {},
  data () {
    return {
      checkStatus: [true, false, false, false]
    }
  },
  methods: {
    changeItemStatus (index) {
      if (this.checkStatus[index]) {
        this.updateCheckStatusBool(false)
        this.checkStatus.splice(index, index - 1, false)
      } else {
        this.updateCheckStatusBool(false)
        this.checkStatus.splice(index, index - 1, true)
      }
    },
    updateCheckStatusBool (booleanValue) {
      this.checkStatus.length = 0
      this.checkStatus = [booleanValue, booleanValue, booleanValue, booleanValue]
    },
    onSelected (event, index) {
      this.$emit()
    }
  }
}
</script>
