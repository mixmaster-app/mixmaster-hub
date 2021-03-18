<template>
  <v-navigation-drawer
    permanent
    persistent
    mini-variant
    v-model="isActive"
    fixed
    app
  >
    <v-list>
      <v-list-item to="/">
        <v-img src="@/assets/logo.png"> </v-img>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <div v-for="tab in tabs" :key="tab.linksTo">
        <v-list-item link :to="tab.linksTo">
          <v-list-item-icon>
            <v-icon>{{ tab.iconName }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title> {{ tab.linkText }} </v-list-item-title>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["active"],
  data() {
    return {
      isActive: this.active,
      tabs: [
        {
          iconName: "mdi-dots-grid",
          linksTo: "/",
          linkText: "Fonctionnalités"
        },
        // {
        //   iconName: "mdi-account",
        //   linksTo: "/profile",
        //   linkText: "Profile"
        // },
        {
          iconName: "mdi-google-downasaur",
          linksTo: "/henchs",
          linkText: "Henchs"
        },
        {
          iconName: "mdi-cog",
          linksTo: "/settings",
          linkText: "Paramètres"
        }
      ]
    };
  },
  watch: {
    // Update isActive variable on parent update
    active() {
      this.isActive = this.active;
    },
    // Update parent Boolean
    isActive() {
      this.$emit("input", this.isActive);
    }
  }
};
</script>
