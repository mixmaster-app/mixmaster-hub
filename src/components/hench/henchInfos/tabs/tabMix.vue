<template>
  <v-card class="no-box-shadow">
    <v-card-text>
      <span v-if="data.mix.length == 0">
        No mixs found for this hench
      </span>
      <ul id="mixs" v-if="data.mix.length >= 1">
        <li v-for="mix in data.mix" :key="mix.id" style="margin-bottom:8px">
          <v-badge color="#E7E7E7" avatar overlap v-if="mix.item_left">
            <template v-slot:badge v-if="mix.item_left.imagePath">
              <v-avatar class="border-lightgray" :title="mix.item_left.name">
                <v-img :src="mix.item_left.imagePath"></v-img>
              </v-avatar>
            </template>
            <v-avatar size="48" color="white">
              <img
                :src="mix.hench_left.imageAvatar"
                :title="mix.hench_left.name"
              />
            </v-avatar>
          </v-badge>
          {{ mix.hench_left.name }}
          <span class="font-weight-bold mx-3">+</span>
          <v-badge color="#E7E7E7" avatar overlap v-if="mix.item_right">
            <template v-slot:badge v-if="mix.item_right.imagePath">
              <v-avatar class="border-lightgray" :title="mix.item_right.name">
                <v-img :src="mix.item_right.imagePath"></v-img>
              </v-avatar>
            </template>
            <v-avatar size="48" color="white">
              <img
                :src="mix.hench_right.imageAvatar"
                :title="mix.hench_right.name"
              />
            </v-avatar>
          </v-badge>
          {{ mix.hench_right.name }}
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TabMix",
  props: {
    data: Object
  }
};
</script>
