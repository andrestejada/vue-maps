import axios from "axios";

const searchApi = axios.create({
  baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params:{
    limit:5,
    language:'es',
    access_token:'pk.eyJ1IjoiYW5kcmVzMDUwNjk1IiwiYSI6ImNrcHI5NHliYzAxb2wydnBpYngwdDFsZzQifQ.dZPVOfCVUIsQvvPkNCnsLw'
  }
});

export default searchApi;