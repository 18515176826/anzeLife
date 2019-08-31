<template>
  <div>
    <van-action-sheet
      v-model="showPopup"
      @select="closeSite"
    >
      <van-area
        v-model="address"
        :area-list="areaList"
        :columns-num="3"
        @confirm="onSelect"
        @cancel="closeSite"
        title="标题" />
    </van-action-sheet>
  </div>
</template>
<script>
import placeJson from '@/lib/js/place.js'
export default {
  data() {
    return {
      address: '',
      areaList: placeJson,
      showPopup: false
    }
  },
  methods: {
    siteShow() {
      this.showPopup = true;
    },
    onSelect(code) {
      this.$emit('setAddress', this.dataProcessing(code));
      this.showPopup = false;

    },
    closeSite() {
      this.showPopup = false;
    },
    dataProcessing(res) {
      if(res.length > 0) {
        let newRes = res.values();
        let val, names = [];
        for(val of newRes) {
          names.push(val.name);
        }
        return names.join('/')
      } else {
        return []
      }
    }
  },
  mounted() {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>

</style>
