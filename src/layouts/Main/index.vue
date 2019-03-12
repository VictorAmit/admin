<template>
  <a-layout
    :class="{
      'settings__borderLess': isBorderless,
      'settings__squaredBorders': isSquaredBorders,
      'settings__fixedWidth': isFixedWidth,
      'settings__menuShadow': isMenuShadow,
      'settings__menuTop': isMenuTop
    }"
  >
    <!-- left menu -->
    <a-layout-sider
      :width="256"
      :class="isLightTheme ? [$style.sider, $style.light] : $style.sider"
      collapsible
      v-model="isMenuCollapsed"
    >
      <cui-menu-left v-bind:isMenuCollapsed="isMenuCollapsed" v-bind:isLightTheme="isLightTheme"/>
    </a-layout-sider>

    <a-layout>
      <a-layout-header>
        <cui-topbar/>
      </a-layout-header>
      <cui-breadcrumbs/>
      <a-layout-content>
        <div class="utils__content">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer>
        <cui-footer/>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import CuiTopbar from '@/components/LayoutComponents/Topbar'
import CuiBreadcrumbs from '@/components/LayoutComponents/Breadcrumbs'
import CuiFooter from '@/components/LayoutComponents/Footer'
import CuiMenuLeft from '@/components/LayoutComponents/Menu/MenuLeft'

export default {
  name: 'MainLayout',
  components: { CuiFooter, CuiTopbar, CuiMenuLeft, CuiBreadcrumbs },
  data: function () {
    return {
      isMenuCollapsed: false,
      isMobileView: false,
      isMenuTop: false,
      isLightTheme: true,
      isMobileMenuOpen: false,
      isMenuShadow: true,
      isFixedWidth: false,
      isSquaredBorders: false,
      isBorderless: false,
    }
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
