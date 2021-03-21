import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/views/Home.vue";
import Functionnality from "@/views/Functionnality.vue";
import MixLevelResult from "@/views/Functionnality/MixLevelResult.vue";
import MixTreeView from "@/views/Functionnality/MixTreeView.vue";
import Profile from "@/views/Profile.vue";
import Henchs from "@/views/Henchs.vue";
import Settings from "@/views/Settings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Fonctionnalités",
    component: Functionnality
  },
  {
    path: "/functionnality/mixlvlresult",
    name: "Mix level résultat",
    component: MixLevelResult
  },
  {
    path: "/functionnality/mixtreeview",
    name: "Mix tree",
    component: MixTreeView
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/henchs",
    name: "Henchs",
    component: Henchs
  },
  {
    path: "/settings",
    name: "Paramètres",
    component: Settings
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
