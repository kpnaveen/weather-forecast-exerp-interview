import WeatherService, { ForecastModel } from '@/services/weather-service.service';
import store from '@/store';
import { Options, Vue } from 'vue-class-component';
import { Inject } from 'vue-property-decorator';

@Options({
  props: {
  }
})
export default class WeatherForecast extends Vue {

  @Inject('weatherService')
  public weatherService!: WeatherService;

  unsubscribe: any;
  weatherData: ForecastModel | null = null;
  error: string = ""
   
  mounted() {
    // TODO - use the latitude and longitude from the search city component
    // TODO - display the weather forecast in the template
    // TODO - Error handling, if the API call fails we should display an error message
    this.unsubscribe = store.subscribe((mutation, state) => {
      if(mutation.type === "setSelectedPlace") {
        const { lat, lng } = state.selectedPlace;
        if(!lat || !lng) {
          return
        }
        this.weatherData = null;
        this.error = "";
        store.dispatch("updateLoaderStatus", true)
        this.weatherService.getWeatherForecast(lat, lng)
        .then((res) => {
          this.weatherData = res
        })
        .catch(err => {
          this.error = err.errorI18NMessage;
        })
        .finally(() => store.dispatch("updateLoaderStatus", false))
      }
    })
  }

  unmounted() {
    this.unsubscribe();
  }
}


