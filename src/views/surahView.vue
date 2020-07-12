<template>
  <div>{{ surahData }}</div>
</template>

<script>
export default {
  name: "SurahView",
  computed: {
    surahData() {
      return this.$store.getters.getSurahItem(this.$route.params.noSurah);
    }
  },
  data: () => ({})
};
</script>

<style></style>
