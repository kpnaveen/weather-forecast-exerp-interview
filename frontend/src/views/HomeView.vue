<template>
  <div class="home">
    <SearchCity />
    <WeatherForecast />
  </div>
  <AppLoader v-if="loaderStatus">
    Fetching Weather Forecast...
  </AppLoader>
</template>

<script lang="ts" src="./home.component.ts"></script>
