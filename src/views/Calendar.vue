<template>
  <div style="height:100%; padding:5px" class="ma-2">
    <v-sheet height="64">
      <v-toolbar flat>
        <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
          Today
        </v-btn>
        <v-btn fab text small color="grey darken-2" @click="prev">
          <v-icon small>
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <v-btn fab text small color="grey darken-2" @click="next">
          <v-icon small>
            mdi-chevron-right
          </v-icon>
        </v-btn>
        <v-toolbar-title v-if="$refs.calendar">
          {{ $refs.calendar.title }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu bottom right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
              <span>{{ typeToLabel[type] }}</span>
              <v-icon right>
                mdi-menu-down
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="type = 'week'">
              <v-list-item-title>Week</v-list-item-title>
            </v-list-item>
            <v-list-item @click="type = 'month'">
              <v-list-item-title>Month</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-sheet>
    <v-sheet height="90%" width="100%" class="no-overflow">
      <v-calendar
        ref="calendar"
        v-model="focus"
        color="primary"
        :events="events"
        :event-color="getEventColor"
        :type="type"
        @change="updateRange"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import { getAllEventFrom } from "@/api/EventAction.js";

export default {
  name: "Calendar",
  data: () => ({
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week"
    },
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1"
    ],
    names: [
      "Event XP",
      "Event Drop",
      "Animations",
      "Quêtes temporaires",
      "Guerre de magirita",
      "Guerre de mekrita"
    ]
  }),
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    async updateRange({ start }) {
      const events = [];
      const startDate = new Date(`${start.date}T00:00:00`);

      getAllEventFrom(startDate.getFullYear(), startDate.getMonth() + 1)
        .then(result => {
          for (let i = 0; i < result.length; i++) {
            const item = result[i];
            events.push({
              name: item.libelle,
              start: new Date(
                `${item.start}T${
                  item.start_heure ? item.start_heure : "00:00:00"
                }`
              ),
              end: new Date(
                `${item.end}T${item.end_heure ? item.end_heure : "00:00:00"}`
              ),
              color: `${item.event_type.color}`,
              timed: item.start_heure ? true : false
            });
          }
          this.$set(this, "events", events);
        })
        .catch(error => {
          if (error) this.$set(this, "api_error", true);
        });
    }
  }
};
</script>
