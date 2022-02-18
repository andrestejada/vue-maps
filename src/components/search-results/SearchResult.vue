<script lang="ts" src="./SearchResult.ts" />
<template>

<div
  v-if="isloadingPlaces"
  class="alert alert-primary text-center"
>
  <h5>Loading</h5>
  <span>Wait please...</span>
</div>

  <ul v-else-if="places.length > 0" class="list-group mt-3" >

    <li 
      v-for="place in places"
      :key="place.id"
      class="list-group-item list-item-action" 
      :class="{'active': place.id === activePlace}"
      @click="onPlaceClicked(place)"
    >
      <h5>{{place.text}}</h5>
      <p>{{place.place_name}}</p>
      <div align="right" >
        <button
          class="btn btn-outline-primary btn-sm"
          :class="place.id === activePlace ? 'btn-outline-light' : 'btn-outline-primary' "
          @click.self="getRouteDirections(place)"
        >Direcciones</button>
      </div>
    </li>

  </ul>
</template>

<style scoped>
  ul{
    height: 400px;
    overflow: scroll;
    
  }
  ul::-webkit-scrollbar{
    width: 10px;
  }
  ul::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: rgb(197, 197, 197);
  }
  li{
    cursor: pointer;
  }
  h5{
    font-size: 15px!important;
  }
  p{
    font-size: 10px;
  }
</style>