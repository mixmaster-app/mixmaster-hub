<template>
  <v-sheet
    class="mx-auto"
    elevation="3"
    max-width="95%"
    v-if="getFavorite().length"
  >
    <v-slide-group
      v-model="data"
      class="pa-3 mt-4"
      center-active
      show-arrows
      mandatory
    >
      <v-slide-item v-slot="{ active, toggle }">
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="80"
          width="200"
          @click="
            toggle();
            defaultTree(true);
          "
        >
          <v-row class="fill-height mt-1" align="center" justify="center">
            <v-avatar size="48" color="white">
              <img src="@/assets/functionnality/default.png" />
            </v-avatar>
            <v-card-title class="caption text-center user-none">
              Default
            </v-card-title>
          </v-row>
        </v-card>
      </v-slide-item>
      <v-slide-item
        v-for="(item, index) in getFavorite()"
        :key="index"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="80"
          width="200"
          @click="
            toggle();
            feedTree(item, index);
          "
        >
          <v-row class="fill-height mt-1" align="center" justify="center">
            <v-avatar size="48" color="white" :title="item.hench.name">
              <img :src="item.hench.imageAvatar" />
            </v-avatar>
            <v-card-title class="caption text-center user-none">
              {{ item.hench.name }}
            </v-card-title>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      key: 0
    };
  },
  methods: {
    getFavorite() {
      return this.$store.state.henchMixFavorite.filter(i => i.hench);
    },
    feedTree(treeMemory, index) {
      this.$emit("feedTree", {value: treeMemory, key: index});
    },
    defaultTree() {
      this.$emit("defaultValueTree", true);
    }
  }
};
</script>
