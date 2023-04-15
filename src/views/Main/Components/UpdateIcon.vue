<template>
  <v-list nav dense style="padding-bottom: 0;" v-if="this.isEnabled">
    <v-list-item link :title="this.text">
      <v-list-item-icon>
        <v-badge content="1" color="error" v-if="!this.hasLaunchedDownload">
          <v-icon color="gray" @click="launchUpdate()">
            mdi-download
          </v-icon>
        </v-badge>
        <v-icon color="green" v-else>
          mdi-download
        </v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ this.text }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
import { ipcRenderer } from "electron";

export default {
  name: "UpdateIcon",
  components: {},
  data() {
    return {
      isEnabled: false,
      hasLaunchedDownload: false,
      text: "Cliquer ici pour télécharger la nouvelle version !"
    };
  },
  methods: {
    updateIconStatus(bool) {
      this.$set(this, "isEnabled", bool);
    },
    launchUpdate() {
      this.$set(this, "hasLaunchedDownload", true);
      this.$set(this, "text", "Mise à jour en cours de téléchargement ...");
      ipcRenderer.send("launch-app-update");
    }
  },
  mounted() {
    ipcRenderer.on("app-update-information", (event, data) => {
      this.updateIconStatus(data?.hasNewVersionAvailable == true);
    });
  }
};
</script>
