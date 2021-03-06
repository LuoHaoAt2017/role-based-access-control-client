import "@babel/polyfill";
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './routes';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from './utils/axios';
import { AppStart } from './utils/app-start';
import Loading from "./components/app-loading.vue";
Vue.prototype.$axios = axios;
Vue.prototype.$bus = new Vue();
Vue.use(Antd);
Vue.component(Loading.name, Loading);
(async function () {
  const user = await AppStart();
  if (user) {
    store.state.userInfo = user;
    const app = new Vue({
      el: '#app',
      store: store,
      router: router,
      render(h) {
        return h(App);
      }
    });
  } else {
    // 没有登录的情况下，跳转到登录页面。
    window.location.href = 'http://localhost:8088/index.html';
  }
})();
