<template>
  <v-card class="pa-4 scroll full-height user-none">
    <v-card-title>Settings 🔧</v-card-title>
    <br />
    <v-card-actions class="almost-full-width">
      <b>Reset store</b>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" color="red darken-2" dark @click="resetStore()">
        <v-icon>mdi-autorenew</v-icon>
      </v-btn>
    </v-card-actions>
    <v-divider class="mt-5 mb-5"></v-divider>
    <v-card-actions class="almost-full-width">
      <b>Magic trick {{ data ? "🐰" : "" }}</b>
      <v-spacer></v-spacer>
      <span class="mr-5">
        {{ data ? "Poof" : "" }} it's {{ data ? "on" : "off" }} !
      </span>
      <v-switch inset v-model="data"></v-switch>
    </v-card-actions>
    <v-divider class="mt-5 mb-5"></v-divider>
    <Easter01 />
  </v-card>
</template>

<script>
import Easter01 from "@/components/EasterEggs/Easter01.vue";

export default {
  name: "Settings",
  components: { Easter01 },
  data() {
    return {
      data: false
    };
  },
  methods: {
    resetStore() {
      this.$store.commit("resetStore", true);
      localStorage.removeItem("henchSearch");
      localStorage.removeItem("treeMixData");
    }
  },
  computed: {}
};
</script>
<style scoped>
.almost-full-width {
  width: 90%;
}
</style>
