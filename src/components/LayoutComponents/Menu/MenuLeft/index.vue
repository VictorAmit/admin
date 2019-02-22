<template>
  <div :class="$style.menu">
    <div :class="$style.inner">
      <cui-menu-left :theme="'light'" :collapsed="false" :menuData="menuData"/>
    </div>
  </div>
</template>

<script>
import { getLeftMenuData } from './menu.config'
import CuiMenuLeft from './menu.render'

export default {
  name: 'menu-left',
  components: { CuiMenuLeft },
  data() {
    return {
      menuData: getLeftMenuData,
    }
  },
}
</script>

<style lang="scss" module>
@import "@/assets/styles/mixins.scss";

.menu {
  width: 100%;
  height: 100%;
  color: $text;
  box-shadow: 0 0 200px -30px rgba(57, 55, 73, 0.4);
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

.inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
