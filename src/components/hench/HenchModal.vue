<template>
  <v-dialog v-model="isActiveModal" width="900" max-height="450">
    <v-card>
      <v-tabs
        fixed-tabs
        background-color="gray"
        color="white"
        dark
        right
        v-model="firstTab"
      >
        <v-tab grow disabled>
          {{ data.libelle }}
          <v-img
            class="ma-2"
            max-height="16"
            max-width="16"
            :src="data.getImageTypePath()"
          >
          </v-img>
        </v-tab>
        <v-tab :key="1" @click="model = 'tab-1'">Stats</v-tab>
        <v-tab :key="2" @click="model = 'tab-2'">Zones</v-tab>
        <v-tab :key="3" @click="model = 'tab-3'">Mix</v-tab>
        <v-tab :key="4" @click="model = 'tab-4'">Evolution</v-tab>
      </v-tabs>

      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-card :elevation="4">
              <v-img
                height="416"
                min-height="416"
                max-width="50%"
                contain
                style="margin: 0 auto;"
                :src="data.imageUrl"
              >
              </v-img>
            </v-card>
          </v-col>

          <v-col cols="12" sm="8">
            <v-tabs-items v-model="model">
              <v-tab-item :key="1" :value="`tab-1`">
                <v-card>
                  <v-card-text>
                    <v-simple-table>
                      <tbody>
                        <tr>
                          <td>Level</td>
                          <td>
                            {{ data.levelMinimum }} - {{ data.levelMaximum }}
                          </td>
                        </tr>
                        <tr v-for="(stat, prop) in data.stats" :key="prop">
                          <td>
                            {{
                              prop.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
                            }}
                          </td>
                          <td>{{ stat }}</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item :key="2" :value="`tab-2`">
                <v-card>
                  <v-card-text>
                    <ul
                      id="zones"
                      v-if="
                        data.zones.length != undefined && data.zones.length >= 1
                      "
                    >
                      <li v-for="zone in data.zones" :key="zone.id">
                        {{ zone.libelle }}
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item :key="3" :value="`tab-3`">
                <v-card>
                  <v-card-text>
                    <span v-if="data.henchMixs.length == 0">
                      No mixs found for this hench
                    </span>
                    <ul id="mixs" v-if="data.henchMixs.length >= 1">
                      <li v-for="mix in data.henchMixs" :key="mix.id">
                        {{ mix.henchLeft.libelle }} ({{ mix.itemLeft.libelle }})
                        + {{ mix.henchRight.libelle }} ({{
                          mix.itemRight.libelle
                        }})
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item :key="4" :value="`tab-4`">
                <v-card>
                  <v-card-text>
                    <ul id="evolutions">
                      {{
                        data.getAllEvolutions()
                      }}
                    </ul>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "HenchModal",
  props: {
    activeModal: Boolean,
    data: Object
  },
  data() {
    return {
      isActiveModal: this.activeModal,
      firstTab: 1,
      model: "tab-1"
    };
  },
  watch: {
    activeModal() {
      this.isActiveModal = this.activeModal;
    },
    isActiveModal() {
      this.$emit("input", this.isActiveModal);
    }
  }
};
</script>
