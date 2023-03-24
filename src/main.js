import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { AppRouter } from "./router/index";
import store from "./store/index";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router: AppRouter,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
