<template>
  <v-container>
    <v-card class="mx-auto">
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-icon @click="emitDelete">mdi-close</v-icon>
      </v-card-actions>
      <v-card-text>
        <v-row justify="center">
          <v-col cols="12" md="4" class="text-center">
            <p>
              Résultat
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
        <v-row justify="space-between">
          <v-col cols="12" md="4" class="text-center">
            <v-badge
              bordered
              color="black"
              overlap
              :content="
                (henchLeft.hench?.minimum_level || 0) +
                  '-' +
                  (henchLeft.hench?.maximum_level || 0)
              "
            >
              <v-avatar size="48" color="grey">
                <img
                  v-if="henchLeft.hench?.imageAvatar"
                  :src="henchLeft.hench?.imageAvatar"
                />
              </v-avatar>
            </v-badge>
            <HenchSearchInput @updateHench="onHenchLeftChanges" />
            <v-text-field
              :value="henchLeft.henchLevel"
              @input="henchLeft.henchLevel = $event"
              label="Hench left"
              type="number"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-badge
              bordered
              color="black"
              overlap
              :content="
                (henchRight.hench?.minimum_level || 0) +
                  '-' +
                  (henchRight.hench?.maximum_level || 0)
              "
            >
              <v-avatar size="48" color="grey">
                <img
                  v-if="henchRight.hench?.imageAvatar"
                  :src="henchRight.hench?.imageAvatar"
                />
              </v-avatar>
            </v-badge>
            <HenchSearchInput @updateHench="onHenchRightChanges" />
            <v-text-field
              :value="henchRight.henchLevel"
              @input="henchRight.henchLevel = $event"
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
</template>

<script>
import { createHenchComplex } from "@/services/HenchComputeFactory.js";
import HenchSearchInput from "@/components/HenchSearchInput.vue";

export default {
  name: "HenchCalculator",
  components: { HenchSearchInput },
  props: ["index", "data"],
  data() {
    return {
      searchLeft: "",
      searchRight: "",
      result: 0,
      henchLeft: createHenchComplex(null),
      henchRight: createHenchComplex(null),
      lvlRightHench: this.henchRight?.henchLevel,
      lvlLeftHench: this.henchLeft?.henchLevel
    };
  },
  methods: {
    calcLevelMix() {
      this.emitChanges();
      const mLevel =
        (parseInt(this.henchLeft?.henchLevel) +
          parseInt(this.henchRight?.henchLevel)) *
        0.5;
      const pLevelLeft =
        (this.henchLeft?.henchLevel / this.henchLeft?.hench?.maximum_level) *
        100;
      const pLevelRight =
        (this.henchRight?.henchLevel / this.henchRight?.hench?.maximum_level) *
        100;
      this.result =
        Math.floor(mLevel) +
        Math.floor((Math.floor(pLevelLeft) + Math.floor(pLevelRight)) / 2 / 10);
    },
    onHenchRightChanges(henchRight) {
      this.henchRight.setHench(henchRight);
      this.emitChanges();
    },
    onHenchLeftChanges(henchLeft) {
      this.henchLeft.setHench(henchLeft);
      this.emitChanges();
    },
    emitChanges() {
      this.$emit("emitChanges", {
        index: this.index,
        henchLeft: this.henchLeft,
        henchRight: this.henchRight
      });
    },
    emitDelete() {
      this.$emit("emitDelete", this.index);
    }
  },
  mounted() {
    this.$set(this, "henchLeft", createHenchComplex(this.data.henchLeft));
    this.$set(this, "henchRight", createHenchComplex(this.data.henchRight));
  }
};
</script>
