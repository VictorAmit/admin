<template>
  <div :class="$style.topbar">
    <div class="mr-4">
      <cui-issues-history />
    </div>
    <div class="mr-4">
      <cui-project-management />
    </div>
    <div class="mr-auto">
      <cui-live-search />
    </div>
    <a
      href="https://themeforest.net/item/clean-ui-react-admin-template/21938700"
      target="_blank"
      rel="noopener noreferrer"
      class="mr-4 d-none d-sm-inline"
    >
      <a-button type="danger">Buy Bundle</a-button>
    </a>
    <div class="mr-4">
      <cui-language-selector />
    </div>
    <div class="mr-4">
      <cui-home-menu />
    </div>
    <cui-profile-menu />
  </div>
</template>

<script>
import CuiIssuesHistory from './IssuesHistory'
import CuiProjectManagement from './ProjectManagement'
import CuiLiveSearch from './LiveSearch'
import CuiLanguageSelector from './LanguageSelector'
import CuiHomeMenu from './HomeMenu'
import CuiProfileMenu from './ProfileMenu'

export default {
  components: {
    CuiIssuesHistory,
    CuiProjectManagement,
    CuiLiveSearch,
    CuiLanguageSelector,
    CuiHomeMenu,
    CuiProfileMenu,
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
