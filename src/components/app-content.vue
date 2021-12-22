<template>
  <div class="app-content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "app-content",
};
</script>
<style lang="less" scoped>
.app-content {
  height: 100%;
  width: 100%;
  padding: 16px 16px;
  box-sizing: border-box;
}
</style>