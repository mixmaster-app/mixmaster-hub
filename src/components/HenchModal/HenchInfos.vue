<template>
  <v-card min-height="550px" color="transparent">
    <v-container>
      <v-row>
        <v-col cols="12" sm="1" style="padding:0">
          <v-tabs vertical v-model="firstTab">
            <v-tab class="custom-tabs" v-for="tab in tabs" :key="tab.id">
              <v-img
                contain
                height="36"
                :title="tab.description"
                :src="require(`@/assets/img/icons/${tab.name}.svg`)"
              />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col class="main-hench-card" cols="12" sm="11" style="">
          <v-row>
            <v-col cols="12" sm="5">
              <v-card :elevation="4" :class="['_' + data.type.id + '-bg']">
                <div class="pa-2 mt-2 ml-2" :title="data.type.libelle">
                  <v-img
                    max-height="24"
                    max-width="24"
                    :src="data.getImageTypePath()"
                  />
                </div>
                <v-img
                  height="500"
                  min-height="350"
                  max-width="60%"
                  contain
                  style="margin: 0 auto;"
                  :src="data.img_url"
                />
              </v-card>
            </v-col>

            <v-col cols="12" sm="7">
              <v-tabs-items v-model="model">
                <v-tab-item
                  v-for="tab in tabs"
                  :key="tab.id"
                  :value="`tab-${tab.id}`"
                >
                  <component
                    :data="data"
                    :is="tab.component"
                    v-if="tab.component != null"
                  />
                  <v-card class="no-box-shadow" v-else>
                    <v-card-text>Comming soon ...</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";
import TabEvolutions from "@/components/HenchModal/Tabs/TabEvolutions.vue";
import TabMix from "@/components/HenchModal/Tabs/TabMix.vue";
import TabZones from "@/components/HenchModal/Tabs/TabZones.vue";
import TabStats from "@/components/HenchModal/Tabs/TabStats.vue";

export default {
  name: "HenchInfos",
  components: {
    MarqueeText,
    TabEvolutions
  },
  props: {
    data: Object
  },
  data() {
    return {
      firstTab: 0,
      tabs: [
        {
          id: 0,
          description: "Informations",
          name: "infos",
          component: TabStats
        },
        {
          id: 1,
          description: "Location",
          name: "map",
          component: TabZones
        },
        {
          id: 2,
          description: "Mix",
          name: "mix",
          component: TabMix
        },
        {
          id: 3,
          description: "Evolutions",
          name: "evolve",
          component: TabEvolutions
        },
        {
          id: 4,
          description: "Loots",
          name: "loot",
          component: null
        }
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

<style>
.v-tabs-slider-wrapper {
  display: none;
}
.v-tabs > .v-tabs-bar {
  background-color: transparent !important;
}
.main-hench-card {
  border-radius: 5px;
}
.theme--light .main-hench-card {
  background: white !important;
}
.theme--dark .main-hench-card {
  background: #1e1e1e !important;
}
.custom-tabs {
  border-width: 1.5px 0 1.5px 1.5px;
  border-style: solid;
  border-color: #353535;
  min-height: 80px;
  border-radius: 5px 0 0 5px;
  margin-top: 28px;
}
.theme--light .custom-tabs {
  background: white;
}
.theme--dark .custom-tabs {
  background: #d3d3d3;
}
.custom-tabs:not(.v-tab--active) {
  box-shadow: inset -5px 0px 6px -2px rgb(0 0 0 / 30%);
}
</style>
