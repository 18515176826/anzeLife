<template>
  <div class="loginInBaca">
    <div class="logInIpt">
      <div class="userName">
        <span class="icon iconfont">&#xe608;</span>
        <input type="text"  v-model="telephone" placeholder="请输入用户名">
      </div>
      <div class="password">
        <span class="icon iconfont">&#xe60a;</span>
        <input type="password" v-model="passWord" placeholder="请输入密码">
      </div>
      <p class="verify">{{ msg }}</p>
      <ul class="loginPrompt">
        <li @click="JumpRegister">注册账号</li>
        <li>其他方式登录</li>
      </ul>
      <button @click="anzeLogin" class="loginBtn">登录</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      id: 1,
      telephone: '',
      passWord:'',
      nenuVerify: '',
      msg: ''
    }
  },
  methods: {
    JumpRegister() {
      this.$router.push({  //核心语句
        path:'/anze/enroll',   //跳转的路径
        query:{           //路由传参时push和query搭配使用 ，作用时传递参数
          id:this.id,
        }
      })
    },
    anzeLogin() {
      let url = '/api/userManger/userLogin';
      let verifyIpt = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
      if(!this.telephone) {
        this.nenuVerify = 10
        this.msg = '* 用户名不能为空';
        return
      }
      if(!verifyIpt.test(this.telephone)) {
        this.nenuVerify = 10
        this.msg = '* 用户名格式不正确';
        return;
      }

      if(!this.passWord) {
        this.nenuVerify = 10
        this.msg = '* 密码不能为空';
        return;
      }

      this.$axios({
          method:'post',
          url: url,
          data:this.Qs.stringify({    //这里是发送给后台的数据
            userName:this.telephone.trim(),
            telephone:this.passWord.trim()
          })
        }).then(res => {
        let code = res.data.code;
        this.msg = '*' + res.data.msg;
        this.nenuVerify = code;
        this.$router.push({path:'/anze/homePage'});
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

  }
}
</script>

<style lang="scss" scoped>
.loginInBaca {
  background: url(../img/logIn.png);
  background-size: 100%;
  display: flex;
  .logInIpt {
      > .verify {
        font-size: 14px;
        color:red;
        text-indent: 1.5rem;
        padding: 0.5rem 0 0;
        min-height: 1rem;
        line-height: 1rem
      }
      width: 90%;
      height: 17.2rem;
      margin: 10.7rem auto 0;
      background: #fff;
      box-shadow: 0rem 0rem 0.9rem 0.1rem rgba(176, 208, 241, 0.6);
      > div {
        width: 15.65rem;
        height: 2.45rem;
        border: solid 1px #3b89f9;
        border-radius: 2.5rem;
        margin: 0 auto;
        display: flex;
        > span {
          margin: 0.6rem 0.5rem 0 0.75rem;
          font-size: 1rem
      }
      > input {
        width: 78%;
        height: 1.65rem;
        margin: 0.4rem 0rem;
        border: none;
        font-size: 0.8rem;
      }
    }
    .userName {
      margin-top: 2.55rem;
      > span {
        width: 1rem;
        height: 1.25rem;
        color: #3b89f9;
      }
    }
      .password {
        margin-top: 1rem;
        > span {
          width: 1rem;
          height: 1.25rem;
          color: #b1b1b1;
      }
    }
    .loginPrompt {
      font-size: 0.7rem;
      width: 14rem;
      color: #3b89f9;
      height: 1.5rem;
      line-height: 1.5rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    .loginBtn {
      width: 94%;
      margin: 0 auto;
      display: block;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
      color: #fff;
      border-radius: 2.5rem;
      border: none;
      background:#3b89f9;
      font-size: 0.9rem;
      margin-top: 1.5rem;
    }
  }
}

// .loginInBac {
//   background: url(../img/logIn.png);
//   background-size: 100%;
//   display: flex;
//   .logInIpt {
//     width: 90%;
//     height: 344px;
//     margin: 214px auto 0;
//     background: #fff;
//     box-shadow: 0px 0px 18px 2px
// 		rgba(176, 208, 241, 0.6);
//     > div {
//       width: 313px;
//       height: 49px;
//       border: solid 1px #3b89f9;
//       border-radius: 50px;
//       margin: 0 auto;
//       display: flex;
//       > span {
//         margin: 12px 10px 0 15px;
//         font-size: 20px
//       }
//       > input {
//         width: 78%;
//         height: 33px;
//         margin: 8px 0px;
//         border: none;
//         font-size: 16px;
//       }
//     }
//     .userName {
//       margin-top: 51px;
//       > span {
//         width: 20px;
//         height: 25px;
//         color: #3b89f9;
//       }
//     }
//     .password {
//       margin-top: 20px;
//       > span {
//         width: 20px;
//         height: 25px;
//         color: #b1b1b1;
//       }
//     }
//     .loginPrompt {
//       font-size: 14px;
//       width: 280px;
//       color: #3b89f9;
//       height: 30px;
//       line-height: 30px;
//       margin: 0 auto;
//       display: flex;
//       justify-content: space-between;
//       margin-top: 5px;
//     }
//     .loginBtn {
//       width: 94%;
//       margin: 0 auto;
//       display: block;
//       height: 40px;
//       line-height: 40px;
//       text-align: center;
//       color: #fff;
//       border-radius: 50px;
//       border: none;
//       background:#3b89f9;
//       font-size: 18px;
//       margin-top: 30px;
//     }
//   }
// }
</style>
