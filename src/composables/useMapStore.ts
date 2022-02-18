import { useStore } from 'vuex';
import { computed } from 'vue';
import { StateInterface } from '@/store';
import Mapboxgl from 'mapbox-gl';
import { Feature } from '@/interfaces/places';
import { LngLat } from '@/store/map/actions';
export const useMapStore=()=>{
  const store = useStore<StateInterface>();


  return{
    map:computed(()=> store.state.map.map ),

    //getters
    isMapReady:computed<boolean>(()=>store.getters['map/isMapReady']),

    //mutation
    setMap:(map:Mapboxgl.Map)=> store.commit('map/setMap',map),
    setPlacesMarkers:(places:Feature[])=>store.commit('map/setPlaceMarkers',places),

    //actions
    getRouteBetweenPoints:(start:LngLat,end:LngLat)=>store.dispatch('map/getRouteBetweenPoints',{start,end})
  }
}

export default useMapStore;