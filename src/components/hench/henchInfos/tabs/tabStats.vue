<template>
  <v-card class="no-box-shadow">
    <v-card-text>
      <v-card-title class="justify-center black--text">
        <h2>{{ data.name }}</h2>
      </v-card-title>
      <v-card-subtitle class="text-center">
        <h5>
          Lv. {{ data.minimum_level }} - {{ data.maximum_level }}
          <span class="black--text">
            (M.{{ this.getMaster(data.minimum_level) }})
          </span>
        </h5>
      </v-card-subtitle>
      <v-card-text class="text-center">
        <v-avatar
          size="32"
          :class="['obtention-badge', data.is_dropable ? 'is' : 'isnot']"
          title="Drop"
        >
          <v-img contain height="40" src="@/assets/img/icons/drop.svg" />
        </v-avatar>
        <v-avatar
          size="32"
          :class="['obtention-badge', data.is_mixable ? 'is' : 'isnot']"
          title="Mix"
        >
          <v-img contain height="40" src="@/assets/img/icons/mix.svg" />
        </v-avatar>
      </v-card-text>

      <v-simple-table>
        <tbody>
          <tr v-for="(stat, prop) in data.stats" :key="prop">
            <td class="text-center">
              <strong>
                {{ prop.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) }}
              </strong>
            </td>
            <td width="55%">
              <v-progress-linear
                :value="getStatPercent(prop, stat)"
                class="justify-center"
                color="#528FE9"
                style="width:100%; height:32px; margin: 0 auto; border-radius:5px"
              >
                {{ stat }}
              </v-progress-linear>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TabStats",
  props: {
    data: Object
  },
  methods: {
    getMaster(level) {
      let master = undefined;
      if (!master && level >= 181) master = 10;
      if (!master && level >= 161) master = 9;
      if (!master && level >= 141) master = 8;
      if (!master && level >= 121) master = 7;
      if (!master && level >= 101) master = 6;
      if (!master && level >= 81) master = 5;
      if (!master && level >= 61) master = 4;
      if (!master && level >= 41) master = 3;
      if (!master && level >= 21) master = 2;
      if (!master && level >= 1) master = 1;
      return master;
    },
    getStatPercent(stat, value) {
      switch (stat) {
        case "hp":
          return (value / 65535) * 100;
        case "mp":
          return (value / 2020) * 100;
        case "attack":
          value =
            (parseInt(value.split("~")[0]) + parseInt(value.split("~")[1])) / 2;
          return (value / 2402) * 100;
        case "power":
          return (value / 1879) * 100;
        case "speed":
          return (value / 1230) * 100;
        case "accuracy":
          return (value / 3010) * 100;
        case "chance":
          return (value / 2010) * 100;
        default:
          return 0;
      }
    }
  }
};
</script>

<style scoped>
.obtention-badge {
  padding: 5px;
  margin: 8px 12px 8px 12px;
}
.is {
  background-color: #bddbbd !important;
}

.isnot {
  border: 3px solid #e50000 !important;
  background-color: #d9d9d9;
}
</style>
