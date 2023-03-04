import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";
import Functionnality from "@/views/Functionnality.vue";
import MixLevelResult from "@/views/Functionnality/MixLevelResult.vue";
import MixTree from "@/views/MixTree/MixTree.vue";
import Henchs from "@/views/HenchsSearch/HenchsSearch.vue";
import Settings from "@/views/Settings/Settings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: ["/home", "/h"],
    name: "Home",
    component: Home
  },
  {
    path: "/functionnalities",
    name: "Fonctionnalités",
    component: Functionnality
  },
  {
    path: "/mix-lvl-result",
    name: "Résultat Lv. de mix",
    component: MixLevelResult
  },
  {
    path: "/mix-tree",
    name: "Arbre de mix",
    component: MixTree
  },
  {
    path: "/henchs-search",
    name: "Recherche de Henchs",
    component: Henchs
  },
  {
    path: "/settings",
    name: "Paramètres",
    component: Settings
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
