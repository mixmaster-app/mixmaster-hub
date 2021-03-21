<template>
  <div class="settings">
    <v-tabs vertical v-model="tab" dark background-color="grey accent-4">
      <v-tab
        v-for="(item, index) in items"
        :key="index"
        style="width: 160px;"
        @click="reset"
        >{{ item.libelle }}
      </v-tab>
      <v-tab-item v-for="(item, index) in items" :key="index" class="ma-4">
        <v-card v-if="item.mode && item.mode == 'easter01'">
          <v-card-text @click="up" class="user-none">
            {{ item.text }}
          </v-card-text>
          <v-card flat v-if="count >= 10">
            <v-img
              src="@/assets/img/luffy_gros_tas.gif"
              height="auto"
              width="256"
              contain
              class="ml-7 pt-7"
            ></v-img>
            <v-card-title class="caption user-none">
              {{ item.easterTxt }}
            </v-card-title>
          </v-card>
        </v-card>
        <Changelogs v-else />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
// const { shell } = require("electron");
import Changelogs from "@/views/Settings/Changelogs.vue";

export default {
  name: "Settings",
  components: { Changelogs },
  data() {
    return {
      tab: null,
      items: [
        {
          libelle: "Changelogs",
          text: ""
        },
        {
          libelle: "Settings",
          text: "🏴‍☠️ Nakama Win 🏴‍☠️",
          mode: "easter01",
          easterTxt: "Bien joué t'as win une ultra, c'est Timo qui régale !"
        }
      ],
      count: 0
    };
  },
  methods: {
    // openPage(url) { shell.openExternal(url); },
    up() {
      this.$set(this, "count", this.count + 1);
    },
    reset() {
      this.$set(this, "count", 0);
    }
  }
};
</script>
