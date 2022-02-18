<template>
  
    <MapView/>
    <MyLocationBtnVue/>
    <Searchbar/>
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

import MyLocationBtnVue from '@/components/myLocationBtn/MyLocationBtn.vue'; 
import MapView from '../components/mapview/MapView.vue';
import Searchbar from '../components/searchbar/Searchbar.vue';

export default defineComponent({
  name: 'Home',
  components: {
    MapView,
    MyLocationBtnVue,
    Searchbar,
  },
  setup(){
    usePlacesStore();
    //
    return{

    }
  }
});
</script>
