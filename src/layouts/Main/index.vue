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
    <cui-sidebar />
    <cui-support-chat />

    <!-- left menu -->
    <cui-menu-left v-if="settings.menuLayoutType === 'left' && !settings.isMobileView" />

    <!-- left menu mobile -->
    <div v-if="settings.menuLayoutType === 'left' && settings.isMobileView">
      <div :class="$style.handler" @click="toggleMobileMenu">
        <div :class="$style.handlerIcon"></div>
      </div>
      <a-drawer
        :closable="false"
        :visible="settings.isMobileMenuOpen"
        placement="left"
        :wrapClassName="$style.mobileMenu"
        @close="toggleMobileMenu"
      >
        <cui-menu-left />
      </a-drawer>
    </div>

    <!-- top menu -->
    <cui-menu-top v-if="settings.menuLayoutType === 'top' && !settings.isMobileView" />

    <a-layout>
      <a-layout-header>
        <cui-topbar />
      </a-layout-header>
      <cui-breadcrumbs />
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
import CuiMenuLeft from '@/components/layout/Menu/MenuLeft'
import CuiMenuTop from '@/components/layout/Menu/MenuTop'

export default {
  name: 'MainLayout',
  components: { CuiFooter, CuiTopbar, CuiMenuLeft, CuiMenuTop, CuiBreadcrumbs, CuiSidebar, CuiSupportChat },
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

<style lang="scss" module>
@import "./style.module.scss";
</style>
