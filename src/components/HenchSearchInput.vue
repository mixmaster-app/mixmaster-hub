<template>
  <v-autocomplete
    v-model="searchText"
    label="Hench"
    :loading="isLoading"
    :items="henchList"
    :search-input.sync="search"
    item-text="name"
    item-value="id"
    return-object
    hide-selected
  />
</template>

<script>
import { getAllHenchWhereLibelleContains } from "@/services/Api/Hench/HenchDao.js";

export default {
  name: "HenchSearchInput",
  data() {
    return {
      henchNameList: [],
      henchList: [],
      searchText: "",
      search: null,
      isLoading: false
    };
  },
  watch: {
    search(val) {
      if (!val || val.length < 3) return;
      if (this.isLoading) return;
      this.isLoading = true;
      getAllHenchWhereLibelleContains(val)
        .then(res => {
          this.henchList = res;
          this.henchNameList = [];
          for (const hench of this.henchList) {
            this.henchNameList.push(hench.name);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.isLoading = false;
        });
    },
    searchText(val) {
      this.$emit("updateHench", val);
    }
  }
};
</script>
