<template>
  <div class="mixtreeview center">
    <TreeChart
      :json="treeData"
      @emitSearch="onEmitSearch"
      @emitChildMix="onEmitChildMix"
      :key="18"
    />
  </div>
</template>

<script>
import TreeChart from "@/components/TreeChart";
import { uuid } from "vue-uuid";
import { getOneById } from "@/api/hench/HenchAction.js";

export default {
  components: {
    TreeChart
  },
  methods: {
    onEmitSearch(value) {
      this.$set(this.treeData, "hench", value);
      this.$set(this.treeData, "children", undefined);
    },
    async onEmitChildMix(value) {
      let nodelevel = value.nodelevel;
      let mix = value.henchMix;
      const aChildren = [
        {
          hench: await getOneById(mix.henchLeft.id),
          nodelevel: uuid.v1(),
          type: "select"
        },
        {
          hench: await getOneById(mix.henchRight.id),
          nodelevel: uuid.v1(),
          type: "select"
        }
      ];
      const CHILDREN = this.checkChildNode(this.treeData, nodelevel, aChildren);
      this.$set(this.treeData, "children", CHILDREN);
      // console.log(this.treeData);
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
    }
  },
  data() {
    return {
      treeData: {
        hench: undefined,
        nodelevel: 1,
        type: "select",
        class: ["rootNode"],
        children: []
      }
    };
  }
};
</script>
