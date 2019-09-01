<template>
  <div class="homepageBac">
    <swipe-mod :swImg="images"></swipe-mod>
    <main-button :btnsImg="btnsImg"></main-button>
    <handpick :information="information"></handpick>
    <bottom-btn :btnNum="btnNum"></bottom-btn>
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
      btnNum: 0,
      information: [],
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
    }
  },
  methods:{
    inforPush() {
      let inforUrl = '/api/article/queryArticle'
      this.$axios({
          method:'post',
          url: inforUrl,
          data:this.Qs.stringify({    //这里是发送给后台的数据
            type: 1,
            currentPage: 1,
            limit: 10
          })
        }).then(res => {
          if(res.data.data.length > 0) {
            this.information = res.data.data;
          }
      }).catch(() => {
        this.$toast.loading({
          type: 'success',
          mask: false,
          duration: 500,
          message: '请求失败...'
        });
      })
    }
  },
  mounted() {
    this.inforPush();
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
