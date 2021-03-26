import Vue from "vue";
import Vuex from "vuex";
import Store from "electron-store";

Vue.use(Vuex);

const store = new Store();

export default new Vuex.Store({
  state: {
    count: store.get("count") || 0
  },
  mutations: {
    increment(state) {
      state.count++;
      store.set("count", state.count);
    }
  },
  actions: {},
  modules: {}
});
