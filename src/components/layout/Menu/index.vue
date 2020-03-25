<template>
  <a-layout-sider :width="'auto'" style="background: white;">
    <div style="width: 256px; background: white; padding: 20px;">
      <router-link to="/dashboard/alpha">Dashboard Alpha</router-link>
      <br />
      <br />
      <router-link to="/ui-kits/antd">Antd</router-link>
      <br />
      <router-link to="/ui-kits/bootstrap">Bootstrap</router-link>
    </div>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'cui-menu',
}
</script>
