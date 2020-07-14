<template>
  <div>
    <v-container
      ><v-fade-transition mode="out-in">
        <v-row justify="center">
          <v-col
            cols="12"
            sm="12"
            xs="12"
            md="4"
            lg="4"
            xl="3"
            v-for="(surah, i) in surah"
            :key="i"
          >
            <v-card @click="selectSurah(i + 1)" outlined>
              <v-card-title>
                {{ i + 1 }}. {{ surah.idName }} <v-spacer></v-spacer>
                {{ surah.name }}</v-card-title
              >
              <v-card-subtitle>
                {{
                  language == "ID"
                    ? surah.idNameTranslation
                    : surah.englishNameTranslation
                }}
                <v-spacer></v-spacer>
                {{ surah.numberOfAyahs }}
                {{ language == "ID" ? "Ayat" : "Ayahs" }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "SurahSelectorPage",
  computed: {
    surah() {
      return store.state.surah;
    },
    language() {
      return this.$store.state.language;
    }
  },
  methods: {
    selectSurah(val) {
      this.$router.push({ name: "surahView", params: { noSurah: val } });
    }
  },
  mounted() {
    store.commit("getSurahData");
  }
};
</script>

<style></style>
