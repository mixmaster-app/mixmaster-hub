<template>
  <tr>
    <td class="text-left pa-2">
      <b>Reset store</b>
      <p class="mb-0 mt-2">
        Reinitialize the value stored in the application (include MixTree and
        hench research).
      </p>
      <p>
        Be aware that this is a destructive action, deleted value cannot be
        restored
      </p>
    </td>
    <td class="text-right">
      <v-btn class="ma-2" color="red darken-2" dark @click="resetStore()">
        <v-icon>mdi-autorenew</v-icon>
      </v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ResetStore",
  components: {},
  data() {
    return {};
  },
  methods: {
    resetStore() {
      this.$store.commit("resetStore", true);
      localStorage.removeItem("henchSearch");
      localStorage.removeItem("treeMixData");
      localStorage.removeItem("mixmasterExe");
      localStorage.removeItem("mixmaster_login");
      localStorage.removeItem("mixmaster_password");
    }
  }
};
</script>
