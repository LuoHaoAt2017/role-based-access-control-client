import "@babel/polyfill";
import Vue from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './routes';
Vue.use(Antd);

const app = new Vue({
  el: '#app',
  router: router,
  render(h) {
    return h(App);
  }
});

export default app;