<template>
  <v-app class="app-main">
    <Systembar />
    <Sidebar :active="activeSidebar" v-model="activeSidebar" />

    <v-main class="app" style="margin-top: 10px; height: 100%;">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Systembar from "@/components/Systembar.vue";
import Sidebar from "@/components/Sidebar.vue";
import "@fontsource/sora";
require("@/assets/styles/style.css");

export default {
  name: "App",
  components: { Sidebar, Systembar },
  data: () => {
    return { activeSidebar: true };
  },
  methods: {},
  mounted() {}
};
</script>

<style>
.app-main {
  font-family: "Sora";
}
.v-main__wrap {
  height: calc(100vh - 30px);
}
.w-100 {
  width: 100%;
}
.h-100 {
  height: 100%;
}
.scroll-y {
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
