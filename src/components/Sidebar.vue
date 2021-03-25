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
      <div v-for="(tab, key) in filterIndex" :key="key">
        <v-list-item link :to="tab.path" v-if="tab.doDspInSidebar">
          <v-list-item-icon>
            <v-icon>{{ tab.iconName }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title> {{ tab.name }} </v-list-item-title>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ROUTE_LIST from "@/router/routes.js";

export default {
  name: "Sidebar",
  props: ["active"],
  data() {
    return {
      isActive: this.active,
      indexList: ROUTE_LIST
    };
  },
  computed: {
    filterIndex() {
      return this.indexList.filter(i => i.doDspInSidebar === true);
    }
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
