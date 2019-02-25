<template>
  <div>
    Alpha
    <a-button type="primary">Primary</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>
    <cui-chart-card />
  </div>
</template>

<script>
import CuiChartCard from '@/components/CleanUIComponents/ChartCard'

export default {
  components: { CuiChartCard },
}
</script>
