<template>
  <div class="main h-100 scroll-y">
    <v-row class="h-100" no-gutters>
      <v-col cols="4" align-self="center">
        <Login />
      </v-col>
      <v-col class="text-center h-100" cols="8">
        <NewsDisplay />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import pjson from "@/../package.json";
import Login from "@/views/Home/Components/Login.vue";
import NewsDisplay from "@/views/Home/Components/NewsDisplay.vue";

export default {
  name: "Home",
  data() {
    return {
      package: pjson
    };
  },
  components: { Login, NewsDisplay },
  methods: {},
  mounted() {
    this.$store.commit("generateUserIdentity");
  }
};
</script>
