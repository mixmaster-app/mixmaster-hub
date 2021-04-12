<template>
  <v-card>
    <v-card-text>
      <v-simple-table>
        <tbody>
          <tr>
            <td>Level</td>
            <td>
              {{ data.levelMinimum }} - {{ data.levelMaximum }}
              <b>(Master {{ this.getMaster(data.levelMinimum) }})</b>
            </td>
          </tr>
          <tr v-for="(stat, prop) in data.stats" :key="prop">
            <td>
              {{ prop.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) }}
            </td>
            <td>{{ stat }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "tabStats",
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
    }
  }
};
</script>
