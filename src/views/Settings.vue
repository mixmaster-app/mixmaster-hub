<template>
  <div class="settings full-height">
    <v-tabs
      vertical
      v-model="tab"
      color="white"
      background-color="grey accent-4"
      class="full-height"
    >
      <v-tab v-for="(item, index) in items" :key="index" style="width: 160px;"
        >{{ item.libelle }}
      </v-tab>
      <v-tab-item
        v-for="(item, index) in items"
        :key="index"
        class="ma-4"
        style="height: 90vh"
      >
        <component :is="item.component"></component>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
// const { shell } = require("electron");
import Changelogs from "@/views/Settings/Changelogs.vue";
import Settings from "@/views/Settings/Settings.vue";

export default {
  name: "Settings",
  data() {
    return {
      tab: null,
      items: [
        {
          libelle: "Settings",
          component: Settings
        },
        {
          libelle: "Changelogs",
          component: Changelogs
        }
      ]
    };
  },
  methods: {
    // openPage(url) { shell.openExternal(url); },
  }
};
</script>
