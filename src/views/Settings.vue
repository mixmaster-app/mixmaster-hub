<template>
  <div class="settings" style="height: 100%">
    <v-card flat style="height: 100%">
      <v-tabs
        vertical
        v-model="tab"
        dark
        background-color="grey accent-4"
        style="height: 100%"
      >
        <v-tab
          v-for="(item, index) in items"
          :key="index"
          style="width: 160px;"
          @click="reset"
          >{{ item.libelle }}
        </v-tab>
        <v-tab-item v-for="(item, index) in items" :key="index">
          <v-card flat class="ma-2">
            <v-card-text v-if="item.mode && item.mode == 'easter01'">
              <span @click="up" class="user-none">
                {{ item.text }}
              </span>
              <v-card v-if="count >= 10" style="width: fit-content">
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
            </v-card-text>
            <v-card-text v-else style="white-space: pre-line"
              ><span v-html="item.text"></span
            ></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
// const { shell } = require("electron");

export default {
  name: "Settings",
  components: {},
  data() {
    return {
      tab: null,
      items: [
        {
          libelle: "Changelogs",
          text:
            "<h1>v0.1.1 - 18/03/2021</h1><br/><h2>Changed</h2><br/><li><b>Arbre de mix:</b> Ajout des items de mixs</li><li>Résolution de bugs mineur</li><br/><h2>Fixed</h2><br/><li><b>System Bar:</b> Fix du bouton maximize / unmaximize</li><br/><h1>v0.1.0 - 16/03/2021</h1><br/><h2>Added</h2><br/><li><b>Recherche de henchs:</b> Ajout d'une page pour rechercher des informations sur un hench</li><br/><li><b>Calculateur de mix:</b> Ajout d'une page permettant de cacluler le niveau d'un mix</li><br/><li><b>Arbre de mix:</b> Visualiser l'arbre de mix d'un hench</li>"
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
    // openPage(url) {
    //   shell.openExternal(url);
    // },
    up() {
      this.$set(this, "count", this.count + 1);
    },
    reset() {
      this.$set(this, "count", 0);
    }
  }
};
</script>
