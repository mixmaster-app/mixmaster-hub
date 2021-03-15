<template>
  <div>
    <v-card
      :loading="loading"
      class="ma-1"
      width="220"
      max-width="220"
      v-on:click="activeModal = true"
    >
      <template slot="progress">
        <v-progress-linear color="deep-purple" height="10" indeterminate>
        </v-progress-linear>
      </template>
      <v-card :elevation="4">
        <v-img
          height="150"
          min-height="150"
          width="65"
          contain
          style="margin: 0 auto;"
          :src="data.imageUrl"
        >
        </v-img>
      </v-card>

      <v-card-title>
        <h5>{{ data.libelle }}</h5>
        <v-img
          class="ma-2"
          max-height="16"
          max-width="16"
          :src="data.getImageTypePath()"
        >
        </v-img>
        <v-spacer></v-spacer>
        <h6>lvl {{ data.levelMinimum }} - {{ data.levelMaximum }}</h6>
      </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-chip class="ma-2" :color="data.dropable ? 'green' : 'red'" dark>
          <v-avatar left>
            <v-icon>mdi-egg</v-icon>
          </v-avatar>
          Drop
        </v-chip>
        <v-chip class="ma-2" :color="data.mixable ? 'green' : 'red'" dark>
          <v-avatar left>
            <v-icon>mdi-dna</v-icon>
          </v-avatar>
          Mix
        </v-chip>
        <!-- <v-chip :color="grey" dark>Quest</v-chip> -->
      </v-card-text>
    </v-card>
    <HenchModal :activeModal="activeModal" :data="data" v-model="activeModal" />
  </div>
</template>

<script>
import { Hench } from "@/metier/hench/Hench.js";
import HenchModal from "@/components/hench/HenchModal.vue";

export default {
  name: "HenchCard",
  props: {
    data: Hench
  },
  components: { HenchModal },
  data() {
    return {
      loading: false,
      selection: 2,
      hench: this.data,
      activeModal: false
    };
  },
  watch: {
    data() {
      this.hench = this.data;
    }
  }
};
</script>
