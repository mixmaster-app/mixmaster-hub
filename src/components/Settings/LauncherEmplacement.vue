<template>
  <tr>
    <td class="text-left pa-2">
      <b>Launcher Emplacement</b>
      <p class="mb-0 mt-2">
        Specify the mixmaster launcher emplacement
      </p>
    </td>
    <td class="text-right pa-3">
      <v-file-input @change="onAddMixmasterExe" />
      <v-chip v-if="mixmasterExePath != ''">{{ mixmasterExePath }}</v-chip>
    </td>
  </tr>
</template>

<script>
import path from "path";

export default {
  name: "LauncherEmplacement",
  data() {
    return {
      mixmasterExePath: ""
    };
  },
  methods: {
    onAddMixmasterExe(file) {
      this.$store.commit("updateLauncherEmplacement", path.dirname(file.path));
      this.mixmasterExePath = this.$store.state.userInfos.exe;
    }
  },
  mounted() {
    if (
      this.$store.state.userInfos.exe &&
      this.$store.state.userInfos.exe != ""
    ) {
      this.mixmasterExePath = this.$store.state.userInfos.exe;
    }
  }
};
</script>
