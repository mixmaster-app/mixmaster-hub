<template>
  <v-system-bar height="30" app class="user-none max-z-index">
    <v-img
      src="@/assets/logo.png"
      contain
      max-height="24px"
      max-width="24px"
      class="drag"
    ></v-img>
    <span class="drag">
      {{ this.package.fullName }}
      <span class="version">({{ this.package.version }})</span>
    </span>
    <v-spacer class="drag syst-spacer"></v-spacer>
    <v-icon @click="minimize">
      mdi-window-minimize
    </v-icon>
    <v-icon @click="maximize">
      mdi-window-maximize
    </v-icon>
    <v-icon color="red" @click="close">
      mdi-window-close
    </v-icon>
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
