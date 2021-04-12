<template>
  <div class="mixlvlresult">
    <v-container>
      <v-card class="mx-auto my-12">
        <v-card-text>
          <v-row justify="center">
            <v-col cols="12" md="4"></v-col>
            <v-col cols="12" md="4" class="text-center">
              <p>
                Result
              </p>
              <v-btn
                elevation="2"
                width="180"
                disabled
                style="color:black !important;"
                >{{ result }}</v-btn
              >
            </v-col>
            <v-col cols="12" md="4"></v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="4" class="text-center">
              <v-badge
                bordered
                color="black"
                :content="
                  (henchLeft.levelMinimum || 0) +
                    '-' +
                    (henchLeft.levelMaximum || 0)
                "
                overlap
              >
                <v-avatar size="48" color="grey">
                  <img
                    v-if="henchLeft.imageAvatar"
                    :src="henchLeft.imageAvatar"
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
            <v-col cols="12" md="4"></v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-badge
                bordered
                color="black"
                :content="
                  (henchRight.levelMinimum || 0) +
                    '-' +
                    (henchRight.levelMaximum || 0)
                "
                overlap
              >
                <v-avatar size="48" color="grey">
                  <img
                    v-if="henchRight.imageAvatar"
                    :src="henchRight.imageAvatar"
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
          <v-row>
            <v-col cols="12" md="4"></v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-btn elevation="2" color="primary" @click="calcLevelMix()">
                CALCUL
              </v-btn>
            </v-col>
            <v-col cols="12" md="4"></v-col>
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
      henchLeft: Hench,
      henchRight: Hench,
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
    emitHenchR(henchRight) {
      this.henchRight = henchRight;
      this.maxLvlRightHench = henchRight.levelMaximum;
    },
    emitHenchL(henchLeft) {
      this.henchLeft = henchLeft;
      this.maxLvlLeftHench = henchLeft.levelMaximum;
    }
  }
};
</script>
