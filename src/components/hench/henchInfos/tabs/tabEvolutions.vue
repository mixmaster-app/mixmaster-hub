<template>
  <v-card>
    <v-card-text>
      <ul id="evolutions">
        {{
          this.data.getAllEvolutions()
        }}
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "tabEvolutions",
  props: {
    data: Object
  }
};
</script>
