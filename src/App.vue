<template>
  <v-app id="inspire">
    <Sidebar :active="activeSidebar" v-model="activeSidebar" />
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="activeSidebar = !activeSidebar">
      </v-app-bar-nav-icon>
      Mixmaster
      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>

    <v-main class="scroll">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
require("@/assets/styles/style.css");

export default {
  name: "App",
  components: { Sidebar },
  data: () => {
    return { activeSidebar: true };
  },
  methods: {}
};
</script>
