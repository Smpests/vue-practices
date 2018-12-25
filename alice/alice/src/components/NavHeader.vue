<style scoped>
  @font-face {
    font-family: navHeaderIconFont;
    src: url('//at.alicdn.com/t/font_952909_fni4mkv42n.ttf')
  }
  .wrapper {
    /* background-color: #3A4953; */
    background-color: #fff;
    flex: 1;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    font-weight: weight;
    line-height: 60px;
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
    font-size: 24px;
    text-align: center;
    font-weight: weight;
    font-family: navHeaderIconFont;
    list-style-type:none;
    float:left;
    display:block;
    /* color:#fff; */
  }
  li:active {
    background-color:lightblue;
  }
  .item-active {
    text-decoration: none;
    color: gray;
  }
  .item-active:active {
    background-color:rgba(0, 0, 0, 0.1);
  }
</style>

<template>
  <div class="wrapper">
    <ul>
      <li @click="changeItemStatus(0)">
        <router-link class="item-active" to="/">&#xeaf0;</router-link>
        <!-- <span>&#xeaf0;</span>
        <span class="item-active"
            v-show="checkStatus[0]"
            v-bind="checkStatus"
            @click="onSelected(event, 0)">
        </span> -->
      </li>
      <li @click="changeItemStatus(1)">
        <router-link class="item-active" to="/write">&#xeaf8;</router-link>
        <!-- <span>&#xeaf8;</span>
        <span class="item-active"
            v-show="checkStatus[1]"
            v-bind="checkStatus"
            @click="onSelected(event, 1)">
        </span> -->
      </li>
      <li @click="changeItemStatus(2)">
        <router-link class="item-active" to="/news">&#xeb43;</router-link>
        <!-- <span>&#xeb43;</span>
        <span class="item-active"
            v-show="checkStatus[2]"
            v-bind="checkStatus"
            @click="onSelected(event, 2)">
        </span> -->
      </li>
      <li @click="changeItemStatus(3)">
        <router-link class="item-active" to="me">&#xeb24;</router-link>
        <!-- <span>&#xeb24;</span>
        <span class="item-active"
            v-show="checkStatus[3]"
            v-bind="checkStatus"
            @click="onSelected(event, 3)">
        </span> -->
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
