<template>
  <div class="app-header">
    <a-button @click="goHome" type="primary">首页</a-button>
    <h5>基于角色的权限设计</h5>
    <a-button @click="logout" type="danger">退出</a-button>
  </div>
</template>
<script>
import { Logout } from '@/apis/index';
export default {
  name: 'app-header',
  methods: {
    logout() {
      Logout().then(() => {
        window.location.href = 'http://localhost:8088/index.html'
      }).catch(() => {
        this.$message.error("退出登录失败");
      });
    },
    goHome() {
      window.location.href = 'http://localhost:8088/home.html'
    }
  }
}
</script>
<style lang="less" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  line-height: 54px;
  // background-image: url('../assets/img/title.jpg');
  background-repeat: repeat;
  background-size: 100% 100%;
  background-position: center;
  background-color: oldlace;
  h5 {
    margin: 0;
  }
}
</style>