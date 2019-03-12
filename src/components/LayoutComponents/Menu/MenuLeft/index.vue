<template>
  <div>
    <div :class="$style.logo">
      <div :class="$style.logoContainer">
        <img v-if="!isMenuCollapsed" src="resources/images/logo-inverse.png" alt>
        <img v-if="isMenuCollapsed" src="resources/images/logo-inverse-mobile.png" alt>
      </div>
    </div>
    <div :class="isLightTheme ? [$style.navigation, $style.light] : $style.navigation">
      <vue-custom-scrollbar
        :class="isMobileView ? $style.scrollbarMobile : $style.scrollbarDesktop"
      >
        <cui-menu-left
          class="123123"
          :theme="isLightTheme ? 'light' : 'dark'"
          :collapsed="isMenuCollapsed"
          :menuData="menuData"
        />
      </vue-custom-scrollbar>
    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import CuiMenuLeft from './menu.render'
import { getLeftMenuData } from './menu.config'

export default {
  name: 'menu-left',
  components: { CuiMenuLeft, vueCustomScrollbar },
  props: {
    isMenuCollapsed: {
      type: Boolean,
      default: false,
    },
    isLightTheme: {
      type: Boolean,
      default: false,
    },
    isMobileView: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuData: getLeftMenuData,
    }
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
