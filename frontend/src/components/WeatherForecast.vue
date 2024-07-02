<template>
  <div class="pt-8" v-if="weatherData?.current_weather">
    <h3 class="font-bold uppercase text-xl">Weather forecast for city</h3>

    <section class="mt-4 w-3/4 m-auto grid grid-cols-5 border border-[#ccc]">
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
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>
  @tailwind components;
  @layer components {
    .weather-section {
      @apply border-r border-[#ccc]
    }

    .weather-section h4 {
      @apply p-4 border-b border-[#ccc] font-bold uppercase
    }

    .weather-section > div {
      @apply p-4
    }
  }

</style>
