<template>
  <tbody>
    <ResetStore />
    <UserIdentity />
    <LauncherEmplacement />
    <Theme />
  </tbody>
</template>

<script>
import UserIdentity from "@/views/Settings/Components/SettingsList/UserIdentity.vue";
import ResetStore from "@/views/Settings/Components/SettingsList/ResetStore.vue";
import LauncherEmplacement from "@/views/Settings/Components/SettingsList/LauncherEmplacement.vue";
import Theme from "@/views/Settings/Components/SettingsList/Theme.vue";

export default {
  name: "SettingsBody",
  components: { UserIdentity, ResetStore, LauncherEmplacement, Theme },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>
