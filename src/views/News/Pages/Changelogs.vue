<template>
  <div class="fill-height pa-3 scroll-y">
    <h2>{{ this.package.fullName }} Changelogs</h2>
    <v-divider></v-divider>
    <v-expansion-panels class="pt-3" accordion multiple>
      <v-expansion-panel v-for="(changelog, key) in changelogs" :key="key">
        <v-expansion-panel-header>
          <div>
            <h3>{{ changelog.icon }} {{ changelog.version }}</h3>
            <h6 class="font-weight-light mt-2">{{ changelog.date }}</h6>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-divider class="mb-4"></v-divider>
          <div
            class="mb-3"
            v-for="([category, items], key) in changelog.changes"
            :key="key"
          >
            <span class="text-body-1">{{ category }}</span>
            <ul>
              <li class="text-caption" v-for="(item, key) in items" :key="key">
                {{ item }}
              </li>
            </ul>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import pjson from "@/../package.json";
import changelogs from "@/services/Changelogs";

export default {
  name: "Changelogs",
  components: {},
  data() {
    return {
      package: pjson,
      changelogs: [...changelogs.versions]
    };
  }
};
</script>
