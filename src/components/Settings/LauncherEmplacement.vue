<template>
  <tr>
    <td class="text-left pa-2">
      <b>Launcher Emplacement</b>
      <p class="mb-0 mt-2">
        Specify the mixmaster launcher emplacement
      </p>
    </td>
    <td class="text-right">
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
      localStorage.setItem("mixmasterExe", path.dirname(file.path));
      this.mixmasterExePath = localStorage.getItem("mixmasterExe");
    }
  },
  mounted() {
    if (localStorage.getItem("mixmasterExe")) {
      try {
        this.mixmasterExePath = localStorage.getItem("mixmasterExe");
      } catch (e) {
        localStorage.removeItem("henchSearch");
      }
    }
  }
};
</script>
