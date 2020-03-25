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
    <cui-sidebar :settings="settings" />
    <cui-support-chat />
    <cui-menu />
    <a-layout>
      <a-layout-header>
        <cui-topbar />
      </a-layout-header>
      <cui-breadcrumbs :settings="settings" />
      <a-layout-content style="height: '100%';  position: 'relative'">
        <div class="cui__utils__content">
          <transition :name="settings.routerAnimation" mode="out-in">
            <router-view />
          </transition>
        </div>
      </a-layout-content>
      <a-layout-footer>
        <cui-footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapState } from 'vuex'
import CuiTopbar from '@/components/layout/Topbar'
import CuiBreadcrumbs from '@/components/layout/Breadcrumbs'
import CuiFooter from '@/components/layout/Footer'
import CuiSidebar from '@/components/layout/Sidebar'
import CuiSupportChat from '@/components/layout/SupportChat'
import CuiMenu from '@/components/layout/Menu'

export default {
  name: 'MainLayout',
  components: { CuiFooter, CuiTopbar, CuiMenu, CuiBreadcrumbs, CuiSidebar, CuiSupportChat },
  computed: mapState(['settings']),
  mounted() {
    this.detectViewPort(true)
    window.addEventListener('resize', this.detectViewPortListener)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.detectViewPortListener)
  },
  methods: {
    toggleMobileMenu() {
      const value = !this.settings.isMobileMenuOpen
      this.$store.commit('CHANGE_SETTING', { setting: 'isMobileMenuOpen', value })
    },
    onCollapse: function (collapsed, type) {
      const value = !this.settings.isMenuCollapsed
      this.$store.commit('CHANGE_SETTING', { setting: 'isMenuCollapsed', value })
    },
    changeSetting: function (setting, value) {
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
    setViewPort: function (isMobileView = false, isTabletView = false) {
      this.$store.commit('CHANGE_SETTING', { setting: 'isMobileView', value: isMobileView })
      this.$store.commit('CHANGE_SETTING', { setting: 'isTabletView', value: isTabletView })
    },
    detectViewPortListener: function () {
      this.detectViewPort(false)
    },
    detectViewPort: function (firstLoad = false) {
      const isMobile = this.settings.isMobileView
      const isTablet = this.settings.isTabletView
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
      if (state.next.desktop && ((state.next.desktop !== state.prev.desktop) || firstLoad)) {
        this.setViewPort(false, false)
      }
      // tablet & collapse menu
      if (state.next.tablet && !state.next.mobile && ((state.next.tablet !== state.prev.tablet) || firstLoad)) {
        this.setViewPort(false, true)
        this.$store.commit('CHANGE_SETTING', { setting: 'isMenuCollapsed', value: true })
      }
      // mobile
      if (state.next.mobile && ((state.next.mobile !== state.prev.mobile) || firstLoad)) {
        this.setViewPort(true, false)
      }
    },
  },
}
</script>
