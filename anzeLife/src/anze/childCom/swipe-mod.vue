<template>
  <div class="swiBoy">
    <van-swipe :autoplay="3000" indicator-color="white" class="swHeight">
      <van-swipe-item v-for="(img, ind) in images" :key="ind">
        <img v-bind:src='img.imgs' alt="">
      </van-swipe-item>
    </van-swipe>
    <van-search class="seek" background='rgba(0, 0, 0, 0.1)' placeholder="请输入搜索关键词" v-model="seekVal"/>
  </div>
</template>

<script>
import swipeMod from '@/anze/childCom/swipe-mod'
export default {
  name: 'childCom',
  watch: {
    demo(val) {
      this.value = this.demo;
    }
  },
  props: ['swImg'],
  data() {
    return {
      images: '',
      seekVal: ''
    }
  },
  mounted() {
    this.images = this.swImg
  }
}
</script>

<style lang="scss" scoped>
.swiBoy {
  position: relative;
  .seek {
    position: absolute;
    top: 0;
    width: 100%;
    }
  }
.swHeight {
  height: 9rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
