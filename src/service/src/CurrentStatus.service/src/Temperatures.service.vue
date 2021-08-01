<template>
  <div class="current-temperature-container display-flex">
    <NowTemperature :nowTemperature="nowTemperature()" />
    <WeatherCopSideBar :nowTemperature="nowTemperature()" />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"
import http from "axios"
import { ref } from "@vue/reactivity"

export default {
  components: {
    NowTemperature: Components.CurrentTemperatures,
    WeatherCopSideBar: Components.WeatherCoperations,
  },
  async setup(): Promise<any> {
    const store = useStore()
    const nowWeather = ref()
    await http
      .request({
        url: " http://localhost:80/api/ko/nowWeather",
        method: "GET",
        params: {
          nx: store.state.location.gridX,
          ny: store.state.location.gridY,
        },
      })
      .then((res) => {
        nowWeather.value = res.data
      })

    console.log(nowWeather.value)

    const nowTemperature = () => {
      return {
        nowTemp: nowWeather.value[0][2].obsrValue,
        nowSky: nowWeather.value[1].fcstValue,
        minMax: nowWeather.value[2],
      }
    }

    return { nowTemperature }
  },
}
</script>
<style lang="scss">
.current-temperature-container {
  justify-content: space-between;
}
</style>
