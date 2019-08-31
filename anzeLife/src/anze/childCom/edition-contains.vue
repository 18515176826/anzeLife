<template>
  <div class="contentBox">
    <div class="issueTit">
      <van-icon @click="getBack" class="getBack" name="arrow-left" />
      <span>内容填写</span>
    </div>
    <vue-html5-editor :content="content"  :height="400" :z-index="1000" :auto-height="true" :show-module-name="false"></vue-html5-editor>
    <van-button class="submitContent" type="primary" size="large">提交</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content:''
    }
  },
  mounted() {

  },
  methods: {
    getBack() {
      this.$router.go(-1);
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.contentBox {
  background: #f0f3f5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.issueTit {
  height: 2.5rem;
  font-size: 16px;
  background: -webkit-linear-gradient(left, #207fff , #6bbfff); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(left, #207fff , #6bbfff); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(left, #207fff , #6bbfff); /* Firefox 3.6 - 15 */
  background: linear-gradient(to left, #207fff , #6bbfff); /* 标准的语法 */
  color: #fff;
  line-height: 2.5rem;
  text-align: center;
}
.submitContent {
  position: fixed;
  bottom: 0;
}
.issueTit {
    height: 2.5rem;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #207fff , #6bbfff); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left, #207fff , #6bbfff); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left, #207fff , #6bbfff); /* Firefox 3.6 - 15 */
    background: linear-gradient(to left, #207fff , #6bbfff); /* 标准的语法 */
    color: #fff;
    line-height: 2.5rem;
    text-align: center;
    position: relative;
    .getBack {
      position: absolute;
      min-width: 3rem;
      height: 100%;
      line-height: 2.5rem;
      text-align: left;
      text-indent: 0.2rem;
      left: 0;
      top: 0;
    }
  }
</style>
