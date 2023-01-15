<template>
  <tbody>
    <ResetStore />
    <UserIdentity />
    <LauncherEmplacement />
    <Theme />
  </tbody>
</template>

<script>
import UserIdentity from "@/components/Settings/UserIdentity.vue";
import ResetStore from "@/components/Settings/ResetStore.vue";
import LauncherEmplacement from "@/components/Settings/LauncherEmplacement.vue";
import Theme from "@/components/Settings/Theme.vue";

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
