<template>
  <div>
    <v-text-field
      v-if="treeData.nodelevel && treeData.nodelevel == 1"
      v-model="searchValue"
      label="Hench"
      type="text"
      @keydown="emitSearch"
    ></v-text-field>
    <table v-if="treeData.hench">
      <tr>
        <td
          :colspan="
            Array.isArray(treeData.children) ? treeData.children.length * 2 : 1
          "
          :class="{
            parentLevel:
              Array.isArray(treeData.children) && treeData.children.length,
            extend:
              Array.isArray(treeData.children) &&
              treeData.children.length &&
              treeData.extend
          }"
        >
          <div :class="{ node: true, hasMate: treeData.mate }">
            <div
              class="person"
              :class="Array.isArray(treeData.class) ? treeData.class : []"
              @click="$emit('click-node', treeData)"
            >
              <div class="avat">
                <img :src="treeData.hench.imageUrl" />
              </div>
              <div class="name">
                {{ treeData.hench.libelle }} <br />
                <v-select
                  v-if="treeData.type && treeData.type == 'select'"
                  :items="this.getChild(treeData.hench.henchMixs)"
                  v-model="defaultSelectValue"
                  item-text="libelle"
                  item-value="value"
                  label="MixList"
                  @change="MixListUpdate"
                ></v-select>
              </div>
            </div>
          </div>
          <div
            class="extend_handle"
            v-if="Array.isArray(treeData.children) && treeData.children.length"
            @click="toggleExtend(treeData)"
          ></div>
        </td>
      </tr>
      <tr
        v-if="
          Array.isArray(treeData.children) &&
            treeData.children.length &&
            treeData.extend
        "
      >
        <td
          v-for="(children, index) in treeData.children"
          :key="index"
          colspan="2"
          class="childLevel"
        >
          <TreeChart :json="children" @emitChildMix="emitChildMix" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// https://github.com/tower1229/Vue-Tree-Chart/blob/master/src/components/TreeChart.vue
import { getOneHenchWhereLibelleContains } from "@/api/hench/HenchAction.js";
export default {
  name: "TreeChart",
  props: ["json"],
  data() {
    return {
      treeData: this.json,
      searchValue: "",
      defaultSelectValue: {
        libelle: `Choose a value`,
        value: false
      }
    };
  },
  watch: {
    json: {
      handler: function(Props) {
        let extendKey = function(jsonData) {
          jsonData.extend =
            jsonData.extend === void 0 ? true : !!jsonData.extend;
          if (Array.isArray(jsonData.children)) {
            jsonData.children.forEach(c => {
              extendKey(c);
            });
          }
          return jsonData;
        };
        if (Props) {
          this.treeData = extendKey(Props);
        }
      },
      immediate: true
    }
  },
  methods: {
    getChild(henchMixs) {
      if (henchMixs) {
        const mixChild = [];
        let i = 0;
        mixChild.push({
          libelle: `Choose a value`,
          value: false
        });
        for (const item of henchMixs) {
          mixChild.push({
            libelle: `${item.henchLeft.libelle} + ${item.henchRight.libelle}`,
            value: i
          });
          i++;
        }
        return mixChild;
      } else {
        return [];
      }
    },
    MixListUpdate(val) {
      if (val === false) return;
      this.emitChildMix({
        nodelevel: this.treeData.nodelevel,
        henchMix: this.treeData.hench.henchMixs[val]
      });
      return;
    },
    emitSearch(e) {
      if (e.keyCode === 13 || e.keyCode === 9) {
        const hench = this.search();
        hench.then(res => {
          this.$emit("emitSearch", res);
        });
      }
    },
    emitChildMix(val) {
      this.$emit("emitChildMix", val);
    },
    toggleExtend: function(treeData) {
      treeData.extend = !treeData.extend;
      this.$forceUpdate();
    },
    async search() {
      const hench = await getOneHenchWhereLibelleContains(this.searchValue);
      return hench;
    }
  }
};
</script>

<style scoped>
table {
  border-collapse: separate !important;
  border-spacing: 0 !important;
}
td {
  position: relative;
  vertical-align: top;
  padding: 0 0 50px 0;
  text-align: center;
}
.extend_handle {
  position: absolute;
  left: 50%;
  bottom: 30px;
  width: 10px;
  height: 10px;
  padding: 10px;
  transform: translate3d(-15px, 0, 0);
  cursor: pointer;
}
.extend_handle:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid;
  border-color: #ccc #ccc transparent transparent;
  transform: rotateZ(135deg);
  transform-origin: 50% 50% 0;
  transition: transform ease 300ms;
}
.extend_handle:hover:before {
  border-color: #333 #333 transparent transparent;
}
.extend .extend_handle:before {
  transform: rotateZ(-45deg);
}
.extend::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 15px;
  height: 15px;
  border-left: 2px solid #ccc;
  transform: translate3d(-1px, 0, 0);
}
.childLevel::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 100%;
  height: 15px;
  border-left: 2px solid #ccc;
  transform: translate3d(-1px, 0, 0);
}
.childLevel::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -15px;
  border-top: 2px solid #ccc;
}
.childLevel:first-child:before,
.childLevel:last-child:before {
  display: none;
}
.childLevel:first-child:after {
  left: 50%;
  height: 15px;
  border: 2px solid;
  border-color: #ccc transparent transparent #ccc;
  border-radius: 6px 0 0 0;
  transform: translate3d(1px, 0, 0);
}
.childLevel:last-child:after {
  right: 50%;
  height: 15px;
  border: 2px solid;
  border-color: #ccc #ccc transparent transparent;
  border-radius: 0 6px 0 0;
  transform: translate3d(-1px, 0, 0);
}
.childLevel:first-child.childLevel:last-child::after {
  left: auto;
  border-radius: 0;
  border-color: transparent #ccc transparent transparent;
  transform: translate3d(1px, 0, 0);
}
.node {
  position: relative;
  display: inline-block;
  margin: 0 1em;
  box-sizing: border-box;
  text-align: center;
}
.node .person {
  /* border: 1px solid black; */
  position: relative;
  display: inline-block;
  z-index: 2;
  width: 10em;
  overflow: hidden;
}
.node .person .avat {
  display: block;
  width: 10em;
  height: 4em;
  overflow: hidden;
  background: #fff;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin: 0 auto;
  width: max-content;
}
.node .person .avat img {
  /* width: 100%; */
  height: 100%;
}
.node .person .name {
  user-select: none;
  /* height: 2em; */
  line-height: 2em;
  /* overflow: hidden; */
  width: 100%;
}
.node.hasMate::after {
  content: "";
  position: absolute;
  left: 2em;
  right: 2em;
  top: 2em;
  border-top: 2px solid #ccc;
  z-index: 1;
}

.landscape {
  transform: translate(-100%, 0) rotate(-90deg);
  transform-origin: 100% 0;
}
.landscape .node {
  text-align: left;
  height: 8em;
  width: 8em;
}
.landscape .person {
  position: relative;
  transform: rotate(90deg);
  padding-left: 4.5em;
  height: 4em;
  top: 4em;
  left: -1em;
}
.landscape .person .avat {
  position: absolute;
  left: 0;
}
.landscape .person .name {
  height: 4em;
  line-height: 4em;
}
.landscape .hasMate {
  position: relative;
}
.landscape .hasMate .person {
  position: absolute;
}
.landscape .hasMate .person:first-child {
  left: auto;
  right: -4em;
}
.landscape .hasMate .person:last-child {
  left: -4em;
  margin-left: 0;
}
</style>
