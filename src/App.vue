<template>
  <div class="app">
    <app-header></app-header>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from "./components/app-header.vue";
import AppFooter from "./components/app-footer.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
<style lang="less" scoped>
.app {
  height: 100%;
  padding: 0 16px;
  overflow-y: hidden;
  overflow-x: hidden;
  .app-header {
    // border-bottom: thin solid #ccc;
  }
  .app-content {
    height: calc(100% - 54px - 54px);
  }
  .app-footer {
    // border-top: thin solid #ccc;
  }
}
</style>