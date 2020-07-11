import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/LanguageSelector.vue";
import SurahSelectorPage from "../views/SurahSelectorPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/surah",
    name: "selectSurat",
    component: () => import("../views/SurahSelectorPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
