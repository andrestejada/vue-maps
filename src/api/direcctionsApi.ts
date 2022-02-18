import axios from "axios";

const directionsApi = axios.create({
  baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
  params:{
    overview: 'simplified',
    steps: false,
    alternatives:false,
    geometries:'es',
    access_token:'pk.eyJ1IjoiYW5kcmVzMDUwNjk1IiwiYSI6ImNrcHI5NHliYzAxb2wydnBpYngwdDFsZzQifQ.dZPVOfCVUIsQvvPkNCnsLw'
  }
});

export default directionsApi;