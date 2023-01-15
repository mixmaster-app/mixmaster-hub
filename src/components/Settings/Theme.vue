<template>
  <tr>
    <td class="text-left pa-2">
      <b>Theme</b>
      <p class="mt-2">
        Enable dark theme or light theme
      </p>
    </td>
    <td class="text-right">
      <v-switch v-model="isDarkTheme" @click="toggle" />
    </td>
  </tr>
</template>

<script>
export default {
  name: "Theme",
  components: {},
  data() {
    return {
      isDarkTheme: localStorage.getItem("dark_theme") == "true"
    };
  },
  methods: {
    toggle() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark);
    }
  }
};
</script>
