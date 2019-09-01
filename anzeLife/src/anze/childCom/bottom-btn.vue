<template>
  <div class="footer_sty">
    <van-row>
      <van-col v-for="(data, ind) in btmBtns" :key="ind" span="6">
          <div
            @click="goToUrl(data.jumpLink)"
            class="btmBtns"
            :class="{'firstStyle': ind===btnNum}">
            <i class="iconfont">{{data.imgName}}</i>
            <p>{{data.modBtnMame}}</p>
          </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>

export default {
  name: 'home',
  props: {
    "btnNum": {
      type: Number
    }
  },
  data() {
    return {
      destination: '',
      btmBtns: [
        {
          imgName: '\ue60e',
          modBtnMame: '首页',
          jumpLink: '/anze/homePage'
        },
        {
          imgName: '\ue609',
          modBtnMame: '发布',
          jumpLink: '/anze/postMessage'
        },
        {
          imgName: '\ue60c',
          modBtnMame: '精选',
          jumpLink: '/anze/selectContent'
        },
        {
          imgName: '\ue60d',
          modBtnMame: '我的',
          jumpLink: '/anze/myMge'
        }
      ]
    }
  },
  methods: {
    goToUrl(path) {
      this.$router.replace(path);
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
  .footer_sty {
    width: 100%;
    height: 2.6rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #dcdcdc;
    .btmBtns {
      text-align: center;
      color: #b8c0ca;
      padding-top: 0.2rem;
      > i {
        font-size: 1.2rem;
      }
      > p {
        font-size: 0.7rem;
      }
    }
    .firstStyle {
      color: #6d737b;
    }
  }
</style>
