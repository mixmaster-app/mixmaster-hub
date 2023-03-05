<template>
  <div class="fill-height pa-3 scroll-y">
    <h2>{{ this.package.fullName }} Changelogs</h2>
    <v-divider></v-divider>
    <v-expansion-panels class="pt-3" accordion multiple>
      <v-expansion-panel
        v-for="(changelog, key) in changelogs"
        :key="key"
        class="pa-2"
      >
        <v-expansion-panel-header>
          <h3>
            {{ changelog.icon }} {{ changelog.version }} - {{ changelog.date }}
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div
            class="mb-3"
            v-for="(category, key) in changelog.text"
            :key="key"
          >
            {{ category.category }}
            <ul>
              <li v-for="(item, key) in category.items" :key="key">
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

export default {
  name: "Changelogs",
  components: {},
  data() {
    return {
      package: pjson,
      changelogs: [
        {
          version: "v1.2.4",
          icon: "🚀",
          date: "2023-03-05",
          text: [
            {
              category: "Improve",
              items: [
                "Change Some Icons",
                "Translate text to french (except changelogs)",
                "Start improving main page"
              ]
            },
            {
              category: "Added",
              items: ["Add Changelogs page"]
            },
            {
              category: "Removed",
              items: ["Removed functionnalities Page (Added link in Sidebar)"]
            },
            {
              category: "Technical",
              items: ["Refactor lots of code"]
            }
          ]
        },
        {
          version: "v1.2.3",
          icon: "🦯",
          date: "2023-02-23",
          text: [
            {
              category: "General",
              items: ["Add auto-updater"]
            }
          ]
        },
        {
          version: "v1.2.2",
          icon: "🚀",
          date: "2023-01-20",
          text: [
            {
              category: "General",
              items: [
                "Add a README file",
                "Add a Dark theme (enabled by default)",
                "Improve Main page UI (no information on it for now)"
              ]
            },
            {
              category: "Functionnality",
              items: ["Launch mixmaster from the application"]
            },
            {
              category: "Technic",
              items: ["Move Localstorage data to electron store"]
            }
          ]
        },
        {
          version: "v1.1.0",
          icon: "🚀",
          date: "2023-01-20",
          text: [
            {
              category: "General",
              items: [
                "Mix tree view: Add an input field (you can type anything in it)",
                "Improved UI for hench list and hench details views"
              ]
            },
            {
              category: "Data",
              items: ["Plug the new API version"]
            },
            {
              category: "Settings",
              items: ["Add a unique identifier"]
            }
          ]
        },
        {
          version: "v0.1.0",
          icon: "🧪",
          date: "2021-03-16",
          text: [
            {
              category: "New",
              items: [
                "Basic hench list search",
                "Mix level calculator",
                "Mix tree view"
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
