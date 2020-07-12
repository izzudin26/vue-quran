<template>
  <div>
    <v-container>
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
    }
  },
  data: () => ({
    language: "ID"
  }),
  methods: {
    selectSurah(val) {
      console.log(val);
    }
  },
  mounted() {
    store.commit("getSurahData");
  }
};
</script>

<style></style>
