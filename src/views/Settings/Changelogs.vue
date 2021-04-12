<template>
  <v-card class="scroll">
    <v-card-title class="user-none mb-3">Changelogs 🚀</v-card-title>
    <v-card-text>
      <div
        v-for="(release, indexRelease) in this.changelogsData.releases"
        :key="indexRelease"
      >
        <br class="user-none" v-if="indexRelease != 0" />
        <h2>
          <span class="link">{{ release.version.raw }}</span> -
          {{ formatDate(release.date) }}
        </h2>
        <v-divider class="ma-2"></v-divider>
        <div
          v-for="(change, indexChange) in getOnlyCorrectChanges(
            release.changes
          )"
          :key="indexChange"
        >
          <br class="user-none" v-if="indexChange != 0" />
          <h3>
            {{ capitalizeFirstLetter(change[0]) }}
          </h3>
          <li v-for="(line, indexLine) in change[1]" :key="indexLine">
            {{ line.title }}
          </li>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { parser } from "keep-a-changelog";
const fs = require("fs");
const CHANGELOGS_PATH = "CHANGELOGS.md";

export default {
  name: "Changelogs",
  data() {
    return {
      changelogsData: this.getChangelogData()
    };
  },
  methods: {
    getChangelogData() {
      try {
        return parser(fs.readFileSync(CHANGELOGS_PATH, "UTF-8"));
      } catch (err) {
        return [];
      }
    },
    formatDate(d) {
      return `
      ${`0${d.getDate()}`.slice(-2)}/${`0${d.getMonth() + 1}`.slice(
        -2
      )}/${d.getFullYear()}`;
    },
    capitalizeFirstLetter(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    getOnlyCorrectChanges(data) {
      const list = [];
      for (const arr of data) {
        if (arr[1] && arr[1].length > 0) {
          list.push(arr);
        }
      }
      return list;
    }
  }
};
</script>
