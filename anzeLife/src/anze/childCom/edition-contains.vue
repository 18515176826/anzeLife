<template>
  <div class="contentBox">
    <div class="issueTit">
      <!-- <van-icon @click="getBack" class="getBack" name="arrow-left" /> -->
      <span>内容填写</span>
    </div>
    <vue-html5-editor class="editor-h" :content="content" @change="updateData"  :height="400" :z-index="1000" :auto-height="true" :show-module-name="false"></vue-html5-editor>
    <van-button @click="articleSubmit" class="submitContent" type="primary" size="large">确认发布</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    this.StopBack();
  },
  destroyed() {
    // 当页面销毁必须要移除这个事件，vue不刷新页面，不移除会重复执行这个事件
    window.removeEventListener("popstate", this.onBrowserBack, false);
  },
  methods: {
    StopBack() { //阻止默认返回事件
      // 按需使用：A→B→C就需要页面一进来的时候，就添加一个历史记录
      window.history.pushState(null, null, document.URL);
      // 给window添加一个popstate事件，拦截返回键，执行this.onBrowserBack事件，addEventListener需要指向一个方法
      window.addEventListener("popstate", this.onBrowserBack, false);
    },
    updateData(e = "") {
      let imgA = e.replace(/<img width="100%"/g, "<img");
      let imgB = imgA.replace(/<img/g, '<img width="100%"');
      this.content = imgB
    },
    // getBack() {
    //   this.$router.go(-1);
    // },
    articleSubmit() {
      let parameter = this.$route.query.parameter
      // let url= '/api/article/addArticle';
      let url= `/maven-SSM/article/addArticle`;
      const lod = this.$toast.loading({
        mask: true,
        duration: 0,
        message: '加载中...',
      });
      this.$axios({
          method:'post',
          url: url,
          data:this.Qs.stringify({    //这里是发送给后台的数据
            title: parameter.title,
            type: parameter.type,
            content: this.content
          })
        }).then(res => {
          let path = '/anze/contentDetails';
          let self =this
          if(res.data.code == 1) {
            lod.clear()
            this.$toast.loading({
              type: 'success',
              mask: false,
              duration: 500,
              message: '发布成功...',
              onClose() {
                self.$router.push({path, query:{pathId: res.data.data}})
              }
            });
          } else {
            let path = '/anze/postMessage'
            let self = this;
            lod.clear()
            this.$toast.loading({
              type: 'html',
              mask: false,
              duration: 500,
              message: '发送失败...',
              onClose() {
                self.$router.push({path})
              }
            });
          }
      }).catch(() => {
        this.$toast.loading({
          type: 'html',
          mask: false,
          duration: 500,
          message: '请求失败...',
        });
      })
    },
    onBrowserBack() {
      // 阻止返回替换的事件
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.editor-h {
  max-height: 89vh;
  overflow-y: auto;
}
.shadeShow {
  z-index: 1080!important;
}
.contentBox {
  background: #f0f3f5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 2.5rem;
}
.issueTit {
  height: 2.5rem;
  font-size: 0.8rem;
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
