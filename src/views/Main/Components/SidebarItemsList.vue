<template>
  <v-list nav dense>
    <v-divider v-if="this.hasTopDivider" class="mb-1" />
    <v-list-item
      v-for="(tab, key) in this.items"
      :key="key"
      link
      :to="tab.path"
    >
      <v-list-item-icon>
        <v-icon>{{ tab.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title> {{ tab.name }} </v-list-item-title>
    </v-list-item>
    <v-divider v-if="this.hasBottomDivider" class="mt-1 mb-1" />
  </v-list>
</template>

<script>
export default {
  name: "SidebarItemsList",
  props: ["items", "topDivider", "bottomDivider"],
  data() {
    return {
      hasTopDivider: this["topDivider"],
      hasBottomDivider: this["bottomDivider"]
    };
  }
};
</script>
