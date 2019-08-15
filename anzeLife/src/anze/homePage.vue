<template>
  <div class="homepageBac">
    <swipe-mod :swImg="images"></swipe-mod>
    <main-button :btnsImg="btnsImg"></main-button>
    <handpick></handpick>
    <bottom-btn :btmBtns="btmBtns"></bottom-btn>
  </div>
</template>
<script>
import swipeMod from '@/anze/childCom/swipe-mod'
import smainButton from '@/anze/childCom/main-button'
import handpick from '@/anze/childCom/handpick'
import bottomBtn from '@/anze/childCom/bottom-btn'
export default {
  name: 'home',
  data() {
    return {
      images: [
        {
          imgs: 'https://img.yzcdn.cn/vant/apple-1.jpg'
        },
        {
          imgs: 'https://img.yzcdn.cn/vant/apple-2.jpg'
        }
      ],
      btnsImg: [
        {
          imgs: require('@/img/boyImg/icon_1.png'),
          bName: '基层服务'
        },
        {
          imgs: require('@/img/boyImg/icon_2.png'),
          bName: '惠民政策'
        },
        {
          imgs: require('@/img/boyImg/icon_3.png'),
          bName: '本地资讯'
        },
        {
          imgs: require('@/img/boyImg/icon_4.png'),
          bName: '公共教育'
        },
        {
          imgs: require('@/img/boyImg/icon_5.png'),
          bName: '失误招领'
        },
        {
          imgs: require('@/img/boyImg/icon_6.png'),
          bName: '房屋租赁'
        },
        {
          imgs: require('@/img/boyImg/icon_7.png'),
          bName: '招聘信息'
        },
        {
          imgs: require('@/img/boyImg/icon_8.png'),
          bName: '全城优惠'
        }
      ],
      btmBtns: [
        {
          imgName: '\ue60e',
          modBtnMame: '首页'
        },
        {
          imgName: '\ue609',
          modBtnMame: '发布'
        },
        {
          imgName: '\ue60c',
          modBtnMame: '精选'
        },
        {
          imgName: '\ue60d',
          modBtnMame: '我的'
        }
      ]
    }
  },
  components: {
    'swipe-mod': swipeMod,
    'main-button': smainButton,
    'handpick': handpick,
    'bottom-btn': bottomBtn
  }
}
</script>

<style lang="scss" scoped>
  .homepageBac {
    background: #e7f0f7;
  }
</style>
