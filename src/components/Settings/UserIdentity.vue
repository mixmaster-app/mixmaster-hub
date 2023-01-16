<template>
  <tr>
    <td class="text-left pa-2">
      <b>User identity</b>
      <p class="mt-2">
        This is a unique identier than can be used to solve errors calls to the
        back-end data
      </p>
    </td>
    <td class="text-right">
      <v-chip>
        <v-icon left>
          mdi-account
        </v-icon>
        <span style="user-select: text;">{{ this.getUserIdentity() }}</span>
      </v-chip>
    </td>
  </tr>
</template>

<script>
export default {
  name: "UserIdentity",
  components: {},
  data() {
    return {};
  },
  methods: {
    getUserIdentity() {
      return this.$store.state.userIdentity;
    }
  }
};
</script>
