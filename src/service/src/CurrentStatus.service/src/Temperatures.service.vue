<template>
  <div class="current-temperature-container display-flex">
    <NowTemperature :nowTemperature="nowTemperature()" />
    <WeatherCopSideBar />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"

type SetUpTypes = {
  nowTemperature: () => {
    temperature: number
    minTemp: number
    maxTemp: number
    sky: string
  }
}

export default {
  components: {
    NowTemperature: Components.CurrentTemperatures,
    WeatherCopSideBar: Components.WeatherCoperations,
  },
  async setup(): Promise<SetUpTypes> {
    const {
      state: { currentTemperature },
    } = useStore()

    /**
     * ! 현재 날씨 상태
     * * Data Options
     * - temperature: 현재 기온
     * - minTemp: 최저기온
     * - maxTemp: 최고기온
     * - sky: 하늘상태
     */
    const nowTemperature = () => {
      return {
        temperature: Math.round(parseInt(currentTemperature.temperature, 10)),
        minTemp: Math.round(parseInt(currentTemperature.minTemp, 10)),
        maxTemp: Math.round(parseInt(currentTemperature.maxTemp, 10)),
        sky: currentTemperature.sky,
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
