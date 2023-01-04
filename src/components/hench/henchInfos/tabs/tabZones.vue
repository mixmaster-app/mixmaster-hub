<template>
  <v-card class="no-box-shadow">
    <v-card-text>
      <ul
        id="zones"
        v-if="data.zones.length != undefined && data.zones.length >= 1"
      >
        <li v-for="zone in data.zones" :key="zone.id">
          {{ zone.name }}
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TabZones",
  props: {
    data: Object
  }
};
</script>
