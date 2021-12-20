import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../pages/home.vue"),
      meta: {
        title: '首页',
        roles: []
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/about.vue"),
      meta: {
        title: '关于',
        roles: []
      }
    },
    {
      path: "/overview-department",
      name: "Department",
      component: () => import("../pages/department/overview.vue"),
      meta: {
        title: '六部概览',
        roles: []
      }
    },
    {
      path: "/official-department",
      name: "OfficialDepartment",
      component: () => import("../pages/department/official.vue"),
      meta: {
        title: '吏部',
        roles: []
      }
    },
    {
      path: "/population-department",
      name: "PopulationDepartment",
      component: () => import("../pages/department/population.vue"),
      meta: {
        title: '户部',
        roles: [

        ]
      }
    },
    {
      path: "/education-department",
      name: "EducationDepartment",
      component: () => import("../pages/department/education.vue"),
      meta: {
        title: '礼部',
        roles: []
      }
    },
    {
      path: "/defense-department",
      name: "DefenseDepartment",
      component: () => import("../pages/department/defense.vue"),
      meta: {
        title: '兵部',
        roles: []
      }
    },
    {
      path: "/criminal-department",
      name: "CriminalDepartment",
      component: () => import("../pages/department/criminal.vue"),
      meta: {
        title: '刑部',
        roles: []
      }
    },
    {
      path: "/engineer-department",
      name: "EngineerDepartment",
      component: () => import("../pages/department/engineer.vue"),
      meta: {
        title: '工部',
        roles: []
      }
    },
    {
      path: "/draft",
      name: "DraftProvince",
      component: () => import("../pages/province/draft.vue"),
      meta: {
        title: '中书省',
        roles: []
      }
    },
    {
      path: "/censor",
      name: "CensorProvince",
      component: () => import("../pages/province/censor.vue"),
      meta: {
        title: '门下省',
        roles: []
      }
    },
    {
      path: "/implement",
      name: "ImplementProvince",
      component: () => import("../pages/province/implement.vue"),
      meta: {
        title: '尚书省',
        roles: []
      }
    },
    {
      path: "/",
      redirect: "/department",
    },
  ],
});
