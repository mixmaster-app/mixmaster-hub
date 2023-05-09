<template>
  <div class="main mix-lvl-result scroll-y">
    <v-row>
      <v-col
        cols="6"
        v-for="(henchCalculator, index) in calculators"
        :key="henchCalculator.uniqueId"
      >
        <HenchCalculator
          :data="henchCalculator"
          :index="index"
          @emitChanges="onChange"
          @emitDelete="onDelete"
        />
      </v-col>
    </v-row>
    <v-btn
      absolute
      @click="addHenchCompute"
      class="top-90 ms-3"
      color="primary"
      elevation="5"
      fab
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import HenchCalculator from "@/views/Functionnalities/Components/HenchCalculator.vue";
import { HenchCompute } from "@/models/Utils/Components/HenchCompute.js";

export default {
  components: { HenchCalculator },
  data() {
    return {
      calculators: []
    };
  },
  methods: {
    onChange(values) {
      this.calculators[values.index] = new HenchCompute(
        values?.henchLeft,
        values?.henchRight
      );
      this.saveData();
    },
    onDelete(index) {
      this.calculators.splice(index, 1);
      this.saveData();
      this.checkIfCalculatorIsEmpty();
    },
    addHenchCompute() {
      this.calculators.push(new HenchCompute(null, null));
      this.saveData();
    },
    saveData() {
      this.$store.commit("saveHenchCalculatorsState", this.calculators);
    },
    checkIfCalculatorIsEmpty() {
      if (!Array.isArray(this.calculators)) {
        this.calculators = [];
      }
      if (this.calculators.length == 0) {
        this.calculators.push(new HenchCompute(null, null));
      }
    }
  },
  mounted() {
    this.calculators = this.$store.state.henchCalculators;
    this.checkIfCalculatorIsEmpty();
  }
};
</script>
