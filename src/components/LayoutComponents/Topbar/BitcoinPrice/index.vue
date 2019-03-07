<template>
  <div :class="$style.bitcoinPrice">
    <span>Bitcoin Price:</span>
    <span :class="$style.bitcoinGraph">
       <peity :type="'line'" :options="{ 'fill': ['#72cfff'], 'stroke': '#01a8fe', 'height': 22, 'width': 44, 'strokeWidth': 1, }" :data="lineDataDinamycFirst"></peity>
    </span>
  </div>
</template>
<script>
import Peity from 'vue-peity'

export default {
  components: {
    Peity,
  },
  data: function () {
    return {
      dynamicDataFirst: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
    }
  },
  computed: {
    lineDataDinamycFirst () {
      return this.dynamicDataFirst.toString()
    },
  },
  created () {
    setInterval(() => {
      this.dynamicDataFirst.unshift(this.dynamicDataFirst.pop())
    }, 377)
  },
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
