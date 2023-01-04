<template>
  <div class="home center-div text-center">
    <v-img
      class="ma-2 rounded-lg"
      height="256"
      contain
      src="@/assets/logo.png"
      alt="MMFR1-Logo"
    ></v-img>
    <v-card-title>
      Bienvenue sur l'application MixmasterDesktop
    </v-card-title>
    <v-card-subtitle>
      ( Version: <b>{{ this.package.fullVersion }}</b> )
    </v-card-subtitle>
  </div>
</template>

<script>
import pjson from "@/../package.json";
import { machineIdSync } from "node-machine-id";

export default {
  name: "Home",
  data() {
    return {
      package: pjson
    };
  },
  components: {},
  methods: {},
  mounted() {
    if (!localStorage.getItem("user_identity")) {
      localStorage.setItem("user_identity", machineIdSync({ original: true }));
    }
  }
};
</script>
