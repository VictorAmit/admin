<template>
  <div>
    <div class="card-body">
      <div class="font-weight-bold font-size-36 font-weight-bold text-primary">
        246 / Day
      </div>
    </div>
    <div class="position-relative">
      <vue-chartist
        class="height-200"
        type="Line"
        :data="data"
        :options="options"
      />
    </div>
  </div>
</template>
<script>
import data from './data.json'
import VueChartist from 'v-chartist'
export default {
  name: 'KitChart13',
  components: {
    'vue-chartist': VueChartist,
  },
  data: function () {
    const options = {
      showPoint: true,
      showLine: true,
      showArea: true,
      fullWidth: true,
      showLabel: false,
      axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0,
      },
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0,
      },
      chartPadding: 0,
      low: 0,
    }

    return {
      data,
      options,
    }
  },
}
</script>
