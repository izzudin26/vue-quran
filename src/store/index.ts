import Vue from "vue";
import Vuex from "vuex";
const surahData = require("../data/surah.json");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    surah: surahData,
  },
  mutations: {},
  actions: {},
  modules: {},
});
