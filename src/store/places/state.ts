import { Feature } from "@/interfaces/places";

export interface PlacesState {
  isLoading:boolean;
  userLocation?:[number,number];
  places:Feature[];
  isLoadingPlace:boolean;
}

function state(): PlacesState {
  return {
    isLoading:true,
    userLocation:undefined,
    places:[],
    isLoadingPlace:false,
  }
}

export default state;