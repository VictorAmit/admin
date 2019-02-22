<template>
  <div id="app">
    <a-layout>
      <a-layout-sider :width="256" :class="$style.sider">
        <cui-menu-left />
      </a-layout-sider>
      <a-layout>
        <a-layout-header>
          <cui-topbar />
        </a-layout-header>
        <a-layout-content>
          <div class="utils__content">
            <router-view />
          </div>
        </a-layout-content>
        <a-layout-footer>
          <cui-footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import CuiTopbar from "@/components/LayoutComponents/Topbar";
import CuiFooter from "@/components/LayoutComponents/Footer";
import CuiMenuLeft from "@/components/LayoutComponents/Menu/MenuLeft";

export default {
  components: { CuiFooter, CuiTopbar, CuiMenuLeft }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/mixins.scss";

.sider {
  @media (max-width: $md-max-width) {
    flex: 0 0 64px !important;
    max-width: 64px !important;
    min-width: 64px !important;
    width: 64px !important;
  }
}
</style>
