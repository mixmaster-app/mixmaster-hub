<template>
  <div class="main">
    <v-row>
      <v-col cols="6">
        <HenchCalculator id="1" />
      </v-col>
      <v-col cols="6">
        <HenchCalculator id="2" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HenchCalculator from "@/views/Functionnalities/Components/HenchCalculator.vue";

export default {
  components: { HenchCalculator },
  data() {
    return {};
  },
  methods: {}
};
</script>
