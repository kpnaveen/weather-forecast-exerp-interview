<template>
  <div class="py-8" v-if="weatherData?.current_weather">
    <h3 class="font-bold uppercase text-xl pb-4">Weather forecast for city</h3>

    <section class="m-4 w-[90% ] sm:w-[60%] lg:w-[85%] max-w-[1280px] gap-4 lg:gap-0 sm:m-auto lg:grid lg:grid-cols-5 border-none md:border md:border-[#ccc]">
      <div class="weather-section">
        <h4>Time</h4>
        <div>
          {{ new Date(weatherData.current_weather.time).toLocaleString() }}
        </div>
      </div>
      <div class="weather-section">
        <h4>Temperature</h4>
        <div>
          {{ weatherData.current_weather.temperature }}{{ weatherData.current_weather_units.temperature }}
        </div>
      </div>
      <div class="weather-section">
        <h4>Weather Code</h4>
        <div>
          {{ weatherData.current_weather.weathercode }} {{ weatherData.current_weather_units.weathercode }}
        </div>
      </div>
      <div class="weather-section">
        <h4>Wind Direction</h4>
        <div>
          {{ weatherData.current_weather.winddirection }}{{ weatherData.current_weather_units.winddirection }}
        </div>
      </div>
      <div class="weather-section">
        <h4>Wind Speed</h4>
        <div>
          {{ weatherData.current_weather.windspeed }} {{ weatherData.current_weather_units.windspeed }}
        </div>
      </div>
    </section>
    
  </div>
  <div v-if="error" class="py-8 text-red-300 text-xl">
    Could not fetch weather forecast. Please try again later
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>
  @tailwind components;
  @layer components {
    .weather-section {
      @apply border lg:border-r border-[#ccc] flex items-center md:block
    }

    .weather-section h4 {
      @apply p-4 border-r md:border-0 lg:border-b border-[#ccc] font-bold uppercase flex-1
    }

    .weather-section > div {
      @apply p-4 flex-1
    }
  }

</style>
