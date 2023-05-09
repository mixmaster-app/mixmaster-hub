import Vue from "vue";
import Vuex from "vuex";
import Store from "electron-store";
import { machineIdSync } from "node-machine-id";

Vue.use(Vuex);

const store = new Store();

export { store as VueStore };
export default new Vuex.Store({
  state: {
    henchMixFavorite: store.get("hench_mix_favorite") || [],
    henchCalculators: store.get("hench_calculators") || [],
    userInfos: {
      exe: store.get("user_infos")?.exe,
      login: store.get("user_infos")?.login,
      password: store.get("user_infos")?.password,
      savePassword: store.get("user_infos")?.savePassword,
      fullScreen: store.get("user_infos")?.fullScreen
    },
    userIdentity: store.get("user_identity")
  },
  mutations: {
    updateLauncherEmplacement(state, value) {
      state.userInfos.exe = value;
      store.set("user_infos", state.userInfos);
    },
    updateUserInfos(state, value) {
      state.userInfos.path = value?.path;
      state.userInfos.login = value?.login;
      state.userInfos.savePassword = value?.savePassword;
      state.userInfos.fullScreen = value?.fullScreen;
      if (value?.savePassword) {
        state.userInfos.password = value?.password;
      } else {
        state.userInfos.password = undefined;
      }
      store.set("user_infos", state.userInfos);
    },
    generateUserIdentity(state) {
      if (machineIdSync({ original: true }) != state.userIdentity) {
        state.userIdentity = machineIdSync({ original: true });
        store.set("user_identity", state.userIdentity);
      }
    },
    addHenchMixFavorite(state, value) {
      state.henchMixFavorite.push(value);
      store.set("hench_mix_favorite", state.henchMixFavorite);
    },
    updateHenchFavorite(state, { key: key, data: data }) {
      state.henchMixFavorite[key] = data;
      store.set("hench_mix_favorite", state.henchMixFavorite);
    },
    removeHenchFromFavorite(state, value) {
      state.henchMixFavorite.splice(value, 1);
      store.set("hench_mix_favorite", state.henchMixFavorite);
    },
    saveHenchCalculatorsState(state, value) {
      state.henchCalculators = value;
      store.set("hench_calculators", state.henchCalculators);
    },
    resetStore(state, value) {
      if (value) {
        state.henchMixFavorite = [];
        state.henchCalculators = [];
        state.userInfos = {
          exe: undefined,
          login: undefined,
          password: undefined,
          savePassword: undefined,
          fullScreen: undefined
        };
        store.set("hench_calculators", state.henchCalculators);
        store.set("hench_mix_favorite", state.henchMixFavorite);
        store.set("user_infos", state.userInfos);
      }
    }
  },
  actions: {},
  modules: {}
});
