import { Feature } from '@/interfaces/places';
import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLnlat( state: PlacesState,{lng,lat}:{lng:number,lat:number}) {
        state.userLocation = [lng,lat];
        state.isLoading = false;
    },

    setIsLoadingPlaces(state){
        state.isLoadingPlace = true
    },
    setPlaces(state,places:Feature[]){
        state.places = places,
        state.isLoadingPlace = false
    }
}


export default mutation;