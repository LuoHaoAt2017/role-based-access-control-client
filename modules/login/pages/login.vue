<template>
  <div class="login">
    <a-form autocomplete="off" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
      <a-form-item label="用户名">
        <a-input type="text" name="username" />
      </a-form-item>
      <a-form-item label="密码">
        <a-input type="password" name="password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
        <a-button-group style="width: 300px">
          <a-button type="primary" style="width: 100%" @click="login">
            登录
          </a-button>
          <a-button type="danger" style="width: 100%">
            前往注册
          </a-button>
        </a-button-group>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { login } from "../apis";
export default {
  name: "Login",
  methods: {
    login() {
      // const username = $("#username").val();
      // const password = $("#password").val();
      // if (username && password) {
      // }
      login({
        username: "luohao",
        password: "123",
      })
        .then((resp) => {
          // debugger; // eslint-disable-line
          if (resp.successful) {
            // cookies.set("rbac-cookie", resp.data);
            window.location.href = "http://localhost:8088/home.html";
            return;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
<style lang="less" scoped>
form {
  width: 80%;
  margin: 200px auto;
  padding: 50px 100px;
  border: thin solid #eee;
  border-radius: 4px;
  .form-group {
    display: flex;
    label {
      width: 150px;
    }
  }
}
</style>