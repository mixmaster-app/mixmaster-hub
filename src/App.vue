<template>
  <v-app id="inspire">
    <Systembar />
    <Sidebar :active="activeSidebar" v-model="activeSidebar" />
    <!-- <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="activeSidebar = !activeSidebar">
      </v-app-bar-nav-icon>
      <span style="user-select:none">Mixmaster</span>
    </v-app-bar> -->

    <v-main class="scroll">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Systembar from "@/components/Systembar.vue";
import Sidebar from "@/components/Sidebar.vue";
require("@/assets/styles/style.css");

export default {
  name: "App",
  components: { Sidebar, Systembar },
  data: () => {
    return { activeSidebar: true };
  },
  methods: {}
};
</script>
