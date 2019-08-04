<template>
  <div class="loginInBac">
    <div class="logInIpt">
      <div class="userName">
        <span class="icon"></span>
        <input type="text">
      </div>
      <div class="password"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.loginInBac {
  background: url(../img/logIn.png);
  background-size: 100%;
  display: flex;
  .logInIpt {
    width: 90%;
    height: 344px;
    margin: 183px auto 0;
    background: #fff;
    box-shadow: 0px 0px 18px 2px
		rgba(176, 208, 241, 0.6);
    > div {
      width: 313px;
      height: 49px;
      border: solid 1px #3b89f9;
      border-radius: 50px;
      margin: 0 auto;
    }
    .userName {
      margin-top: 51px;

    }
    .password {
      margin-top: 20px;
    }
  }
}
</style>
