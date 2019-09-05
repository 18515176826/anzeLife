<template>
  <div>
    <div class="manMods">
      <van-row>
        <van-col
          span="6"
          v-for="(data, ind) in btnsImg"
          :key="ind"

          >
          <div class="imgBox" @click="moduleSkip((ind+1), data.bName)">
            <van-image
              width="50%"
              class="modImg"
              :src="data.imgs"
            />
            <p class="modName">{{data.bName}}</p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttons',
  props: {
    "btnsImg": {
      type: Array,
    }
  },
  data() {
    return {

    }
  },
  methods: {
    moduleSkip(ind, titName) {
      let path = '/anze/IRelease'
      this.$router.push({path, query:{modId: ind, titName:titName}})
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
  .manMods {
    width: 95%;
    margin: 0.7rem auto 0;
    background: #fff;
    border-radius: 7px;
    padding-bottom: 0.5rem;
  }
  .modImg {
    display: block;
    margin: 0.5rem auto 0;
  }
  .modName {
    font-size: 14px;
    color: #555;
    text-align: center;
    margin-top: -0.2rem;
  }
  .imgBox {
    width: 82px;
  }
</style>
