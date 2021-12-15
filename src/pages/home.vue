<template>
  <div class="home">
    <h5>中国科学院全体院士名单</h5>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in people" :key="index">
        <a :href="item.href" class="list-group-item">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { GetSciencesMember } from "@/apis/index";
export default {
  name: "home",
  components: {},
  data() {
    return {
      people: [],
    };
  },
  mounted() {
    GetSciencesMember()
      .then((resp) => {
        if (resp.successful) {
          this.people = JSON.parse(resp.data);
        }
      })
      .catch((error) => {
        this.$message.error(error);
      });
  },
};
</script>
<style lang="less">
.home {
  height: 100%;
  margin: 0 auto;
}
</style>
<style lang="less" scoped>
.home {
  height: 100%;
  margin: 0 auto;
  h5 {
    text-align: center;
    height: 54px;
    line-height: 54px;
    margin: 0;
    padding: 0;
  }
  ul {
    height: calc(100% - 54px);
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
</style>