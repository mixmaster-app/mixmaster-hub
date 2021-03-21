<template>
  <div class="main">
    <v-row no-gutters>
      <v-card
        class="ma-3 blue-grey lighten-5"
        v-for="(func, index) in functionnalityList"
        :key="index"
        :to="func.path"
        :title="func.name"
      >
        <v-img
          class="ma-2 rounded-lg"
          style="border: 1px solid lightgray;"
          height="128"
          contain
          :src="getFuncImg(func.imageName)"
          :alt="func.name"
        ></v-img>
        <v-card-title
          class="caption text-center user-none"
          style="display:inherit !important"
        >
          {{ func.name }}
        </v-card-title>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Functionnality",
  data() {
    return {
      functionnalityList: [
        {
          name: "Mix Level result",
          description: "Calcul le level du résultat d'un mix",
          path: "/Functionnality/mixlvlresult",
          imageName: "01_mixlevelresult"
        },
        {
          name: "Search henchs",
          description: "Affiche la page de recherche des henchs",
          path: "/henchs",
          imageName: "03_henchlist"
        },
        {
          name: "Mix Tree view",
          description: "Affiche l'arbre de mix d'un hench",
          path: "/Functionnality/mixtreeview",
          imageName: "02_mixtreeview"
        }
      ]
    };
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
