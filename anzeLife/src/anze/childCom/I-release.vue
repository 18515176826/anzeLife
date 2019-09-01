<template>
  <div class="handpick">
    <div class="issueTit">
      <van-icon @click="getBack" class="getBack" name="arrow-left" />
      <span>我的发布</span>
    </div>
    <van-search class="seek" background='rgba(0, 0, 0, 0.1)' placeholder="请输入搜索关键词" v-model="seekVal"/>
    <ul class="todayList">
      <li>
        <div class="contentMod">
          <img src="@/img/boyImg/icon_8.png" alt="">
          <div>
            <p class="hanTit">安泽县科协十项科普惠民助脱贫</p>
            <p class="author">责任编辑：吉政</p>
            <p class="content">近日，为助力安泽创建国家级卫生县城，进一步通过活动提升全县青少年文明素养，并带动社会形成创卫合力，由安泽县关工委牵头，县教科局，住建局等部门在全县中小学范围内开展了“小手拉大手共建好家园”青少年创卫文明监督活动。</p>
          </div>
        </div>
      </li>
      <li>
        <div class="contentMod">
          <img src="@/img/boyImg/icon_8.png" alt="">
          <div>
            <p class="hanTit">安泽县科协十项科普惠民助脱贫</p>
            <p class="author">责任编辑：吉政</p>
            <p class="content">近日，为助力安泽创建国家级卫生县城，进一步通过活动提升全县青少年文明素养，并带动社会形成创卫合力，由安泽县关工委牵头，县教科局，住建局等部门在全县中小学范围内开展了“小手拉大手共建好家园”青少年创卫文明监督活动。</p>
          </div>
        </div>
      </li>
      <li>
        <div class="contentMod">
          <img src="@/img/boyImg/icon_8.png" alt="">
          <div>
            <p class="hanTit">安泽县科协十项科普惠民助脱贫</p>
            <p class="author">责任编辑：吉政</p>
            <p class="content">近日，为助力安泽创建国家级卫生县城，进一步通过活动提升全县青少年文明素养，并带动社会形成创卫合力，由安泽县关工委牵头，县教科局，住建局等部门在全县中小学范围内开展了“小手拉大手共建好家园”青少年创卫文明监督活动。</p>
          </div>
        </div>
      </li>
      <li>
        <div class="contentMod">
          <img src="@/img/boyImg/icon_8.png" alt="">
          <div>
            <p class="hanTit">安泽县科协十项科普惠民助脱贫</p>
            <p class="author">责任编辑：吉政</p>
            <p class="content">近日，为助力安泽创建国家级卫生县城，进一步通过活动提升全县青少年文明素养，并带动社会形成创卫合力，由安泽县关工委牵头，县教科局，住建局等部门在全县中小学范围内开展了“小手拉大手共建好家园”青少年创卫文明监督活动。</p>
          </div>
        </div>
      </li>
      <li>
        <div class="contentMod">
          <img src="@/img/boyImg/icon_8.png" alt="">
          <div>
            <p class="hanTit">安泽县科协十项科普惠民助脱贫</p>
            <p class="author">责任编辑：吉政</p>
            <p class="content">近日，为助力安泽创建国家级卫生县城，进一步通过活动提升全县青少年文明素养，并带动社会形成创卫合力，由安泽县关工委牵头，县教科局，住建局等部门在全县中小学范围内开展了“小手拉大手共建好家园”青少年创卫文明监督活动。</p>
          </div>
        </div>
      </li>
      <li>
        <div class="contentMod">
          <img src="@/img/boyImg/icon_8.png" alt="">
          <div>
            <p class="hanTit">安泽县科协十项科普惠民助脱贫</p>
            <p class="author">责任编辑：吉政</p>
            <p class="content">近日，为助力安泽创建国家级卫生县城，进一步通过活动提升全县青少年文明素养，并带动社会形成创卫合力，由安泽县关工委牵头，县教科局，住建局等部门在全县中小学范围内开展了“小手拉大手共建好家园”青少年创卫文明监督活动。</p>
          </div>
        </div>
      </li>
      <li>
        <div class="contentMod">
          <img src="@/img/boyImg/icon_8.png" alt="">
          <div>
            <p class="hanTit">安泽县科协十项科普惠民助脱贫</p>
            <p class="author">责任编辑：吉政</p>
            <p class="content">近日，为助力安泽创建国家级卫生县城，进一步通过活动提升全县青少年文明素养，并带动社会形成创卫合力，由安泽县关工委牵头，县教科局，住建局等部门在全县中小学范围内开展了“小手拉大手共建好家园”青少年创卫文明监督活动。</p>
          </div>
        </div>
      </li>
      <li>
        <div class="contentMod">
          <img src="@/img/boyImg/icon_8.png" alt="">
          <div>
            <p class="hanTit">安泽县科协十项科普惠民助脱贫</p>
            <p class="author">责任编辑：吉政</p>
            <p class="content">近日，为助力安泽创建国家级卫生县城，进一步通过活动提升全县青少年文明素养，并带动社会形成创卫合力，由安泽县关工委牵头，县教科局，住建局等部门在全县中小学范围内开展了“小手拉大手共建好家园”青少年创卫文明监督活动。</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import bottomBtn from '@/anze/childCom/bottom-btn'
export default {
  name: 'home',
  data() {
    return {
      seekVal: '',
      btnNum: 2,
    }
  },
  methods: {
    getBack() {
      this.$router.go(-1);
    },
  },
  components: {
    'bottom-btn': bottomBtn
  }
}
</script>

<style lang="scss" scoped>
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
  .handpick {
    background: #f1f4f8;
      .todayList {
        width: 100%;
        margin: 0 auto;
        overflow-y: auto;
        height: calc(100vh - 5rem);
        >li {
          margin-bottom: 0.5rem;
          background: #fff;
          padding: 0.5rem 0.5rem;
          .smalTitle {
            font-size: 0.7rem;
            font-weight: bold;
          }
          .contentMod {
            display: flex;
            > img {
              width: 5.5rem;
              height: 4.2rem;
              margin-right: 0.2rem;
            }
            > div {
              height: 4.2rem;
              width: 11.5rem;
              font-size: 0.6rem;
              overflow: hidden;
              text-overflow:ellipsis;
              .hanTit {
                font-size: 14px;
                font-weight: bold;
                color: #333;
                line-height: 1rem;
              }
              .author{
                font-size: 12px;
                color: #333;
                line-height: 1rem;
              }
              .content {
                font-size: 12px;
                color: #666;
                line-height: 0.75rem;
              }
            }
          }
        }
      }
  }
</style>
