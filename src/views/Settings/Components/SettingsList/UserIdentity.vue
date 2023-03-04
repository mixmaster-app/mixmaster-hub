<template>
  <tr>
    <td class="text-left pa-2">
      <b>Identifiant Utilisateur</b>
      <p class="mt-2">
        Identifiant unique pour analyser de potentiels erreurs sur le back-end.
      </p>
    </td>
    <td class="text-right">
      <v-chip>
        <v-icon left>
          mdi-account
        </v-icon>
        <span style="user-select: text;">{{ this.getUserIdentity() }}</span>
      </v-chip>
    </td>
  </tr>
</template>

<script>
export default {
  name: "UserIdentity",
  components: {},
  data() {
    return {};
  },
  methods: {
    getUserIdentity() {
      return this.$store.state.userIdentity;
    }
  }
};
</script>
