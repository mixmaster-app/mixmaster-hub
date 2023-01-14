<template>
  <tbody>
    <ResetStore />
    <UserIdentity />
    <LauncherEmplacement />
  </tbody>
</template>

<script>
import UserIdentity from "@/components/Settings/UserIdentity.vue";
import ResetStore from "@/components/Settings/ResetStore.vue";
import LauncherEmplacement from "@/components/Settings/LauncherEmplacement.vue";

export default {
  name: "SettingsBody",
  components: { UserIdentity, ResetStore, LauncherEmplacement },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>
