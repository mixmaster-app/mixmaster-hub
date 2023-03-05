<template>
  <v-carousel
    class="fill-height fill-width rounded"
    hide-delimiter-background
    show-arrows="false"
  >
    <v-carousel-item v-for="news in newsList" :key="news.i" :src="news.img">
      <v-container class="rounded-0 fill-height fluid pa-0 ma-0 pb-3">
        <v-layout class="fill-height align-start">
          <v-flex xs12>
            <v-chip
              elevation="0"
              class="pa-2 ma-2"
              style="opacity: 0.8"
              :to="news.link"
            >
              {{ news.text }}
            </v-chip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "NewsCarousel",
  components: {},
  data() {
    return {
      newsList: [
        {
          id: 0,
          text: "Changelogs",
          link: "/news/changelogs",
          img: require("@/assets/img/mixmaster_app_banner.jpg")
        }
      ]
    };
  }
};
</script>
