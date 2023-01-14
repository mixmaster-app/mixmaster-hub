<template>
  <div class="mixlvlresult">
    <v-container>
      <v-card class="mx-auto my-12">
        <v-card-text>
          <v-row justify="center">
            <v-col cols="12" md="4" class="text-center">
              <p>
                Result
              </p>
              <v-btn
                elevation="2"
                width="180"
                disabled
                style="color:black !important;"
              >
                {{ result }}
              </v-btn>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="4" class="text-center">
              <v-badge
                bordered
                color="black"
                :content="
                  (hench_left.minimum_level || 0) +
                    '-' +
                    (hench_left.maximum_level || 0)
                "
                overlap
              >
                <v-avatar size="48" color="grey">
                  <img
                    v-if="hench_left.imageAvatar"
                    :src="hench_left.imageAvatar"
                  />
                </v-avatar>
              </v-badge>
              <HenchSearchInput @updateHench="emitHenchL" />
              <v-text-field
                v-model.number="lvlLeftHench"
                label="Hench left"
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" />
            <v-col cols="12" md="4" class="text-center">
              <v-badge
                bordered
                color="black"
                :content="
                  (hench_right.minimum_level || 0) +
                    '-' +
                    (hench_right.maximum_level || 0)
                "
                overlap
              >
                <v-avatar size="48" color="grey">
                  <img
                    v-if="hench_right.imageAvatar"
                    :src="hench_right.imageAvatar"
                  />
                </v-avatar>
              </v-badge>
              <HenchSearchInput @updateHench="emitHenchR" />
              <v-text-field
                v-model.number="lvlRightHench"
                label="Hench right"
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="4" class="text-center">
              <v-btn elevation="2" color="primary" @click="calcLevelMix()">
                CALCUL
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { Hench } from "@/metier/hench/Hench.js";
import HenchSearchInput from "@/components/hench/HenchSearchInput.vue";

export default {
  components: { HenchSearchInput },
  data() {
    return {
      searchLeft: "",
      searchRight: "",
      result: 0,
      hench_left: Hench,
      hench_right: Hench,
      lvlLeftHench: 0,
      maxLvlLeftHench: 197,
      lvlRightHench: 0,
      maxLvlRightHench: 197
    };
  },
  methods: {
    calcLevelMix() {
      const mLevel = (this.lvlLeftHench + this.lvlRightHench) * 0.5;
      const pLevelLeft = (this.lvlLeftHench / this.maxLvlLeftHench) * 100;
      const pLevelRight = (this.lvlRightHench / this.maxLvlRightHench) * 100;
      this.result =
        Math.floor(mLevel) +
        Math.floor((Math.floor(pLevelLeft) + Math.floor(pLevelRight)) / 2 / 10);
    },
    emitHenchR(hench_right) {
      this.hench_right = hench_right;
      this.maxLvlRightHench = hench_right.maximum_level;
    },
    emitHenchL(hench_left) {
      this.hench_left = hench_left;
      this.maxLvlLeftHench = hench_left.maximum_level;
    }
  }
};
</script>
