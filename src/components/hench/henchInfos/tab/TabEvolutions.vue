<template>
  <v-card class="no-box-shadow">
    <v-card-text>
      <ul id="evolutions" v-if="data.getEvolutions().length >= 1">
        <li v-for="evolution in data.getEvolutions()" :key="evolution.id">
          <v-avatar size="48" color="white" style="margin: 4px">
            <img :src="evolution.hench_result.imageAvatar" />
          </v-avatar>
          {{ evolution.hench_result.name }}
        </li>
      </ul>
      <span v-else>No evolutions for this hench</span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TabEvolutions",
  props: {
    data: Object
  }
};
</script>
