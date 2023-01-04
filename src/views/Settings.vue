<template>
  <div class="settings full-height">
    <Data />
  </div>
</template>

<script>
import Data from "@/views/Settings/Data.vue";

export default {
  name: "Settings",
  components: { Data },
  data() {
    return {
      user_identity: localStorage.getItem("user_identity")
    };
  },
  methods: {}
};
</script>
