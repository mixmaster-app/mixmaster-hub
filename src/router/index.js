import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";
import Functionnalities from "@/views/Functionnalities/Functionnalities.vue";
import MixLevelResult from "@/views/Functionnalities/SimpleFunctionnalities/MixLevelResult.vue";
import MixTree from "@/views/MixTree/MixTree.vue";
import Henchs from "@/views/HenchsSearch/HenchsSearch.vue";
import Changelogs from "@/views/News/Pages/Changelogs.vue";
import Settings from "@/views/Settings/Settings.vue";
import { Route } from "@/models/utils/Route";
import { RouteCategory } from "../models/utils/Route";

Vue.use(VueRouter);

const AppRoutes = [
  // Home
  new Route("/", Home)
    .setIcon("mdi-home")
    .setName("Home")
    .addAliases(["/home", "/h"])
    .setRouteCategory(RouteCategory.Top)
    .disableDisplayInFunctionnality(),
  // Functionnalities
  new Route("/functionnalities", Functionnalities)
    .setIcon("mdi-dots-grid")
    .setName("Fonctionnalités")
    .disableDisplayInSidebar()
    .disableDisplayInFunctionnality(),
  // Henchs
  new Route("/henchs-search", Henchs)
    .setIcon("mdi-magnify")
    .setName("Recherche de Henchs")
    .setImage("03_henchlist"),
  // MixTree
  new Route("/mix-tree", MixTree)
    .setIcon("mdi-family-tree")
    .setName("Arbre de mix")
    .setImage("02_mixtreeview"),
  // MixLevelResult
  new Route("/mix-lvl-result", MixLevelResult)
    .setIcon("mdi-calculator-variant-outline")
    .setName("Résultat Lv. de mix")
    .setImage("01_mixlevelresult"),
  // Changelogs
  new Route("/news/changelogs", Changelogs)
    .setIcon("mdi-format-list-text")
    .setName("Changelogs News")
    .setRouteCategory(RouteCategory.Bottom)
    .disableDisplayInFunctionnality(),
  // Settings
  new Route("/settings", Settings)
    .setIcon("mdi-cog-outline")
    .setName("Paramètres")
    .setRouteCategory(RouteCategory.Bottom)
    .disableDisplayInFunctionnality()
];

const AppRouter = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: AppRoutes
});

export { AppRouter, AppRoutes };
