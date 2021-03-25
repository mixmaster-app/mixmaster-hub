<template>
  <div class="main">
    <v-row no-gutters>
      <div v-for="(index, id) in filterIndex" :key="id">
        <v-card
          v-if="index.doDspInFunctionnality"
          class="pa-1 ma-3 blue-grey lighten-5"
          :to="index.path"
          :title="index.description"
        >
          <v-img
            class="ma-2 rounded-lg border-lightgray"
            height="128"
            contain
            :src="getFuncImg(index.imageName)"
            :alt="index.name"
          ></v-img>
          <v-card-title
            class="caption text-center user-none"
            style="display:inherit !important"
          >
            {{ index.name }}
          </v-card-title>
        </v-card>
      </div>
    </v-row>
  </div>
</template>

<script>
import ROUTE_LIST from "@/router/routes.js";

export default {
  name: "Functionnality",
  data() {
    return {
      indexList: ROUTE_LIST
    };
  },
  computed: {
    filterIndex() {
      return this.indexList.filter(i => i.doDspInFunctionnality === true);
    }
  },
  methods: {
    getFuncImg(imageName) {
      try {
        return require(`@/assets/functionnality/${imageName}.png`);
      } catch (e) {
        return require(`@/assets/functionnality/default.png`);
      }
    }
  }
};
</script>
