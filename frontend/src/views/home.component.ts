import { Options, Vue } from 'vue-class-component';
import SearchCity from '@/components/SearchCity.vue';
import WeatherForecast from '@/components/WeatherForecast.vue';
import AppLoader from "@/components/AppLoader.vue";
import store from '@/store';

@Options({
  components: {
    SearchCity,
    WeatherForecast,
    AppLoader
  },
})
export default class HomeView extends Vue {
  $store: any = store
}