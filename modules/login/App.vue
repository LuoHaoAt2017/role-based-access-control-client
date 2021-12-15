<template>
  <div class="app">
    <form
      action="/login"
      method="post"
      enctype="application/x-www-form-urlencoded"
    >
      <div class="form-group">
        <label for="username">用户名</label>
        <input type="text" class="form-control" name="username" id="username" />
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
        />
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%">
        提交
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="less" scoped>
.app {
  height: 100%;
}
</style>
<style lang="less">
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