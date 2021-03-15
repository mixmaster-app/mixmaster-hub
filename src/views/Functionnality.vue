<template>
  <div class="main">
    <v-row no-gutters>
      <v-card
        class="ma-3"
        width="128"
        height="128"
        v-for="(func, index) in functionnalityList"
        :key="index"
        :to="func.path"
      >
        <v-img
          class="white--text align-end"
          height="100%"
          :src="getFuncImg(func.imageName)"
          :alt="func.name"
        />
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      functionnalityList: [
        {
          name: "Mix level Result",
          description: "Calcul le level du résultat d'un mix de deux henchs",
          path: "/Functionnality/mixlvlresult",
          imageName: "01_mixlevelresult"
        },
        {
          name: "Recherhce de henchs",
          description: "Affiche la page de recherche des henchs",
          path: "/henchs",
          imageName: "03_henchlist"
        },
        {
          name: "Mix tree view",
          description: "Affiche l'arbre de mix d'un hench",
          path: "/Functionnality/mixtreeview",
          imageName: "02_mixtreeview"
        }
      ]
    };
  },
  methods: {
    getFuncImg(imageName) {
      let result = require(`@/views/Functionnality/assets/default.png`);
      try {
        result = require(`@/views/Functionnality/assets/${imageName}.png`);
      } catch (e) {
        if (e.message.includes("find module")) {
          console.error(`Image not found "${imageName}"`);
        } else {
          console.error(`Unkown error`);
        }
      }

      return result;
    }
  }
};
</script>
