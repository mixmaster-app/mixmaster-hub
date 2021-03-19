<template>
  <v-system-bar height="30" app class="user-none">
    <v-img
      src="@/assets/logo.png"
      contain
      max-height="24px"
      max-width="24px"
      class="drag"
    ></v-img>
    <span class="drag">
      {{ this.package.fullName }}
      <span class="version">({{ this.package.fullVersion }})</span>
    </span>
    <v-spacer class="drag syst-spacer"></v-spacer>
    <div
      class="pa-2 green rounded-circle d-inline-block mr-1 no-drag"
      @click="minimize"
    ></div>
    <div
      class="pa-2 orange rounded-circle d-inline-block mr-1 no-drag"
      @click="maximize"
    ></div>
    <div
      class="pa-2 red rounded-circle d-inline-block mr-1 no-drag"
      @click="close"
    ></div>
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
