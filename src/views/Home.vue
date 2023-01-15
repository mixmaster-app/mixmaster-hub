<template>
  <div class="main h-100 scroll-y">
    <v-row no-gutters>
      <v-col cols="4" align-self="center">
        <Login />
      </v-col>
      <v-col class="text-center" cols="8">
        <NewsDisplay />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import pjson from "@/../package.json";
import { machineIdSync } from "node-machine-id";
import Login from "@/components/Login/Login.vue";
import NewsDisplay from "@/components/Home/NewsDisplay.vue";

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
    if (!localStorage.getItem("user_identity")) {
      localStorage.setItem("user_identity", machineIdSync({ original: true }));
    }
  }
};
</script>
