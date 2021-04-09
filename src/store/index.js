import Vue from "vue";
import Vuex from "vuex";
import Store from "electron-store";

Vue.use(Vuex);

const store = new Store();

export default new Vuex.Store({
  state: {
    henchMixFavorite: store.get("henchMixFavorite") || []
  },
  mutations: {
    addHenchMixFavorite(state, value) {
      state.henchMixFavorite.push(value);
      store.set("henchMixFavorite", state.henchMixFavorite);
    }
  },
  actions: {},
  modules: {}
});
