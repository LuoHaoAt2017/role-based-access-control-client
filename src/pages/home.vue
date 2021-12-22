<template>
  <div class="home">
    <h5>中国科学院全体院士名单</h5>
    <app-loading :loading="loading" class="loading">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(item, index) in people"
          :key="index"
        >
          <a :href="item.href">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </app-loading>
  </div>
</template>
<script>
import { GetSciencesMember } from "@/apis/index";
export default {
  name: "home",
  data() {
    return {
      people: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    GetSciencesMember()
      .then((resp) => {
        if (resp.successful) {
          this.people = JSON.parse(resp.data);
        }
      })
      .catch((error) => {
        this.$message.error(error);
      })
      .finally(() => {
        this.loading = false;
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
  .loading {
    height: calc(100% - 54px);
  }
  ul {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    li {
      padding: 0.25rem 1.25rem;
      a {
        font-size: 16px;
      }
    }
  }
}
</style>