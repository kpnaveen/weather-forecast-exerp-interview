<template>
  <div class="hello" v-if="weatherData?.current_weather">
    <h3>Weather forecast for city</h3>

    <section>
      <div>
        {{ weatherData.current_weather.temperature }}
        {{ weatherData.current_weather.time }}
        {{ weatherData.current_weather.weathercode }}
        {{ weatherData.current_weather.winddirection }}
        {{ weatherData.current_weather.windspeed }}
      </div>
    </section>
    
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>

</style>
