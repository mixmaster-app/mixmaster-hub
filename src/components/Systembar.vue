<template>
  <v-system-bar height="30" app class="syst-bar">
    <v-img
      src="@/assets/logo.png"
      contain
      max-height="24px"
      max-width="24px"
    ></v-img>
    Mixmaster <span class="version">({{ this.package.version }})</span>
    <v-spacer class="drag"></v-spacer>
    <div
      class="pa-2 green rounded-circle d-inline-block mr-1"
      @click="minimize"
    ></div>
    <div
      class="pa-2 orange rounded-circle d-inline-block mr-1"
      @click="maximize"
    ></div>
    <div
      class="pa-2 red rounded-circle d-inline-block mr-1"
      @click="close"
    ></div>

    <!-- <v-icon>mdi-minus</v-icon>
    <v-icon>mdi-checkbox-blank-outline</v-icon>
    <v-icon @mouseup="close">mdi-close</v-icon> -->
  </v-system-bar>
</template>

<script>
import { ipcRenderer } from "electron";
import pjson from "@/../package.json";

export default {
  name: "Systembar",
  data() {
    return {
      package: pjson
    };
  },
  methods: {
    close() {
      ipcRenderer.send("close-app", true);
    },
    minimize() {
      ipcRenderer.send("minimize-app", true);
    },
    maximize() {
      ipcRenderer.send("maximize-app", true);
    }
  }
};
</script>
