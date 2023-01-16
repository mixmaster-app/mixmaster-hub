<template>
  <div class="main scroll">
    <v-toolbar dense floating style="top:10px;">
      <v-text-field
        hide-details
        single-line
        v-model="searchString"
        @keydown="searchKeyDown"
      ></v-text-field>

      <v-btn icon @click="research">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
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

<script>
import HenchCard from "@/components/hench/HenchCard.vue";
import {
  getAllHenchs,
  getAllHenchWhereLibelleContains
} from "@/services/Api/Hench/HenchDao.js";

export default {
  name: "Henchs",
  data() {
    return {
      henchList: [],
      searchString: "",
      noResult: false,
      loading: false
    };
  },
  components: { HenchCard },
  methods: {
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
      } else if (this.searchString.toString().trim() != "") {
        getAllHenchWhereLibelleContains(this.searchString)
          .then(res => {
            this.henchList = res;
            this.noResult =
              this.henchList.length == 0 && this.searchString != "";
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        this.loading = false;
        this.noResult = true;
      }
    }
  },
  mounted() {
    if (localStorage.getItem("henchSearch")) {
      try {
        this.searchString = localStorage.getItem("henchSearch");
        this.research();
      } catch (e) {
        localStorage.removeItem("henchSearch");
      }
    }
  },
  watch: {
    searchString(n) {
      localStorage.setItem("henchSearch", n);
    }
  }
};
</script>
