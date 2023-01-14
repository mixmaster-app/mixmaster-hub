<template>
  <div>
    <v-card
      :loading="loading"
      class="ma-1"
      width="220"
      max-width="220"
      @click="activeModal = true"
    >
      <v-card
        elevation="0"
        tile
        :class="['_' + data.type.id + '-bg', 'border--bottom-gray']"
      >
        <v-img
          height="150"
          min-height="150"
          width="50%"
          contain
          style="margin: 0 auto;"
          :src="data.img_url"
        ></v-img>
      </v-card>

      <v-card-title class="justify-center">
        <v-img
          class="ma-2"
          max-height="16"
          max-width="16"
          :src="data.getImageTypePath()"
        />
        <h6>{{ data.name }}</h6>
      </v-card-title>
      <v-card-subtitle class="text-center">
        <h6>Lv. {{ data.minimum_level }} - {{ data.maximum_level }}</h6>
      </v-card-subtitle>
    </v-card>
    <HenchModal :activeModal="activeModal" :data="data" v-model="activeModal" />
  </div>
</template>

<script>
import { Hench } from "@/models/hench/Hench.js";
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

<style scoped>
.v-card__title {
  padding: 4px 4px 12px 4px;
}
.border--bottom-gray {
  border-bottom: 2px solid #838383;
}
</style>
