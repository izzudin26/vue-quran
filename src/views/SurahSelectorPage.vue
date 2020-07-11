<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-card
          v-for="(surah, i) in surah"
          :key="i"
          class="mb-2 col-xs-12 col-sm-12 col-md-4 col-lg-3"
          @click="selectSurah(i + 1)"
          flat
        >
          <v-card-title>
            {{ i + 1 }}. {{ surah.englishName }} <v-spacer></v-spacer>
            {{ surah.name }}</v-card-title
          >
          <v-card-subtitle>
            {{
              language == "ID"
                ? surah.idNameTranslation
                : surah.englishNameTranslation
            }}
            <v-spacer></v-spacer>
            {{ surah.numberOfAyahs }} {{ language == "ID" ? "Ayat" : "Ayahs" }}
          </v-card-subtitle>
        </v-card>
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
  }
};
</script>

<style></style>
