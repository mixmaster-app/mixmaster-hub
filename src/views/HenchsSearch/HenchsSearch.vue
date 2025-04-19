<template>
  <div class="main scroll" id="hench-search-result">
    <v-toolbar dense rounded elevation="2">
      <v-row class="w-100 pt-3">
        <v-col cols="3" class="mt-4">
          <v-text-field v-model="searchString" @keydown="searchKeyDown" />
        </v-col>
        <v-col cols="3" class="mt-4">
          <v-select
            variants="underlined"
            v-model="selectedTypes"
            :items="types"
            :item-value="item => item.value"
            placeholder="Aucun Type"
            multiple
            single-line
          >
            <template v-slot:item="{ item }" attrs="min-height: fit-content">
              <span class="text-caption font-weight-light">
                <v-avatar size="16" class="me-2">
                  <img :src="imageType(item.value)" />
                </v-avatar>
                {{ item.name }}
              </span>
            </template>
            <template v-slot:selection="{ item }">
              <v-avatar size="16" class="me-2" :title="item.name">
                <img :src="imageType(item.value)" />
              </v-avatar>
            </template>
          </v-select>
        </v-col>
        <v-col cols="5" class="mt-4" style="width:400px">
          <v-range-slider
            v-model="levelRange"
            :min="0"
            :max="300"
            :step="1"
            thumb-label="always"
            thumb-size="0"
            class="mt-3"
          />
        </v-col>
        <v-col cols="1" align-self="center" class="mb-2">
          <v-btn icon @click="research">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-toolbar>

    <v-row no-gutters class="mt-3">
      <div class="center-div">
        <p v-if="noResult == true && !loading">Aucun hench trouvé</p>
        <v-progress-circular v-if="loading" indeterminate color="black">
        </v-progress-circular>
      </div>
      <HenchCard v-for="hench in henchList" :key="hench.id" :data="hench" />
    </v-row>
  </div>
</template>
<style>
.v-select-list .v-list-item {
  min-height: 25px !important;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>

<script>
import HenchCard from "@/views/HenchsSearch/Components/HenchCard.vue";
import { listOfTypes, getTypeImage } from "@/models/hench/HenchType";
import {
  getAllHenchs,
  getAllHenchWithFilter
} from "@/services/Api/Hench/HenchDao.js";

export default {
  name: "HenchsSearch",
  data() {
    return {
      selectedTypes: [],
      types: listOfTypes,
      levelRange: [0, 300],
      henchList: [],
      searchString: "",
      noResult: false,
      loading: false
    };
  },
  components: { HenchCard },
  methods: {
    imageType(value) {
      return getTypeImage(value);
    },
    searchKeyDown(e) {
      if (e.keyCode === 13) {
        this.research();
      }
    },
    async research() {
      this.henchList = [];
      this.loading = true;
      if (this.searchString == "*") {
        getAllHenchs()
          .then(res => {
            this.henchList = res;
            this.noResult =
              this.henchList.length == 0 && this.searchString != "";
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        getAllHenchWithFilter({
          search: this.searchString,
          types: this.selectedTypes,
          minimumLevel: this.levelRange[0] ?? 0,
          maximumLevel: this.levelRange[1] ?? 300
        })
          .then(res => {
            this.henchList = res;
            this.noResult =
              this.henchList.length == 0 && this.searchString != "";
          })
          .finally(() => {
            this.loading = false;
          });
        this.loading = false;
        this.noResult = true;
      }
    }
  },
  mounted() {
    if (localStorage.getItem("henchSearch")) {
      try {
        this.searchString = localStorage.getItem("henchSearch");
        this.selectedTypes =
          JSON.parse(localStorage.getItem("henchSearchTypes")) ?? [];
        this.levelRange = JSON.parse(
          localStorage.getItem("henchSearchLevelRange")
        ) ?? [0, 250];
        this.research();
      } catch (e) {
        localStorage.removeItem("henchSearch");
        localStorage.removeItem("henchSearchTypes");
        localStorage.removeItem("henchSearchLevelRange");
      }
    }
  },
  watch: {
    searchString(search) {
      localStorage.setItem("henchSearch", search);
    },
    selectedTypes(types) {
      localStorage.setItem("henchSearchTypes", JSON.stringify(types));
    },
    levelRange(levelRange) {
      localStorage.setItem("henchSearchLevelRange", JSON.stringify(levelRange));
    }
  }
};
</script>
