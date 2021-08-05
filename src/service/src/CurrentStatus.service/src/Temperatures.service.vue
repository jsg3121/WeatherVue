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
    t1h: number // 현재 기온
    tmn: number // 최저 기온
    tmx: number // 최고 기온
    sky: string // 하늘 상태
  }
}

export default {
  components: {
    NowTemperature: Components.CurrentTemperatures,
    WeatherCopSideBar: Components.WeatherCoperations,
  },
  async setup(): Promise<SetUpTypes> {
    const store = useStore()
    const nowTemperature = () => {
      const data = store.state.currentTemperature
      return {
        t1h: Math.round(parseInt(data.t1h, 10)),
        tmn: Math.round(parseInt(data.tmn, 10)),
        tmx: Math.round(parseInt(data.tmx, 10)),
        sky: data.sky,
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
