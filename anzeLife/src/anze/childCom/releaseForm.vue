<template>
  <div class="issueTitBox">
    <div class="issueTit">
      <!-- <van-icon @click="getBack" class="getBack" name="arrow-left" /> -->
      <span>选择分类</span>
    </div>
    <van-cell-group class="formFill">
      <van-field
        v-model="parameter.title"
        required
        clearable
        label="标题"
        right-icon="question-o"
        placeholder="请输入标题"
        :error-message="tatleMess"
        @click-right-icon="$toast('question')"
      />

      <van-field
        v-model="parameter.phone"
        required
        clearable
        label="联系电话"
        placeholder="请输入联系电话"
        @click-right-icon="$toast('question')"
      />
      <van-field
        v-model="parameter.address"
        clearable
        label="地区"
        placeholder="选择省/市/区"
        @click="showAddr"
      />
      <van-field
        v-model="parameter.detailedAddress"
        clearable
        label="详细地址"
        placeholder="请输入详细地址"
      />
    </van-cell-group>
    <van-button @click="compileContent" class="compile" type="primary" size="large">编辑内容</van-button>
    <regional-choice
      ref="selectfood"
      @setAddress="setAddress">
    </regional-choice>
  </div>
</template>
<script>
import regionalChoice from '@/anze/childCom/regional-choice'
import placeJson from '@/lib/js/place.js'
export default {
  data() {
    return {
      areaList:placeJson,
      showPopup: true,
      tatleMess:'',
      parameter: {
        title: '',
        phone: '',
        address:'',
        detailedAddress: '',
        type: this.$route.query.type,
      }
    }
  },
  mounted() {
    this.StopBack();
  },
  destroyed() {
    // 当页面销毁必须要移除这个事件，vue不刷新页面，不移除会重复执行这个事件
    window.removeEventListener("popstate", this.onBrowserBack, false);
  },
  methods: {
    // getBack() {
    //   this.$router.go(-1);
    // },
    StopBack() { //阻止默认返回事件
      // 按需使用：A→B→C就需要页面一进来的时候，就添加一个历史记录
      window.history.pushState(null, null, document.URL);
      // 给window添加一个popstate事件，拦截返回键，执行this.onBrowserBack事件，addEventListener需要指向一个方法
      window.addEventListener("popstate", this.onBrowserBack, false);
    },
    showAddr() {
      this.$refs.selectfood.siteShow()
    },
    setAddress(res) {
      this.parameter.address = res;
    },
    compileContent() {
      let path = '/anze/editionContains';
      if(this.parameter.title.trim() == '') {
        this.tatleMess = '标题不能为空'
        return
      } else{
        this.tatleMess = ''
      }
      this.$router.push({path, query:{parameter: this.parameter}});
    },
    onBrowserBack() {
      // 阻止返回替换的事件
    }
  },
  components: {
    'regional-choice': regionalChoice,
  }

}
</script>

<style lang="scss" scoped>
.compile {
  width: 90%;
  display: block;
  margin: 1rem auto 0;
}
.issueTitBox {
  background: #f0f3f5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
    position: relative;
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
  .formFill {
    background: #fff;
    margin-top: 1rem;
  }
}

</style>
