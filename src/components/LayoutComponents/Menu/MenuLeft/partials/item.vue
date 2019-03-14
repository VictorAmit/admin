<template>
  <a-menu-item :key="menuInfo.key" v-bind="$props" v-on="$listeners">
    <router-link v-if="menuInfo.url" :to="menuInfo.url">
      <span :class="styles.title">{{ menuInfo.title }}</span>
      <i v-if="menuInfo.icon" :class="[styles.icon, menuInfo.icon]"></i>
      <span v-if="menuInfo.pro" class="badge badge-primary ml-2">PRO</span>
    </router-link>
    <span v-if="!menuInfo.url" :to="menuInfo.url">
      <span :class="styles.title">{{ menuInfo.title }}</span>
      <i v-if="menuInfo.icon" :class="[styles.icon, menuInfo.icon]"></i>
      <span v-if="menuInfo.pro" class="badge badge-primary ml-2">PRO</span>
    </span>
  </a-menu-item>
</template>

<script>
import { Menu } from 'ant-design-vue'

export default {
  name: 'SubMenu',
  props: {
    ...Menu.Item.props,
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
    styles: Object,
  },
}
</script>
