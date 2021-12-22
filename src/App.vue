<template>
  <div class="app">
    <app-header></app-header>
    <div class="app-main">
      <app-sidebar></app-sidebar>
      <app-content>
        <router-view></router-view>
      </app-content>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from "./components/app-header.vue";
import AppFooter from "./components/app-footer.vue";
import AppSidebar from './components/app-sidebar.vue';
import AppContent from './components/app-content.vue';
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppSidebar,
    AppContent
  },
};
</script>
<style lang="less">
h3 {
  text-align: center;
}
</style>
<style lang="less" scoped>
.app {
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  .app-header {
    padding: 0 16px;
    // border-bottom: thin solid #ccc;
  }
  .app-main {
    height: calc(100% - 54px - 54px);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .app-footer {
    padding: 0 16px;
    // border-top: thin solid #ccc;
  }
}
</style>