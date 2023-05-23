<template>
  <tbody>
    <ResetStore />
    <UserIdentity />
    <LauncherEmplacement />
    <Theme />
    <VersionNumber />
    <DevelopperMode />
  </tbody>
</template>

<script>
import UserIdentity from "@/views/Settings/Components/SettingsList/UserIdentity.vue";
import ResetStore from "@/views/Settings/Components/SettingsList/ResetStore.vue";
import LauncherEmplacement from "@/views/Settings/Components/SettingsList/LauncherEmplacement.vue";
import Theme from "@/views/Settings/Components/SettingsList/Theme.vue";
import VersionNumber from "@/views/Settings/Components/SettingsList/VersionNumber.vue";
import DevelopperMode from "@/views/Settings/Components/SettingsList/DevelopperMode.vue";

export default {
  name: "SettingsBody",
  components: {
    UserIdentity,
    ResetStore,
    LauncherEmplacement,
    Theme,
    VersionNumber,
    DevelopperMode
  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>
