<template>
  <div class="issuePage">
    <div class="issueTit">选择分类</div>
    <div class="modBtns">
      <div v-for="(data, ind) in modNames" :key="ind">
        <img v-bind:src="data.images" alt="">
        <p>{{data.name}}</p>
      </div>
      <span class="levelCenter"></span>
      <span class="verticalCenter"></span>
    </div>
    <bottom-btn :btmBtns="btmBtns" :btnNum="1"></bottom-btn>
  </div>
</template>
<script>
import bottomBtn from '@/anze/childCom/bottom-btn'
export default {
  name: 'postMessage',
  data() {
    return {
      modNames: [
        {
          name: '基层服务',
          images: require('@/img/modBtns/issue1.png')
        },
        {
          name: '惠民政策',
          images: require('@/img/modBtns/issue2.png')
        },
        {
          name: '民意调查',
          images: require('@/img/modBtns/issue3.png')
        },
        {
          name: '本地资讯',
          images: require('@/img/modBtns/issue4.png')
        },
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
    'bottom-btn': bottomBtn
  }
}
</script>

<style lang="scss" scoped>
  .issuePage {
    background: #f0f3f5;
    height: 100%;
    position: absolute;
    width: 100%;
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
    .modBtns {
      width: 95%;
      display: flex;
      flex-wrap: wrap;
      background: #fff;
      width: 17.3rem;
      height: 17.3rem;
      margin: 0.7rem auto 0;
      position: relative;
      >div {
        width: 50%;
        height: 50%;
        img {
          width: 4rem;
          display: block;
          margin: 2rem auto 0;
        }
        p {
          margin-top: 0.5rem;
          text-align: center;
          font-size: 16px;
        }
      }
      .levelCenter {
        width: 80%;
        height: 1px;
        border-bottom: 1px solid #dbdbdb;
        position: absolute;
        top: 50%;
        margin-left: 10%;
      }
      .verticalCenter {
        height: 80%;
        width: 1px;
        border-right: 1px solid #dbdbdb;
        position: absolute;
        left: 50%;
        margin-top: 10%;
      }
    }
  }
</style>
