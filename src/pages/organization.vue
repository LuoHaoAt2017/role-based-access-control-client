<template>
  <div class="organization-list">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col" style="width: 50px">#</th>
          <th scope="col" style="width: 200px">人员名称</th>
          <th scope="col">角色列表</th>
          <th scope="col">修改时间</th>
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
            <a-select mode="multiple" style="width: 100%" :value="item.roleIds" @change="(value) => onChange(item, value)">
              <a-select-option v-for="(elem, j) in roles" :key="j" :value="elem.id">
                {{ elem.nick_name }}
              </a-select-option>
            </a-select>
          </td>
          <td style="width:200px;">{{ item.updated_time | formatTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import moment from "moment";
import { mapState } from "vuex";
import { GetUsersWithRole, UpdateUserRoles, GetRoles } from "@/apis/index";
export default {
  name: "Organization",
  filters: {
    formatTime(value) {
      return moment(value).format("YYYY-MM-DD HH:mm:ss");
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
      GetUsersWithRole()
        .then((resp) => {
          if (resp.successful) {
            this.users = resp.data.map(elem => ({
              id: elem.id,
              username: elem.username,
              updated_time: elem.updated_time,
              roleIds: elem.roles.map(x => x.id)
            }));
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
    onChange(user, value) {
      UpdateUserRoles({
        roles: value,
        userId: user.id
      }).then((res) => {
        if (res.successful) {
          user.roleIds = value;
        }
      }).catch((err) => {
        this.$message.error(err);
      });
    }
  },
};
</script>
<style lang="less">
.organization-list {
  height: 100%;
  margin: 0 auto;
}
</style>