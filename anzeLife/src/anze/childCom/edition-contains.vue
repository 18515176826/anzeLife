<template>
  <div>
    <div class="issueTit">内容填写</div>
    <vue-html5-editor :content="content"  :height="500" :z-index="1000" :auto-height="true" :show-module-name="false"></vue-html5-editor>

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

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
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
</style>
