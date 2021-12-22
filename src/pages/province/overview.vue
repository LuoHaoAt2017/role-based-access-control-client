<template>
  <div class="department-list">
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">部门名称</th>
          <th scope="col">部门职责</th>
          <th scope="col">部门长官</th>
          <th scope="col">创建时间</th>
          <th scope="col">修改时间</th>
          <th scope="col">允许操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in depts" :key="index">
          <th scope="row">{{ index }}</th>
          <td>{{ item.dept_name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.ministor || "缺失" }}</td>
          <td>{{ item.created_time | formatTime }}</td>
          <td>{{ item.updated_time | formatTime }}</td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                class="btn btn-primary"
                @click="goDetail(item)"
              >
                详情
              </button>
              <button
                type="button"
                class="btn btn-success"
                @click="goUpdate(item)"
              >
                编辑
              </button>
              <button
                type="button"
                class="btn btn-warning"
                @click="goCreate(item)"
              >
                新增
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="goDelete(item)"
              >
                删除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import moment from "moment";
import { GetDepts } from "@/apis/index";
export default {
  name: "department-overview",
  filters: {
    formatTime(value) {
      return moment(value).format("YYYY-MM-DD HH:mm");
    },
  },
  data() {
    return {
      depts: [],
      loading: false,
    };
  },
  mounted() {
    this.getDepts();
  },
  activated() {
    this.getDepts();
  },
  methods: {
    getDepts() {
      this.loading = true;
      GetDepts()
        .then((resp) => {
          if (resp.successful) {
            this.depts = resp.data;
          }
        })
        .catch((error) => {
          this.$message.error(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    goDetail(dept) {
      const route = this.mapTypeToRoute(dept);
      this.$router.push({
        name: route,
        query: {
          mode: "update",
        },
      });
    },
    goUpdate(dept) {
      const route = this.mapTypeToRoute(dept);
      this.$router.push({
        name: route,
        query: {
          mode: "update",
        },
      });
    },
    goCreate(dept) {},
    goDelete(dept) {},
    mapTypeToRoute(dept) {
      let targetDept = "NotFound";
      switch (dept.dept_type) {
        case "1":
          targetDept = "OfficialDepartment";
          break;
        case "2":
          targetDept = "PopulationDepartment";
          break;
        case "3":
          targetDept = "EducationDepartment";
          break;
        case "4":
          targetDept = "DefenseDepartment";
          break;
        case "5":
          targetDept = "CriminalDepartment";
          break;
        case "6":
          targetDept = "EngineerDepartment";
          break;
      }
      return targetDept;
    },
  },
};
</script>
<style lang="less">
.department-list {
  height: 100%;
  margin: 0 auto;
}
</style>
<style lang="less" scoped>
.department-list {
  ul {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    li {
      font-size: 16px;
      padding: 0.25rem 1.25rem;
    }
  }
}
</style>