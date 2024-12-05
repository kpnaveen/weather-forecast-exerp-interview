import store from '@/store';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
  }
})
export default class SearchCity extends Vue {

  selectedPlace: { lat: number; lng: number } | null = null;

  placeChanged(place: any) {
    this.selectedPlace = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    this.updatePlaceInStore()
  }

  handleMapClick(e: any) {
    this.selectedPlace = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    }
    this.updatePlaceInStore()
  }

  updatePlaceInStore() {
    store.dispatch("updateSelectedPlace", this.selectedPlace)
  }


}