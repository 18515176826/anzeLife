<template>
  <div class="footer_sty">
    <van-row>
      <van-col v-for="(data, ind) in btmBtns" :key="ind" span="6">
        <div class="btmBtns" :class="{'firstStyle': ind==btnNum}">
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
    "btmBtns": {
      type: Array
    },
    "btnNum": {
      type: Object
    }
  },
  data() {
    return {

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
    .btmBtns {
      text-align: center;
      color: #b8c0ca;
      padding-top: 0.2rem;
      > i {
        font-size: 1.2rem;
      }
      > p {
        font-size: 14px;
      }
    }
    .firstStyle {
      color: #6d737b;
    }
  }
</style>
