<template>
  <div class="current-temperature-container display-flex">
    <NowTemperature />
    <WeatherCopSideBar />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { onUpdated } from "vue"
import http from "axios"

export default {
  components: {
    NowTemperature: Components.CurrentTemperatures,
    WeatherCopSideBar: Components.WeatherCoperations,
  },
  async setup() {
    onUpdated(async () => {
      const data = await http
        .request({
          url: "https://best-weather.com/api/ko/nowWeather",
          method: "GET",
          params: {
            nx: 60,
            ny: 127,
          },
        })
        .then((res) => {
          console.log(res.data)
          return res.data
        })
      return data
    })
    return { onUpdated }
  },
}
</script>
<style lang="scss">
.current-temperature-container {
  justify-content: space-between;
}
</style>
