<template>
  <l-map :zoom="zoom" :center="center" :options="mapOptions">
    <l-tile-layer :url="url" :attribution="attribution" :noWrap="true" />
  </l-map>
</template>

<script>
// import { latLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      zoom: 4,
      center: [0, 0],
      url: "http://127.0.0.1:3000/api/assets/map/{z}/{x}/{y}.png",
      attribution: "",
      mapOptions: {
        minZoom: 3,
        maxZoom: 6
      }
    };
  },
  methods: {}
};
</script>
