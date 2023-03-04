<template>
  <tr>
    <td class="text-left pa-2">
      <h3>Réinitialiser le cache</h3>
      <p class="mb-0 mt-2">
        Réinitialise le cache de l'application (Inclue les mix favoris et la
        recherche de henchs)
      </p>
      <p>
        Attention les valeurs supprimées ne peuvent pas être récupérées.
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
      this.$forceUpdate();
    }
  }
};
</script>
