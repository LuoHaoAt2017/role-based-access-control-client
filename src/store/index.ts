import Vue from 'vue';
import Vuex from 'vuex';
import {
  SetUserInfo
} from './types';
import { GetUserInfo } from '../apis';

Vue.use(Vuex);

class RootState {
  userInfo: RBAC.UserInfo = {
    roles: [],
    userId: '',
    userName: ''
  }
}

export default new Vuex.Store({
  state: new RootState(),
  getters: {
  },
  mutations: {
    SetUserInfo(state, payload) {

    }
  },
  actions: {
    async getUserInfo({ commit }, userId: string) {
      try {
        const res = await GetUserInfo(userId);
        const user = res.data;
        commit(SetUserInfo, user);
      } catch {
        console.error("获取用户信息失败");
      }
    }
  }
});