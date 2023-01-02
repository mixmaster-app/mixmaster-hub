<template>
  <v-card>
    <v-card-text>
      <span v-if="data.mix.length == 0">
        No mixs found for this hench
      </span>
      <ul id="mixs" v-if="data.mix.length >= 1">
        <li v-for="mix in data.mix" :key="mix.id">
          {{ mix.hench_left.name }}
          {{ mix.item_left.name ? `(${mix.item_left.name})` : "" }}
          +
          {{ mix.hench_right.name }}
          {{ mix.item_right.name ? `(${mix.item_right.name})` : "" }}
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
