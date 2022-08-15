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
    },
    updateHenchFavorite(state, {key: key, data: data}) {
      state.henchMixFavorite[key] = data;
      store.set("henchMixFavorite", state.henchMixFavorite);
    },
    removeHenchFromFavorite(state, value) {
      state.henchMixFavorite.splice(value, 1);
      store.set("henchMixFavorite", state.henchMixFavorite);
    },
    resetStore(state, value) {
      if (value) {
        state.henchMixFavorite = [];
        store.set("henchMixFavorite", state.henchMixFavorite);
      }
    }
  },
  actions: {},
  modules: {}
});
