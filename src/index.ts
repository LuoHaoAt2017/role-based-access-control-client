import "@babel/polyfill";
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './routes';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from './utils/axios';
import { AppStart } from './utils/app-start';
Vue.prototype.$axios = axios;
Vue.prototype.$bus = new Vue();
Vue.use(Antd);

(async function () {
  const config = await AppStart();
  if (config) {
    if (config.redirect) {
      window.location.href = config.redirect;
    } else {
      const app = new Vue({
        store: store,
        router: router,
        render(h) {
          return h(App);
        }
      });
      app.$mount('#app');
    }
  } else {
    // 没有登录的情况下，跳转到登录页面。
    window.location.href = 'http://localhost:8088/login.html';
  }
})();
