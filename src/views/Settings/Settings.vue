<template>
  <div class="settings h-100">
    <v-card class="pa-4 scroll">
      <h1 class="pl-2">Paramètres 🔧</h1>
      <v-divider></v-divider>
      <v-simple-table>
        <SettingsBody />
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
import SettingsBody from "@/views/Settings/Components/SettingsBody.vue";

export default {
  name: "Settings",
  components: { SettingsBody },
  data() {
    return {
      user_identity: localStorage.getItem("user_identity")
    };
  },
  methods: {}
};
</script>

<style>
.settings {
  background: var(--background-main) !important;
}
.almost-full-width {
  width: 90%;
}
tr:hover {
  background-color: transparent !important;
}
</style>
