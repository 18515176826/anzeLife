<template>
  <div class="loginInBac">

    <div class="">
      <div class="logInIpt">
        <div class="userName">
          <span class="icon iconfont">&#xe608;</span>
          <input type="text" v-model="logUserName" placeholder="请输入手机号">
        </div>
        <div class="password">
          <div>
            <span class="icon iconfont">&#xe60a;</span>
            <input type="password" v-model="logPassWord" placeholder="请输入短信验证码">
          </div>
          <input type="button" class="getCode" value="获取验证码">
        </div>
         <p class="verify">{{ msg }}</p>
        <button @click="anzeRegister" class="loginBtn">注册</button>
        <ul class="loginPrompt">
          <li @click="goToLogin">已有账号，登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  data() {
    return {
      logUserName: '',
      logPassWord: '',
      msg: ''
    }
  },
  methods: {
    anzeRegister() {
      let url = '/api/userManger/userRegister';
      let verifyIpt = /^[0-9]*$/;
      if(!verifyIpt.test(this.logUserName)) {
        this.msg = '* 用户名格式不正确';
        return;
      }
      if(!this.logUserName) {
        this.msg = '* 手机号不能为空';
        return
      }
      if(!this.logPassWord) {
        this.msg = '* 密码不能为空';
        return;
      }

      this.$axios({
          method:'post',
          url: url,
          data:this.Qs.stringify({    //这里是发送给后台的数据
            telephone:this.logUserName,
            passWord:this.logPassWord
          })
        }).then(res => {
        this.msg = '*' + res.data.msg;
        if(res.data.code == 0) {
          let code = res.data.code;
          this.nenuVerify = code;
          this.$router.push({path:'/anze/homePage'});
        }
      }).catch(() => {
        alert('请求失败');
      })
    },
    goToLogin() {
      this.$router.push({path:'/'});
    }
  }
}
</script>

<style lang="scss" scoped>
.verify {
    font-size: 14px;
    color:red;
    text-indent: 1.5rem;
    padding: 0.5rem 0 0;
    min-height: 1rem;
    line-height: 1rem
  }
.loginInBac {
  background: url(../img/enr.png);
  background-size: 100%;
  display: flex;
  width: 100%;
  > div {
    width: 100%;
  }
  .logInIpt {
      width: 90%;
      height: 16rem;
      margin: 10.7rem auto 0;
      background: #fff;
      box-shadow: 0rem 0rem 0.9rem 0.1rem rgba(176, 208, 241, 0.6);
      padding-top: 0.1rem;
      > div {
        height: 2.45rem;
        display: flex;
        > span {
          margin: 0.6rem 0.5rem 0 0.75rem;
          font-size: 1rem
        }
    }
    .userName {
      border: solid 1px #3b89f9;
      width: 15.65rem;
      margin: 2.55rem auto 0;
      border-radius: 2.5rem;
      > span {
        width: 1rem;
        height: 1.25rem;
        color: #3b89f9;
      }
      > input {
        width: 78%;
        height: 1.65rem;
        margin: 0.4rem 0rem;
        border: none;
        font-size: 0.8rem;
      }
    }
    .password {
        width: 15.65rem;
        margin-top: 1rem;
        margin-left: 0.5rem;
        display: flex;
        > div {
          border: solid 1px #3b89f9;
          border-radius: 2.5rem;
          width: 12rem;
          > span {
            width: 1rem;
            height: 1.25rem;
            color: #b1b1b1;
            margin: 0.6rem 0.25rem 0.5rem 0.75rem;
            font-size: 1rem
          }
          > input {
            width: 66%;
            height: 1.65rem;
            margin: 0.4rem 0rem;
            border: none;
            font-size: 0.8rem;
          }
        }
        .getCode {
            width: 5rem;
            height: 1.5rem;
            border-radius: 2.5rem;
            border: none;
            background: #3b89f9;
            color: #fff;
            margin: 0.4rem 0 0 0.8rem;
            font-size: 14px;
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
      margin-top: 0.25rem;
      li {
        width: 100%;
        text-align: center;
        margin-top: 0.5rem;
      }
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
      margin-top: 0.5rem;
    }
  }
}
</style>
