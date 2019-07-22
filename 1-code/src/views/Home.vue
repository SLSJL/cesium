<template>
  <div>
    <div id="cesium-credit"></div>
    <div class="home" id="home"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      map: null,
      viewerOpts: {
        animation: false,
        timeline: false,
        geocoder: false,
        fullscreenButton: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        homeButton: false,
        baseLayerPicker: false,
        navigationInstructionsInitiallyVisible: false,
        creditContainer: "cesium-credit"
      }
    };
  },
  mounted() {
    this.map = this.$utils.map.initCesium("home", this.viewerOpts);
  }
};
</script>

<style lang="less" scoped>
.home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #eee;
}
</style>
