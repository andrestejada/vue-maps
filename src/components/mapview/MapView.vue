<script lang="ts" src="./MapView.ts" />

<template>
  <div
    v-if="!isUserlocationReady"
    class="loading-map d-flex justify-content-center align-items-center"
  >
    <div class="tex-center">
      <h3>Please Wait...</h3>
      <span>Locating...</span>
    </div>
  </div>

  <div
    v-show="isUserlocationReady"
    class="map-container"
    ref="mapElement"
  />
</template>

<style scoped>
.map-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgb(250, 91, 91);
}

.loading-map {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;
}
</style>
