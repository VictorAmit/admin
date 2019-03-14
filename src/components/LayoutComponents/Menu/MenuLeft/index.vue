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
        <a-menu
          :theme="settings.isLightTheme ? 'light' : 'dark'"
          :inlineCollapsed="settings.isMenuCollapsed"
          :mode="'inline'"
          @click="menuClick"
        >
          <a-menu-item :key="'settings'">
            <span>
              <span :class="$style.title">Settings</span>
              <i :class="[$style.icon, 'icmn icmn-cog']"></i>
            </span>
          </a-menu-item>
          <a-menu-item :key="'docs'">
            <a href="https://docs.cleanuitemplate.com" target="_blank">
              <span :class="$style.title">Documentation</span>
              <i :class="[$style.icon, 'icmn icmn-books']"></i>
            </a>
          </a-menu-item>
          <template v-for="(item, index) in menuData">
            <item
              v-if="!item.children && !item.divider"
              :menu-info="item"
              :styles="$style"
              :key="item.key"
            />
            <a-menu-divider v-if="item.divider" :key="index"/>
            <sub-menu v-if="item.children" :menu-info="item" :styles="$style" :key="item.key"/>
          </template>
        </a-menu>
        <div :class="$style.buyPro">
          <p>
            <strong>More components, more styles, more themes, and premium support!</strong>
          </p>
          <a
            href="https://themeforest.net/user/mediatec_software"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-sm btn-danger"
          >Buy Pro 24$</a>
        </div>
      </vue-custom-scrollbar>
    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import { getLeftMenuData } from '@/services/menu'
import SubMenu from './partials/submenu'
import Item from './partials/item'

export default {
  name: 'menu-left',
  components: { vueCustomScrollbar, SubMenu, Item },
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
      selectedKeys: [],
      openKeys: [],
    }
  },
  methods: {
    menuClick(e) {
      if (e.key === 'settings') {
        this.$store.commit('CHANGE_SETTING', { setting: 'isSettingsOpen', value: true })
      }
    },
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
