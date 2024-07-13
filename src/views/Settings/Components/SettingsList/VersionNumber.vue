<template>
  <tr>
    <td class="text-left pa-2">
      <b>Numéro de Version</b>
      <p class="mt-2">
        Version de l'application
      </p>
    </td>
    <td class="text-right">
      <v-chip @click="up()">Version - {{ this.package.version }}</v-chip>
    </td>
  </tr>
</template>

<script>
import pjson from "@/../package.json";

export default {
  name: "VersionNumber",
  components: {},
  data() {
    return {
      counter: 0,
      package: pjson
    };
  },
  methods: {
    enableDevelopper() {
      this.$store.commit("enableDevelopperMode");
    },
    up() {
      this.counter++;
      if (this.counter == 10) {
        this.enableDevelopper();
      }
    }
  }
};
</script>
