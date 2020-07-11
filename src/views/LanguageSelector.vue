<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-fade-transition mode="out-in">
          <v-col cols="12">
            <v-row justify="center" align="center">
              <v-img
                src="../assets/smartphone-quran-min.png"
                class="mb-3"
                contain
                max-height="500"
              />
            </v-row>
            <v-row justify="center">
              <div class="d-flex flex-column">
                <v-btn rounded outlined color="blue" class="mt-3"
                  >bahasa Indonesia</v-btn
                >
                <v-btn rounded outlined color="blue" class="mt-3"
                  >English Language</v-btn
                >
              </div>
            </v-row>
          </v-col>
        </v-fade-transition>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Main"
};
</script>
<style>
img {
  width: 20%;
}
</style>
