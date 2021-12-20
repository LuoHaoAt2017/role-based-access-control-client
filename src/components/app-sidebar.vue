<template>
  <div class="app-sidebar">
    <a-menu style="width: 256px" mode="vertical">
      <a-menu-item key="1">
        <a-icon type="mail" />
        Navigation One
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  name: 'app-sidebar',
  computed: {
    userInfo: state => state.userInfo
  }
}
</script>
<style lang="less" scoped>
.app-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>