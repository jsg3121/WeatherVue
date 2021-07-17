<template>
  <div>
    <HeaderVue />
    <Location />
    <div class="display-flex">
      <NowTemperature />
      <WeatherCopSideBar />
    </div>
  </div>
</template>

<script lang="ts">
import { Components } from "@/components"

export default {
  components: {
    HeaderVue: Components.Header,
    Location: Components.Location,
    NowTemperature: Components.CurrentTemperatures,
    WeatherCopSideBar: Components.WeatherCoperations,
  },
}
</script>

<style></style>
