import Mapboxgl from 'mapbox-gl';
export interface MapState {
  map?:Mapboxgl.Map;
  markers:Mapboxgl.Marker[];
  distance?:number;
  durantion?:number;
}

function state(): MapState {
  return {
      map:undefined,
      markers:[],
      distance:undefined,
      durantion:undefined
  }
}

export default state;