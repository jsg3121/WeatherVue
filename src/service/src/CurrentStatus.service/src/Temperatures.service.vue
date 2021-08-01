<template>
  <div class="current-temperature-container display-flex">
    <NowTemperature />
    <WeatherCopSideBar />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"

export default {
  components: {
    NowTemperature: Components.CurrentTemperatures,
    WeatherCopSideBar: Components.WeatherCoperations,
  },
  async setup(): Promise<any> {
    return {}
  },
}
</script>
<style lang="scss">
.current-temperature-container {
  justify-content: space-between;
}
</style>
