<template>
  <v-card max-width="fit-content" flat style="margin: 10px;">
    <v-card-text @click="up" class="user-none">
      🏴‍☠️ Nakama Win 🏴‍☠️
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
        Bien joué t'as win une ultra, c'est Timo qui régale !
      </v-card-title>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "Easter01",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    up() {
      this.$set(this, "count", this.count + 1);
    }
  }
};
</script>
