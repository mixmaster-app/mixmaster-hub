<template>
  <v-navigation-drawer
    class="max-z-index"
    permanent
    persistent
    mini-variant
    v-model="isActive"
    fixed
    app
  >
    <v-row class="fill-height no-gutters">
      <v-col class="align-self-start justify-start">
        <SidebarItemsList
          class="pb-0"
          :items="this.filterIndex(this.routeCategory.Top)"
          :topDivider="false"
          :bottomDivider="true"
        />
        <SidebarItemsList
          class="pt-0"
          :items="this.filterIndex(this.routeCategory.Middle)"
          :topDivider="false"
          :bottomDivider="false"
        />
      </v-col>
      <v-col class="align-self-end justify-end">
        <UpdateIcon />
        <SidebarItemsList
          :items="this.filterIndex(this.routeCategory.Bottom)"
          :topDivider="true"
          :bottomDivider="false"
        />
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import UpdateIcon from "./Components/UpdateIcon.vue";
import SidebarItemsList from "./Components/SidebarItemsList.vue";
import { AppRoutes } from "@/router/index";
import { RouteCategory } from "@/models/utils/Route";

export default {
  name: "Sidebar",
  props: ["active"],
  components: { SidebarItemsList, UpdateIcon },
  data() {
    return {
      routeCategory: RouteCategory,
      isActive: this.active,
      routeList: AppRoutes
    };
  },
  methods: {
    filterIndex(category) {
      return this.routeList.filter(
        i => i.isDisplayedInSidebar && i.category == category
      );
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
