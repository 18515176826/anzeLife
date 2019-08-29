<template>
  <div>
    <van-popup
      v-model="show"
      position="bottom"
    >
    <van-area :area-list="areaList" :columns-num="3" title="标题" />
    </van-popup>
  </div>
</template>
<script>
import placeJson from '@/lib/js/place.js'
export default {
  data() {
    return {
      areaList: placeJson
    }
  },
  mounted() {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>

</style>
