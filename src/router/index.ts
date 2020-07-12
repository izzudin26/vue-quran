import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/LanguageSelector.vue";

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
  {
    path: "/surah/:noSurah",
    name: "surahView",
    component: () => import("../views/surahView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
