<template>
  <div class="current-temperature-container display-flex">
    <NowTemperature :nowTemperature="nowTemperature()" />
    <WeatherCopSideBar />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"

export default {
  components: {
    NowTemperature: Components.CurrentTemperatures,
    WeatherCopSideBar: Components.WeatherCoperations,
  },
  async setup(): Promise<any> {
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
