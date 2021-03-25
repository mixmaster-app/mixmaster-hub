<template>
  <v-app id="inspire">
    <Systembar />
    <Sidebar :active="activeSidebar" v-model="activeSidebar" />

    <v-main class="scroll" style="margin-top: 10px;">
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
  methods: {},
  mounted() {
    this.$router.push({ path: "/" });
  }
};
</script>
