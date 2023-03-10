import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";
import Functionnalities from "@/views/Functionnalities/Functionnalities.vue";
import MixLevelResult from "@/views/Functionnalities/SimpleFunctionnalities/MixLevelResult.vue";
import MixTree from "@/views/MixTree/MixTree.vue";
import Henchs from "@/views/HenchsSearch/HenchsSearch.vue";
import Changelogs from "@/views/News/Pages/Changelogs.vue";
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
    component: Functionnalities
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
    path: "/news/changelogs",
    name: "Changelogs News",
    component: Changelogs
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
