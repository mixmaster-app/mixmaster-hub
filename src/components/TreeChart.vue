<template>
  <v-card flat class="center" style="width:95%;">
    <v-card class="d-flex justify-center" flat v-if="treeData.nodelevel == 1">
      <HenchSearchInput
        style="max-width: fit-content; min-width: 220px;"
        @updateHench="emitSearch"
      />
      <v-btn
        icon
        color="red"
        outlined
        class="ma-3"
        :disabled="!treeData.hench"
        @click="resetTree"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-btn
        icon
        color="orange"
        outlined
        class="ma-3"
        :disabled="this.isFavorite == true || treeData.hench == undefined"
        @click="addFavorite"
      >
        <v-icon>mdi-star</v-icon>
      </v-btn>
    </v-card>
    <v-card
      v-if="treeData.hench"
      :flat="treeData.nodelevel != 1"
      v-bind:class="
        treeData.nodelevel == 1 ? 'overflow-scroll' : 'overflow-allow'
      "
      class="pa-3 justify-center"
    >
      <div v-if="treeData.nodelevel == 1">
        <v-btn
          icon
          color="black"
          tile
          small
          outlined
          class="ma-2"
          @click="zoomIn"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          icon
          color="black"
          tile
          small
          outlined
          class="ma-2"
          @click="zoomOut"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </div>
      <table class="center" :style="{ zoom: `${zoom}%` }">
        <tr>
          <td
            :colspan="
              Array.isArray(treeData.children)
                ? treeData.children.length * 2
                : 1
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
                  <v-badge
                    color="border-lightgray"
                    avatar
                    overlap
                    v-if="treeData.item"
                  >
                    <template v-slot:badge v-if="treeData.item.imagePath">
                      <v-avatar
                        style="background-color: #E7E7E7"
                        class="border-lightgray"
                        :title="treeData.item.name"
                      >
                        <v-img :src="treeData.item.imagePath" />
                      </v-avatar>
                      <v-avatar
                        style="width: 32px; max-width: 32px !important;"
                      >
                        <v-text-field
                          v-model="treeData.hench.note"
                          dense
                          style="font-size: 12px; margin-left: 4px; margin-top: 16px; font-weight:bold"
                        />
                      </v-avatar>
                    </template>
                    <v-avatar
                      size="70"
                      color="white"
                      @click="activeModal = true"
                    >
                      <img :src="treeData.hench.imageAvatar" />
                    </v-avatar>
                  </v-badge>

                  <v-badge color="border-lightgray" avatar overlap v-else>
                    <template v-slot:badge>
                      <v-avatar
                        style="width: 32px; max-width: 32px !important;"
                      >
                        <v-text-field
                          v-model="treeData.hench.note"
                          dense
                          style="font-size: 12px; margin-left: 4px; margin-top: 16px; font-weight:bold"
                        />
                      </v-avatar>
                    </template>
                    <v-avatar
                      size="70"
                      color="white"
                      @click="activeModal = true"
                    >
                      <img :src="treeData.hench.imageAvatar" />
                    </v-avatar>
                  </v-badge>
                </div>
                <div class="name">
                  {{ treeData.hench.name }} <br />
                  <select
                    class="select border-black"
                    :key="treeData.hench.id"
                    :disabled="this.getChild().length == 1"
                    @change="mixListUpdate"
                  >
                    <option
                      v-for="(item, index) in this.getChild()"
                      :value="item.value"
                      :key="index"
                      :selected="item.selected"
                      >{{ item.libelle }}
                    </option>
                  </select>
                </div>
              </div>
              <HenchModal
                :activeModal="activeModal"
                :data="transformHench(treeData.hench)"
                v-model="activeModal"
              />
            </div>
            <div
              class="extend_handle"
              v-if="
                Array.isArray(treeData.children) && treeData.children.length
              "
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
    </v-card>
  </v-card>
</template>

<script>
// https://github.com/tower1229/Vue-Tree-Chart/blob/master/src/components/TreeChart.vue
import HenchSearchInput from "@/components/hench/HenchSearchInput.vue";
import HenchModal from "@/components/hench/HenchModal.vue";
import { Hench } from "@/models/hench/Hench.js";

export default {
  name: "TreeChart",
  components: { HenchSearchInput, HenchModal },
  props: ["json", "isFavorite"],
  data() {
    return {
      zoom: 100,
      activeModal: false,
      treeData: this.json,
      searchValue: "_"
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
    zoomIn() {
      this.$set(this, "zoom", this.zoom + 4);
    },
    zoomOut() {
      this.$set(this, "zoom", this.zoom - 4);
    },
    getChild() {
      const henchMixsList = this.treeData.hench.mix;
      if (!henchMixsList || henchMixsList.length == 0) {
        let mixChild = [
          {
            selected: true,
            libelle: `No mix available`,
            value: -1
          }
        ];
        return mixChild;
      } else {
        let mixChild = [];
        let i = 0;
        mixChild.push({
          selected: true,
          libelle: `Choose a value`,
          value: -1
        });
        for (const item of henchMixsList) {
          mixChild.push({
            selected: false,
            libelle: `${item.hench_left.name} + ${item.hench_right.name}`,
            value: i
          });
          i++;
        }
        return mixChild;
      }
    },
    transformHench(data) {
      return new Hench(data);
    },
    mixListUpdate(val) {
      const index = val.target.value;
      if (index === false || index == -1) return;
      this.emitChildMix({
        nodelevel: this.treeData.nodelevel,
        henchMix: this.treeData.hench.mix[index]
      });
      return;
    },
    emitSearch(e) {
      this.$emit("emitSearch", e);
      this.$forceUpdate();
    },
    emitChildMix(val) {
      this.$emit("emitChildMix", val);
    },
    resetTree() {
      this.$emit("resetTree", true);
    },
    addFavorite() {
      this.$emit("addFavorite");
    },
    toggleExtend: function(treeData) {
      treeData.extend = !treeData.extend;
      this.$forceUpdate();
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
  /* overflow: hidden; */
}
.avat {
  cursor: pointer;
}
.node .person .avat {
  display: block;
  height: 4em;
  /* overflow: hidden; */
  background: #fff;
  /* border: 1px solid #ccc; */
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
  height: 2em;
  line-height: 2em;
  white-space: nowrap;
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
