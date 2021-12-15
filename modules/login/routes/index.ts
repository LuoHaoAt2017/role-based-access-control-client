import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/register.vue')
    },
    {
      path: '/',
      redirect: '/login'
    },
  ]
});