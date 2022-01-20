import Vue from "vue";
import Vuex from "vuex";
import userStore from "./modules/users"
// import user from "./modules/users"


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users: userStore,
    // users: userStore,
  },
});
