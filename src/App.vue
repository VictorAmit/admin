<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    '$route' (to, from) {
      this.$store.commit('SETUP_URL_SETTINGS', to.query)
    },
  },
}
</script>
