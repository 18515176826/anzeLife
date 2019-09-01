<template>
  <div class="MyPage">
    <div class="myInfor">
      <p class="inforTit">我的</p>
      <div class="personal">
        <img :src="headPortrait" alt="">
        <ul class="exhibiting">
          <li class="exName"><span>{{message.name}}</span></li>
          <li class="exNumber"><img src="@/img/my/phone.png" alt=""><span>{{message.number}}</span></li>
        </ul>
        <i class="iconfont exSkip">&#xe60f;</i>
      </div>
    </div>
    <ul class="infoList">
      <li>
        <div><img src="@/img/my/mailbox.png" alt=""><span>邮箱</span></div>
        <div><span class="introduce">867040722@qq.com</span><i class="iconfont jump">&#xe60f;</i></div>
      </li>
      <li>
        <div><img src="@/img/my/autonym.png" alt=""><span>实名认证</span></div>
        <div><span class="introduce">身份证</span><i class="iconfont jump">&#xe60f;</i></div>
      </li>
      <li @click="myRelease">
        <div><img src="@/img/my/issue.png" alt=""><span>我的发布</span></div>
        <div><span class="introduce"></span><i class="iconfont jump">&#xe60f;</i></div>
      </li>
      <li>
        <div><img src="@/img/my/manage.png" alt=""><span>我的管理</span></div>
        <div><span class="introduce"></span><i class="iconfont jump">&#xe60f;</i></div>
      </li>
    </ul>
    <bottom-btn :btnNum="btnNum"></bottom-btn>
  </div>
</template>
<script>
import bottomBtn from '@/anze/childCom/bottom-btn'
export default {
  name: 'myMge',
  data() {
    return {
      btnNum: 3,
      headPortrait : require('@/img/my/portrait.png'),
      message: {
        name: 'Mr.Zhang',
        number: '15875452145'
      },
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
    myRelease() {
      let path = '/anze/IRelease'
      this.$router.push({path})
    }
  },
  components: {
    'bottom-btn': bottomBtn
  }
}
</script>

<style lang="scss" scoped>
.MyPage {
  background: #f0f3f5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .infoList {
    background: #fff;
    font-size: 0.7rem;
    margin-top: 1rem;
    li {
      margin: 0 0.6rem;
      height: 2rem;
      line-height: 2rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e0e0e0;
      div {
        position: relative;
        img {
          width: 0.9rem;
          margin-right: 0.2rem;
          float: left;
          margin-top: 0.6rem;
        }
        i.jump {
          position: absolute;
          font-size: 1rem;
          color: #7d7d8a;
          top: 0.05rem;
          right: 0;
        }
        .introduce {
          margin-right: 1rem;
          color: #666666;
        }
      }

    }
  }
}
.myInfor {
  width: 100%;
  height: 6.5rem;
  background: -webkit-linear-gradient(left, #207fff , #60b5ff); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(left, #207fff , #60b5ff); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(left, #207fff , #60b5ff); /* Firefox 3.6 - 15 */
  background: linear-gradient(to left, #207fff , #60b5ff); /* 标准的语法（必须放在最后） */
  .inforTit {
    font-size: 0.9rem;
    color: #fff;
    text-align: center;
    padding-top: 1rem;
  }
  .personal {
    display:flex;
    color: #fff;
    padding: 0.6rem 0.5rem 0.5rem;
    position: relative;
    > img {
      width: 2.7rem;
    }
    .exhibiting {
      margin-left: 0.5rem;
      .exName {
        font-size: 0.8rem;
        padding-top: 0.3rem;
      }
      .exNumber {
        font-size: 0.7rem;
        padding-top: 0.2rem;
        margin-left: 0.1rem;
        > img {
          width: 0.5rem;
        }
      }
    }
    i.exSkip {
      position: absolute;
      font-size: 1rem;
      top: 50%;
      right: 0.4rem;
      margin-top: -0.4rem;
    }
  }
}
</style>
