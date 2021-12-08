<template>
  <AtmosphereStatus :atmosphere="data" />
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"
import { defineComponent, ref, watch } from "vue"

export default defineComponent({
  components: {
    AtmosphereStatus: Components.AtmosphereStatus,
  },
  setup() {
    const {
      state: {
        korea: { currentTemperature },
        openWeather: { current },
        personal,
      },
    } = useStore()
    const data = ref()

    const atmosphere = () => {
      switch (personal.selectWeatherCop) {
        case "korea": {
          data.value = {
            humidity: parseInt(currentTemperature.humidity, 10),
            windDirection: parseInt(currentTemperature.windDirection, 10),
            windSpeed: parseInt(currentTemperature.windSpeed, 10),
          }
          return
        }
        case "openWeather": {
          data.value = {
            humidity: current.humidity,
            windDirection: current.wind_deg,
            windSpeed: current.wind_speed,
          }
          return
        }
        default: {
          return
        }
      }
    }
    watch(
      () => personal.selectWeatherCop,
      () => {
        atmosphere()
      }
    )

    atmosphere()

    return { data }
  },
})
</script>
<style lang="scss"></style>
