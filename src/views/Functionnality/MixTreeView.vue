<template>
  <div class="mixtreeview justify-center scroll">
    <div class="mb-3">
      <TreeFavorite @feedTree="loadFavorite" @defaultValueTree="defaultValue" />
    </div>
    <TreeChart
      :json="treeData"
      :isFavorite="favorite"
      @emitSearch="onEmitSearch"
      @emitChildMix="onEmitChildMix"
      @resetTree="resetTree"
      @addFavorite="addFavorite"
    />
  </div>
</template>

<script>
import TreeChart from "@/components/TreeChart";
import TreeFavorite from "@/components/TreeFavorite";
import { uuid } from "vue-uuid";
import { getOneById } from "@/services/Api/Hench/HenchDao.js";

export default {
  components: {
    TreeChart,
    TreeFavorite
  },
  data() {
    return {
      key: undefined,
      treeData: {
        hench: undefined,
        nodelevel: 1,
        type: "select",
        class: ["rootNode"],
        children: []
      },
      defaultTreeData: {
        hench: undefined,
        nodelevel: 1,
        type: "select",
        class: ["rootNode"],
        children: []
      },
      favorite: false
    };
  },
  methods: {
    addFavorite() {
      this.$store.commit(
        "addHenchMixFavorite",
        JSON.parse(JSON.stringify(this.treeData))
      );
      this.defaultValue();
      this.saveTreeData();
    },
    defaultValue() {
      let nData = JSON.parse(JSON.stringify(this.defaultTreeData));
      this.$set(this, "key", undefined);
      this.$set(this, "treeData", nData);
      this.$set(this, "favorite", false);
    },
    resetTree(value) {
      if (value && this.key) {
        this.$store.commit("removeHenchFromFavorite", this.key);
      }
      this.defaultValue();
      this.saveTreeData();
    },
    loadFavorite({ value, key }) {
      this.$set(this, "key", key);
      this.$set(this, "treeData", value);
      this.$set(this, "favorite", true);
    },
    onEmitSearch(value) {
      this.$set(this.treeData, "hench", value);
      this.$set(this.treeData, "children", undefined);
      this.saveTreeData();
    },
    async onEmitChildMix(value) {
      let nodelevel = value.nodelevel;
      let mix = value.henchMix;
      const aChildren = [
        {
          hench: await getOneById(mix.hench_left.id),
          item: mix.item_left,
          nodelevel: uuid.v1(),
          type: "select"
        },
        {
          hench: await getOneById(mix.hench_right.id),
          item: mix.item_right,
          nodelevel: uuid.v1(),
          type: "select"
        }
      ];
      const CHILDREN = this.checkChildNode(this.treeData, nodelevel, aChildren);
      this.$set(this.treeData, "children", CHILDREN);
      this.saveTreeData();
    },
    checkChildNode(node, nodelevel, aChild) {
      if (node.nodelevel == nodelevel) {
        return aChild;
      } else {
        if (!node.children || !node.children.length) {
          return node.children;
        }
        for (let i = 0; i < node.children.length; i++) {
          let item = node.children[i];
          if (item) {
            this.$set(
              node.children[i],
              "children",
              this.checkChildNode(item, nodelevel, aChild)
            );
          }
        }
        return node.children;
      }
    },
    saveTreeData() {
      localStorage.setItem("treeMixData", JSON.stringify(this.treeData));
      if (this.key && this.favorite) {
        this.$store.commit("updateHenchFavorite", {
          key: this.key,
          data: this.treeData
        });
        localStorage.removeItem("treeMixData");
      }
    }
  },
  mounted() {
    if (localStorage.getItem("treeMixData")) {
      try {
        this.$set(
          this,
          "treeData",
          JSON.parse(localStorage.getItem("treeMixData"))
        );
      } catch (e) {
        localStorage.removeItem("treeMixData");
      }
    }
  }
};
</script>

<style scoped>
.mixtreeview {
  height: 97%;
  padding-bottom: 50px;
}
</style>
