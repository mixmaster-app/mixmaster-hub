<template>
  <v-app :class="['app-main']">
    <Systembar />
    <Sidebar :active="activeSidebar" v-model="activeSidebar" />

    <v-main class="app">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Systembar from "@/components/Systembar.vue";
import Sidebar from "@/components/Sidebar.vue";
import "@fontsource/sora";
require("@/assets/styles/style.css");
require("@/assets/styles/themes/main-theme.css");

export default {
  name: "App",
  components: { Sidebar, Systembar },
  data() {
    return {
      activeSidebar: true
    };
  },
  methods: {},
  mounted() {}
};
</script>
