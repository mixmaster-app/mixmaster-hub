<template>
  <div class="main">
    <v-row no-gutters>
      <div v-for="(index, id) in filterIndex" :key="id">
        <v-card class="pa-1 ma-3" :to="index.path" :title="index.description">
          <v-img
            class="ma-2 rounded-lg"
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
        return require(`@/assets/img/functionnality/${imageName}.png`);
      } catch (e) {
        return require(`@/assets/img/functionnality/default.png`);
      }
    }
  }
};
</script>
