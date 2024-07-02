<template>
  <div class="home">
    <SearchCity />
    <WeatherForecast />
  </div>
  <AppLoader v-if="$store.getters.appLoader">
    Fetching Weather Forecast...
  </AppLoader>
</template>

<script lang="ts" src="./home.component.ts"></script>
