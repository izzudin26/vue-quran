import Vue from "vue";
import Vuex from "vuex";
import surahData from "../data/surah.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    surah: [] as any,
    language: "ID",
  },
  mutations: {
    getSurahData(state) {
      const offlineSurah = localStorage.getItem("surah");
      if (offlineSurah == null) {
        localStorage.setItem("surah", JSON.stringify(surahData));
        state.surah = surahData;
      } else {
        state.surah = JSON.parse(offlineSurah);
      }
    },
  },
  getters: {
    getSurahItem: (state) => (numberSurah: number) => {},
  },
  actions: {},
  modules: {},
});
