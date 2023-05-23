<template>
  <tr v-if="isDevelopper()">
    <td class="text-left pa-2">
      <b>Mode développeur</b>
      <p class="mt-2">
        Ah ouais ? T'es dev ?
      </p>
    </td>
    <td class="text-right">
      <span>💻 bah c'est useless pour le moment </span>
    </td>
  </tr>
</template>

<script>
export default {
  name: "DevelopperMode",
  components: {},
  data() {
    return {};
  },
  methods: {
    isDevelopper() {
      return this.$store.state.isDevelopper;
    }
  }
};
</script>
