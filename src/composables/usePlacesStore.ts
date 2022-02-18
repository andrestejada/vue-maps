import { StateInterface } from "@/store"
import { computed, onMounted } from "vue"
import { useStore } from "vuex"

export const usePlacesStore =()=>{
  
  const store = useStore<StateInterface>()
  onMounted(()=>{
    if(!store.getters['places/isUserlocationReady']){
      store.dispatch('places/getIniatialLocation');
    }
  })
  return{
    //state
    isLoading:computed(()=>store.state.places.isLoading),
    userLocation:computed(()=>store.state.places.userLocation),
    places:computed(()=>store.state.places.places),
    isloadingPlaces:computed(()=>store.state.places.isLoadingPlace),
    //getters
    isUserlocationReady:computed<boolean>(()=>store.getters['places/isUserlocationReady']),

    //action
    searchPlaceBytem:(query:string)=> store.dispatch('places/searchPlaceBytem',query)
  }

}