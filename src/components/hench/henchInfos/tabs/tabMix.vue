<template>
  <v-card>
    <v-card-text>
      <span v-if="data.henchMixs.length == 0">
        No mixs found for this hench
      </span>
      <ul id="mixs" v-if="data.henchMixs.length >= 1">
        <li v-for="mix in data.henchMixs" :key="mix.id">
          {{ mix.henchLeft.libelle }}
          {{ mix.itemLeft.libelle ? `(${mix.itemLeft.libelle})` : "" }}
          +
          {{ mix.henchRight.libelle }}
          {{ mix.itemRight.libelle ? `(${mix.itemRight.libelle})` : "" }}
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "tabMix",
  props: {
    data: Object
  }
};
</script>
