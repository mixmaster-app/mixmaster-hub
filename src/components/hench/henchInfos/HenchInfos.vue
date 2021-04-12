<template>
  <v-card min-height="550px">
    <v-tabs fixed-tabs dark v-model="firstTab">
      <v-tab disabled>
        <marquee-text :repeat="2" :duration="5" v-if="data.libelle.length > 15">
          <span class="ml-5">
            {{ data.libelle }}
          </span>
        </marquee-text>
        <span v-else> {{ data.libelle }} </span>
      </v-tab>
      <v-tab v-for="tab in tabs" :key="tab.id">{{ tab.name }}</v-tab>
    </v-tabs>

    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <v-card :elevation="4">
            <div class="pa-2 mt-2 ml-2" :title="data.type.libelle">
              <v-img
                max-height="24"
                max-width="24"
                :src="data.getImageTypePath()"
              >
              </v-img>
            </div>
            <v-img
              height="500"
              min-height="350"
              max-width="70%"
              contain
              style="margin: 0 auto;"
              :src="data.imageUrl"
            >
            </v-img>
          </v-card>
        </v-col>

        <v-col cols="12" sm="8">
          <v-tabs-items v-model="model">
            <v-tab-item
              v-for="tab in tabs"
              :key="tab.id"
              :value="`tab-${tab.id}`"
            >
              <component :data="data" :is="tab.component"></component>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";
import tabEvolutions from "@/components/hench/henchInfos/tabs/tabEvolutions.vue";
import tabMix from "@/components/hench/henchInfos/tabs/tabMix.vue";
import tabZones from "@/components/hench/henchInfos/tabs/tabZones.vue";
import tabStats from "@/components/hench/henchInfos/tabs/tabStats.vue";

export default {
  name: "HenchInfos",
  components: {
    MarqueeText,
    tabEvolutions
  },
  props: {
    data: Object
  },
  data() {
    return {
      firstTab: 1,
      tabs: [
        { id: 1, name: "Stats", component: tabStats },
        { id: 2, name: "Zones", component: tabZones },
        { id: 3, name: "Mix", component: tabMix },
        { id: 4, name: "Evolution", component: tabEvolutions }
      ]
    };
  },
  computed: {
    model() {
      return `tab-${this.firstTab}`;
    }
  }
};
</script>
