import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVzMDUwNjk1IiwiYSI6ImNrcHI5NHliYzAxb2wydnBpYngwdDFsZzQifQ.dZPVOfCVUIsQvvPkNCnsLw';

if(!navigator.geolocation){
  alert('Tu navegador no soporta el GeoLocation')
  throw new Error('Tu navegador no soporta el GeoLocation')
}

createApp(App).use(store).use(router).mount('#app')
