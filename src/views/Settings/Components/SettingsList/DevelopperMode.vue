<template>
  <tr>
    <td class="text-left pa-2" colspan="2">
      <b>Mode développeur</b>
      <p class="mt-2">
        <ServerList />
      </p>
    </td>
  </tr>
</template>

<script>
import ServerList from "@/views/Settings/Components/SettingsList/DevelopperMode/ServerList.vue";

export default {
  name: "DevelopperMode",
  components: { ServerList },
  data() {
    return {};
  },
  methods: {
    isDevelopper() {
      return this.$store.state.isDevelopper;
    }
  }
};
</script>
