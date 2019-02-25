<template>
  <div>
    <div class="card" :class="$style.card">
      <div :class="$style.chart">
        <span v-bind:v-for="item in data">
          {{ item }}
        </span>
      </div>
      <div v-if="true" :class="$style.amount">12</div>
      <div v-if="true" :class="$style.title">Title</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CuiChartCard',
  data() {
    return {
      data: [1, 2, 3],
    }
  },
}
</script>

<style lang="scss" module>
@import "@/assets/styles/mixins.scss";
@import "./style.module.scss";
</style>
