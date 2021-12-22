<template>
  <div class="organization-list">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col" style="width: 50px">#</th>
          <th scope="col" style="width: 200px">人员名称</th>
          <th scope="col">角色列表</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in users" :key="index">
          <th scope="row">{{ index }}</th>
          <td>
            {{ item.username }}
            <span v-if="item.id === userInfo.id" class="badge badge-secondary">本人</span>
          </td>
          <td>
            <a-select mode="multiple" style="width: 100%">
              <a-select-option v-for="(elem, j) in roles" :key="j">
                {{ elem.nick_name }}
              </a-select-option>
            </a-select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import moment from "moment";
import { mapState } from "vuex";
import { GetUsers, GetRoles } from "@/apis/index";
export default {
  name: "Organization",
  filters: {
    formatTime(value) {
      return moment(value).format("YYYY-MM-DD HH:mm");
    },
  },
  data() {
    return {
      users: [],
      roles: [],
    };
  },
  computed: mapState({
    userInfo: (state) => state.userInfo,
  }),
  mounted() {
    this.getUsers();
    this.getRoles();
  },
  methods: {
    getUsers() {
      GetUsers()
        .then((resp) => {
          if (resp.successful) {
            this.users = resp.data;
          }
        })
        .catch((error) => {
          this.$message.error(error);
        });
    },
    getRoles() {
      GetRoles()
        .then((resp) => {
          if (resp.successful) {
            this.roles = resp.data;
          }
        })
        .catch((error) => {
          this.$message.error(error);
        });
    },
  },
};
</script>
<style lang="less">
.organization-list {
  height: 100%;
  margin: 0 auto;
}
</style>