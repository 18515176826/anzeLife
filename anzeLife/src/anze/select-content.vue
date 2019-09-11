<template>
  <div class="handpick">
    <van-search class="seek" background='rgba(0, 0, 0, 0.1)' placeholder="请输入搜索关键词" v-model="seekVal"/>
    <ul class="todayList">
      <li @click="articleDetails(item.articleId)" v-for="(item, ind) in choicenessList" :key="ind">
        <div class="contentMod">
          <img :src="item.image" alt="">
          <div>
            <p class="hanTit">{{item.title}}</p>
            <!-- <p class="author">责任编辑：吉政</p> -->
            <p class="content">{{item.homeContent}}</p>
          </div>
        </div>
      </li>
    </ul>
    <bottom-btn :btnNum="btnNum"></bottom-btn>
  </div>
</template>
<script>
import bottomBtn from '@/anze/childCom/bottom-btn'
export default {
  name: 'home',
  data() {
    return {
      btnNum: 2,
      seekVal:'',
      choicenessList: []
    }
  },
  methods:{
    articleDetails(dataId) {
      let path = '/anze/contentDetails';
      this.$router.push({path, query:{pathId: dataId}})
    },
    choiceness() {
      // let inforUrl = '/api/article/queryGoodArticle'
      let inforUrl = `/maven-SSM/article/queryGoodArticle`
      this.$axios({
          method:'get',
          url: inforUrl,
        }).then(res => {
          let data = [];
          if(res.statusText == 'OK') {
            this.choicenessList = res.data.data;
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
    this.choiceness();
  },
  components: {
    'bottom-btn': bottomBtn
  }
}
</script>

<style lang="scss" scoped>
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
                font-size: 0.7rem;
                font-weight: bold;
                color: #333;
                line-height: 1rem;
                min-height: 2rem;
              }
              .author{
                font-size: 0.6rem;
                color: #333;
                line-height: 1rem;
              }
              .content {
                font-size: 0.6rem;
                color: #666;
                line-height: 0.75rem;
              }
            }
          }
        }
      }
  }
</style>
