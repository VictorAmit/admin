<template>
  <a-layout
    :class="{
      'settings__borderLess': settings.isBorderless,
      'settings__squaredBorders': settings.isSquaredBorders,
      'settings__fixedWidth': settings.isFixedWidth,
      'settings__menuShadow': settings.isMenuShadow,
      'settings__menuTop': settings.isMenuTop
    }"
  >
    <!-- left menu -->
    <a-layout-sider
      :width="256"
      :class="settings.isLightTheme ? [$style.sider, $style.light] : $style.sider"
      collapsible
      :collapsed="settings.isMenuCollapsed"
      @collapse="onCollapse"
    >
      <cui-menu-left v-bind:settings="settings"/>
    </a-layout-sider>
    <cui-settings v-bind:settings="settings"/>
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
import { mapState } from 'vuex'
import CuiTopbar from '@/components/LayoutComponents/Topbar'
import CuiBreadcrumbs from '@/components/LayoutComponents/Breadcrumbs'
import CuiFooter from '@/components/LayoutComponents/Footer'
import CuiSettings from '@/components/LayoutComponents/Settings'
import CuiMenuLeft from '@/components/LayoutComponents/Menu/MenuLeft'

export default {
  name: 'MainLayout',
  components: { CuiFooter, CuiTopbar, CuiMenuLeft, CuiBreadcrumbs, CuiSettings },
  computed: mapState(['settings']),
  mounted() {
    this.detectViewPort(true)
    window.addEventListener('resize', this.detectViewPortListener)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.detectViewPortListener)
  },
  methods: {
    onCollapse: function (collapsed, type) {
      const value = !this.settings['isMenuCollapsed']
      this.$store.commit('CHANGE_SETTING', { setting: 'isMenuCollapsed', value })
    },
    changeSetting: function (setting, value) {
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
    setViewPort: function (isMobileView = false, isTabletView = false) {
      this.$store.commit('CHANGE_SETTING', { setting: 'isMobileView', value: isMobileView })
      this.$store.commit('CHANGE_SETTING', { setting: 'isTabletView', value: isTabletView })
    },
    detectViewPortListener: function() {
      this.detectViewPort(false)
    },
    detectViewPort: function(load = false) {
      const isMobile = this.settings['isMobileView']
      const isTablet = this.settings['isTabletView']
      const width = window.innerWidth
      const state = {
        next: {
          mobile: width < 768,
          tablet: width < 992,
          desktop: !(width < 768) && !(width < 992),
        },
        prev: {
          mobile: isMobile,
          tablet: isTablet,
          desktop: !(isMobile) && !(isTablet),
        },
      }
      // desktop
      if (state.next.desktop && ((state.next.desktop !== state.prev.desktop) || load)) {
        this.setViewPort(false, false)
      }
      // tablet & collapse menu
      if (state.next.tablet && !state.next.mobile && ((state.next.tablet !== state.prev.tablet) || load)) {
        this.setViewPort(false, true)
        this.$store.commit('CHANGE_SETTING', { setting: 'isMenuCollapsed', value: true })
      }
      // mobile
      if (state.next.mobile && ((state.next.mobile !== state.prev.mobile) || load)) {
        this.setViewPort(true, false)
      }
    },
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
