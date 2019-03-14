<template>
  <div>
    <div :class="$style.logo">
      <div :class="$style.logoContainer">
        <img
          v-if="!settings.isMenuCollapsed || withDrawer"
          src="resources/images/logo-inverse.png"
          alt
        >
        <img
          v-if="settings.isMenuCollapsed && !withDrawer"
          src="resources/images/logo-inverse-mobile.png"
          alt
        >
      </div>
    </div>
    <div :class="settings.isLightTheme ? [$style.navigation, $style.light] : $style.navigation">
      <vue-custom-scrollbar
        :class="settings.isMobileView ? $style.scrollbarMobile : $style.scrollbarDesktop"
      >
        <cui-menu-left
          class="123123"
          :theme="settings.isLightTheme ? 'light' : 'dark'"
          :collapsed="settings.isMenuCollapsed"
          :menuData="menuData"
        />
      </vue-custom-scrollbar>
    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import CuiMenuLeft from './menu.render'
import { getLeftMenuData } from '@/services/menu'

export default {
  name: 'menu-left',
  components: { CuiMenuLeft, vueCustomScrollbar },
  props: {
    settings: Object,
    withDrawer: {
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
