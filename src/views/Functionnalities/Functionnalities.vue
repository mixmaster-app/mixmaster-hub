<template>
  <div class="main">
    <v-row no-gutters>
      <div v-for="(functionnality, id) in enabledFunctionnalities" :key="id">
        <v-card
          class="pa-1 ma-3"
          :to="functionnality.path"
          :title="functionnality.description"
        >
          <v-img
            class="ma-2 rounded-lg"
            height="128"
            contain
            :src="getFuncImg(functionnality.image)"
            :alt="functionnality.name"
          ></v-img>
          <v-card-title
            class="caption text-center user-none"
            style="display:inherit !important"
          >
            {{ functionnality.name }}
          </v-card-title>
        </v-card>
      </div>
    </v-row>
  </div>
</template>

<script>
import { AppRoutes } from "@/router/index";

export default {
  name: "Functionnality",
  data() {
    return {
      routes: AppRoutes
    };
  },
  computed: {
    enabledFunctionnalities() {
      return this.routes.filter(i => i.isDisplayedInFunctionnality === true);
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
