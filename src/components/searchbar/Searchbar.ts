import { usePlacesStore } from '@/composables';
import { computed, defineComponent, ref } from 'vue';
import SearchResult from "../search-results/SearchResult.vue";

export default defineComponent({
  name:'SearchBar',
  components:{
    SearchResult
  },
  setup(){
    const debounceTimeOut= ref()
    const debouncedValue = ref('')
    const {searchPlaceBytem} = usePlacesStore()
    return{
      deboundedValue: debouncedValue,
      searchTerm:computed({
        get(){
          return debouncedValue.value
        },
        set(val:string){
          if(debounceTimeOut.value) clearTimeout(debounceTimeOut.value)

          debounceTimeOut.value=setTimeout(() => {
            debouncedValue.value = val
            searchPlaceBytem(val)
          }, 500);
        }
      })
    }
  }
})