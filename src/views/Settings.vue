<template>
  <div class="settings full-height">
    <v-card class="pa-4 scroll full-height user-none">
      <v-simple-table>
        <thead>
          <tr>
            <td colspan="2" class="text-left">
              Settings 🔧
            </td>
          </tr>
        </thead>
        <SettingsBody />
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
import SettingsBody from "@/components/Settings/SettingsBody.vue";

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
