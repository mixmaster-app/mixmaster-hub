<template>
  <v-dialog v-model="isActiveModal" width="80%">
    <HenchInfos :data="this.data" />
  </v-dialog>
</template>

<script>
import HenchInfos from "@/components/hench/henchInfos/HenchInfos.vue";

export default {
  name: "HenchModal",
  components: { HenchInfos },
  props: {
    activeModal: Boolean,
    data: Object
  },
  data() {
    return {
      isActiveModal: this.activeModal,
      firstTab: 1,
      model: "tab-1"
    };
  },
  methods: {},
  watch: {
    activeModal() {
      this.isActiveModal = this.activeModal;
    },
    isActiveModal() {
      this.$emit("input", this.isActiveModal);
    }
  }
};
</script>
