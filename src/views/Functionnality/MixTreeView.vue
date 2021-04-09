<template>
  <div class="mixtreeview justify-center" style="width: 100%" :key="resetId">
    <div class="mb-3">
      <TreeFavorite @feedTree="loadFavorite" @defaultValueTree="resetTree" />
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
import { getOneById } from "@/api/hench/HenchAction.js";

export default {
  components: {
    TreeChart,
    TreeFavorite
  },
  data() {
    return {
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
      favorite: false,
      resetId: 0
    };
  },
  methods: {
    addFavorite() {
      this.$store.commit("addHenchMixFavorite", this.treeData);
      this.$set(this, "treeData", this.defaultTreeData);
      this.$set(this, "favorite", true);
    },
    getFavorite() {
      return this.$store.state.henchMixFavorite;
    },
    resetTree(value) {
      if (value) {
        this.$set(this, "treeData", this.defaultTreeData);
        this.$set(this, "favorite", false);
        this.saveTreeData();
      }
    },
    loadFavorite(value) {
      this.$set(this, "treeData", value);
      this.$set(this, "favorite", true);
    },
    onEmitSearch(value) {
      this.$set(this, "resetId", uuid.v1());
      this.$set(this.treeData, "hench", value);
      this.$set(this.treeData, "children", undefined);
      this.$set(this, "favorite", false);
      this.saveTreeData();
    },
    async onEmitChildMix(value) {
      let nodelevel = value.nodelevel;
      let mix = value.henchMix;
      const aChildren = [
        {
          hench: await getOneById(mix.henchLeft.id),
          item: mix.itemLeft,
          nodelevel: uuid.v1(),
          type: "select"
        },
        {
          hench: await getOneById(mix.henchRight.id),
          item: mix.itemRight,
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
      this.$set(this, "favorite", false);
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
