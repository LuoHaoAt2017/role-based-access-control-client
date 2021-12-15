<template>
  <div class="register">
    <a-form
      autocomplete="off"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
    >
      <a-form-item label="用户名">
        <a-input type="text" name="username" />
      </a-form-item>
      <a-form-item label="密码">
        <a-input type="password" name="password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
        <a-button-group style="width: 300px">
          <a-button type="danger" style="width: 100%"> 注册 </a-button>
          <a-button type="primary" style="width: 100%" @click="register">
            前往登录
          </a-button>
        </a-button-group>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import cookies from "js-cookie";
import { login } from "../apis";

export default {
  name: "register",
  methods: {
    register() {
      login({
        username: "luohao",
        password: "123",
      })
        .then((resp) => {
          if (resp.successful) {
            cookies.set("rbac-cookie", resp.data);
            window.location.href = "http://localhost:8088/index.html";
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