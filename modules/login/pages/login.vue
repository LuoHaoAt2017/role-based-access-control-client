<template>
  <div class="login">
    <a-form autocomplete="off" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
      <a-form-item label="用户名">
        <a-input type="text" name="username" v-model="username" />
      </a-form-item>
      <a-form-item label="密码">
        <a-input type="password" name="password" v-model="password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 20, offset: 4 }">
        <a-button-group style="width: 100%">
          <a-button type="primary" style="width: 50%" @click="login">
            登录
          </a-button>
          <a-button type="danger" style="width: 50%" @click="goto">
            前往注册
          </a-button>
        </a-button-group>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { Login } from "../apis";
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      Login({
        username: this.username,
        password: this.password,
      })
        .then((resp) => {
          if (resp.successful) {
            const uid = resp.data.id;
            window.location.href = `http://localhost:8088/home.html?uid=${uid}`;
            return;
          }
        })
        .catch((err) => {
          this.$message.error(err.errorMesg);
        });
    },
    goto() {
      this.$router.push({
        name: 'register'
      });
    }
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