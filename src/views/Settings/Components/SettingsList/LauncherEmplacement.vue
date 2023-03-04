<template>
  <tr>
    <td class="text-left pa-2">
      <b>Launcher Emplacement</b>
      <p class="mb-0 mt-2">
        Emplacement du launcher MixmasterFR officiel.
      </p>
      <p>
        Il est possible de choisir n'importe quel fichier présent dans le
        répertoir du launcher.
      </p>
    </td>
    <td class="text-right pa-3">
      <v-file-input @change="onAddMixmasterExe" />
      <v-chip v-if="getMixmasterExePath()">{{ getMixmasterExePath() }}</v-chip>
    </td>
  </tr>
</template>

<script>
import path from "path";

export default {
  name: "LauncherEmplacement",
  data() {
    return {
      file: undefined
    };
  },
  methods: {
    onAddMixmasterExe(file) {
      if (file) {
        this.$store.commit(
          "updateLauncherEmplacement",
          path.dirname(file.path)
        );
        this.mixmasterExePath = this.$store.state.userInfos.exe;
      }
      return (file = undefined);
    },
    getMixmasterExePath() {
      return this.$store.state.userInfos.exe;
    }
  },
  mounted() {}
};
</script>
