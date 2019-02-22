<template>
  <div :class="$style.menu">
    Menu Left
  </div>
</template>

<style lang="scss" module>
@import "@/assets/styles/mixins.scss";

.menu {
  width: 100%;
  height: 100%;
  background: $menuBg;
  padding: 20px;
  color: $white;
}
</style>
