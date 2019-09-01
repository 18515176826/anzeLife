<template>
  <div class="handpickBody">
    <p class="todayPop">今日热门</p>
    <ul class="todayList">
      <li v-for="(item, ind) in information" :key="ind">
        <div class="smalTitle">{{item.title}}</div>
        <div class="contentMod">
          <img src="@/img/boyImg/icon_8.png" alt="">
          <div v-html="item.content"></div>
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
    information: {
      type: Array,
      default(data) {
        console.log(data);
      }
    }
  },
  data() {
    return {
      page: "1",
      size: "10",
      list: [],
      informationHtml: ''
    }
  },

  components: {
    InfiniteLoading
  },
  mounted() {
    // this.informationHtml =
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
    font-size: 0.8rem;
    padding: 0.5rem 0 0.5rem 0.5rem;
  }
  .todayList {
    width: 95%;
    margin: 0 auto;
    height: 11rem;
    overflow-y: auto;
    >li {
      .smalTitle {
        font-size: 0.7rem;
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
          font-size: 0.6rem;
          overflow: hidden;
          line-height: 1.1rem;
          text-overflow:ellipsis;
        }
      }
    }
  }
</style>
