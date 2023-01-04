<template>
  <v-card class="pa-4 scroll full-height user-none">
    <v-simple-table>
      <thead>
        <tr>
          <td colspan="2" class="text-left">
            Settings 🔧
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left pa-2">
            <b>Reset store</b>
            <p class="mb-0 mt-2">
              Reinitialize the value stored in the application (include MixTree
              and hench research).
            </p>
            <p>
              Be aware that this is a destructive action, deleted value cannot
              be restored
            </p>
          </td>
          <td class="text-right">
            <v-btn class="ma-2" color="red darken-2" dark @click="resetStore()">
              <v-icon>mdi-autorenew</v-icon>
            </v-btn>
          </td>
        </tr>
        <tr>
          <td class="text-left pa-2">
            <b>User identity</b>
            <p class="mt-2">
              This is a unique identier than can be used to solve errors calls
              to the back-end data
            </p>
          </td>
          <td class="text-right">
            <v-chip>
              <v-icon left>
                mdi-account
              </v-icon>
              <span style="user-select: text;">{{ this.userIdentity }}</span>
            </v-chip>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: "Settings",
  components: {},
  data() {
    return {
      data: false,
      userIdentity: localStorage.getItem("user_identity")
    };
  },
  methods: {
    resetStore() {
      this.$store.commit("resetStore", true);
      localStorage.removeItem("henchSearch");
      localStorage.removeItem("treeMixData");
    }
  },
  computed: {}
};
</script>
<style scoped>
.almost-full-width {
  width: 90%;
}
</style>
