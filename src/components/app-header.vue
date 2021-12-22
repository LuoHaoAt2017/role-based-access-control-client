<template>
  <div class="app-header">
    <button class="btn btn-primary" @click="goHome" type="primary">首页</button>
    <h5>基于角色的权限设计</h5>
    <div class="dropdown">
      <button
        class="btn btn-success dropdown-toggle"
        type="button"
        id="settings"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        设置
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" @click="gotoOrg">
          组织机构
        </a>
        <a class="dropdown-item" @click="logout">
          退出
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { Logout } from "@/apis/index";
export default {
  name: "app-header",
  methods: {
    logout() {
      Logout()
        .then(() => {
          window.location.href = "http://localhost:8088/index.html";
        })
        .catch(() => {
          this.$message.error("退出登录失败");
        });
    },
    goHome() {
      this.$router.push({
        name: "Home",
      });
    },
    gotoOrg() {
      this.$router.push({
        name: 'Organization'
      });
    }
  },
};
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