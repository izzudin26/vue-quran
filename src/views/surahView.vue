<template>
  <div>
    <v-container>
      <v-fade-transition mode="outin">
        <v-row justify="center">
          <v-col cols="12">
            <v-row justify="center" align="center">
              <h2>
                {{
                  language == "ID"
                    ? surahData.idNameTranslation
                    : surahData.englishNameTranslation
                }}
                - {{ surahData.name }}
              </h2>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="12" v-for="(surah, i) in surahData.ayahs" :key="i">
                <v-banner>
                  <v-avatar color="green" size="42">
                    <span class="white--text headline">{{ i + 1 }}</span>
                  </v-avatar>
                  <v-card flat>
                    <v-card-title>
                      <v-row justify="end">
                        <p align="right" class="arab">{{ surah.text.arab }}</p>
                      </v-row>
                    </v-card-title>
                    <v-card-text>
                      <p class="terjemah" align="justify">
                        {{ language == "ID" ? surah.text.id : surah.text.en }}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-banner>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SurahView",
  computed: {
    surahData() {
      const offileSurah = localStorage.getItem(`${this.$route.params.noSurah}`);
      if (offileSurah == null) {
        const getSurah = this.$store.getters.getSurahItem(
          this.$route.params.noSurah
        );
        localStorage.setItem(
          `${this.$route.params.noSurah}`,
          JSON.stringify(getSurah)
        );
        return getSurah;
      } else {
        return JSON.parse(offileSurah);
      }
    },
    language() {
      return this.$store.state.language;
    }
  },
  data: () => ({})
};
</script>

<style>
.arab {
  font-size: 30px;
  font-style: bold;
}
.terjemah {
  font-size: 18px;
}
</style>
