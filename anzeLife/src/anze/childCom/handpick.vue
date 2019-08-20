<template>
  <div class="handpickBody">
    <p class="todayPop">今日热门</p>
    <ul class="todayList">
      <li>
        <div class="smalTitle">小手拉大手共建好家园</div>
        <div class="contentMod">
          <img src="@/img/boyImg/icon_8.png" alt="">
          <div>近日，为助力安泽创建国家级卫生县城，进一步通过活动提升全县青少年文明素养，并带动社会形成创卫合力，由安泽县关工委牵头，县教科局，住建局等部门在全县中小学范围内开展了“小手拉大手共建好家园”青少年创卫文明监督活动。</div>
        </div>
      </li>
      <li>
        <div class="smalTitle">小手拉大手共建好家园</div>
        <div class="contentMod">
          <img src="@/img/boyImg/icon_8.png" alt="">
          <div>近日，为助力安泽创建国家级卫生县城，进一步通过活动提升全县青少年文明素养，并带动社会形成创卫合力，由安泽县关工委牵头，县教科局，住建局等部门在全县中小学范围内开展了“小手拉大手共建好家园”青少年创卫文明监督活动。</div>
        </div>
      </li>
      <li>
        <div class="smalTitle">小手拉大手共建好家园</div>
        <div class="contentMod">
          <img src="@/img/boyImg/icon_8.png" alt="">
          <div>近日，为助力安泽创建国家级卫生县城，进一步通过活动提升全县青少年文明素养，并带动社会形成创卫合力，由安泽县关工委牵头，县教科局，住建局等部门在全县中小学范围内开展了“小手拉大手共建好家园”青少年创卫文明监督活动。</div>
        </div>
      </li>
      <li>
        <div class="smalTitle">小手拉大手共建好家园</div>
        <div class="contentMod">
          <img src="@/img/boyImg/icon_8.png" alt="">
          <div>近日，为助力安泽创建国家级卫生县城，进一步通过活动提升全县青少年文明素养，并带动社会形成创卫合力，由安泽县关工委牵头，县教科局，住建局等部门在全县中小学范围内开展了“小手拉大手共建好家园”青少年创卫文明监督活动。</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import '@/lib/js/restSice.js'
export default {
  name: 'hand',
  props: {

  },
  data() {
    return {
      page: "1",
      size: "10",
      list: []
    }
  },

  components: {
    InfiniteLoading
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
  .handpickBody {
    width: 95%;
    margin: 0.5rem auto 0;
    background: #fff;
    border-radius: 7px;
  }
  .todayPop {
    color: #666;
    font-size: 16px;
    padding: 0.5rem 0 0.5rem 0.5rem;
  }
  .todayList {
    width: 95%;
    margin: 0 auto;
    height: 12rem;
    overflow-y: auto;
    >li {
      .smalTitle {
        font-size: 14px;
        font-weight: bold;
        padding-bottom: 0.5rem;
      }
      .contentMod {
        display: flex;
        padding-bottom: 0.5rem;
        > img {
          width: 5rem;
          height: 3.5rem;
          margin-right: 0.2rem;
        }
        > div {
          height: 3.5rem;
          width: 12rem;
          font-size: 12px;
          overflow: hidden;
          line-height: 1.1rem;
          text-overflow:ellipsis;
        }
      }
    }
  }
</style>
