<template>
  <div class="contentText">
    <div v-html="title" class="title"></div>
    <div v-html="content" class="content"></div>
    <van-button @click="personalCenter" class="submitContent" type="primary" size="large">个人中心</van-button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      title: '',
      content:'',
      dataList: this.$route.query
    }
  },
  watch: {
    dataList(val) {
      this.dataList = this.$route.query;
    }
  },
  mounted() {
    this.pageRendering();
  },
  methods: {
    personalCenter() {
      let path = '/anze/myMge'
      this.$router.push({path})
    },
    pageRendering() {
      let url = '/api/article/queryArticleById';
      this.$axios({
          method:'post',
          url: url,
          data:this.Qs.stringify({    //这里是发送给后台的数据
            id: this.dataList.pathId,
          })
        }).then(res => {
          if(res.data.code == 1) {
            this.content = res.data.data.content
            this.title = res.data.data.title
          }
      }).catch(() => {
        this.$toast.loading({
          type: 'html',
          mask: false,
          duration: 500,
          message: '请求失败...',
        });
      })
    }
  },
  components: {

  }

}
</script>

<style lang="scss" scoped>
.contentText {
  height: calc(100vh - 2.5rem);
  overflow-y: auto;
}
.title {
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  padding: 0.5rem 0.5rem;
}
.content {
  font-size: 0.6rem;
  padding: 0 0.5rem;
  width: 94%;
  text-align: justify;
  div, p {
    width: 100%!important;
    padding: 0 0.5rem;
  }
}
.submitContent {
  position: fixed;
  bottom: 0;
}
</style>
