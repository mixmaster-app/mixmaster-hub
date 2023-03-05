<template>
  <div class="main fill-height scroll-y">
    <v-row class="h-90" no-gutters>
      <v-col class="pa-3" cols="4">
        <Login />
      </v-col>
      <v-col class="pa-3" cols="8">
        <NewsCarousel />
      </v-col>
    </v-row>
    <v-col no-gutters>
      <v-row class="pl-3 pr-3">
        <NewsList />
      </v-row>
    </v-col>
  </div>
</template>

<script>
import pjson from "@/../package.json";
import Login from "@/views/Home/Components/Login.vue";
import NewsList from "@/views/Home/Components/NewsList.vue";
import NewsCarousel from "@/views/Home/Components/NewsCarousel.vue";

export default {
  name: "Home",
  data() {
    return {
      package: pjson
    };
  },
  components: { Login, NewsList, NewsCarousel },
  methods: {},
  mounted() {
    this.$store.commit("generateUserIdentity");
  }
};
</script>
