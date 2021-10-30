<template>
  <div class="current-temperature-container display-flex">
    <NowTemperature :nowTemperature="nowTemperature()" />
    <WeatherCopSideBar :selectCop="selectCop" @handleSelect="handleSelect" />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"
import { PersonalOptionsActionTypes } from "@/store/src/actions"
import { PersonalOptionsTypes } from "@/store/src/state"
import { defineComponent } from "vue"

type SetUpTypes = {
  nowTemperature: () => {
    temperature: number
    minTemp: number
    maxTemp: number
    sky: string
  }
  selectCop: {
    selectWeatherCop: string
    koreaTemperature: number
  }
  handleSelect: (name: PersonalOptionsTypes) => void
}

export default defineComponent({
  components: {
    NowTemperature: Components.CurrentTemperatures,
    WeatherCopSideBar: Components.WeatherCoperations,
  },
  async setup(): Promise<SetUpTypes> {
    const { state, dispatch } = useStore()

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
        temperature: Math.round(
          parseInt(state.currentTemperature.temperature, 10)
        ),
        minTemp: Math.round(parseInt(state.currentTemperature.minTemp, 10)),
        maxTemp: Math.round(parseInt(state.currentTemperature.maxTemp, 10)),
        sky: state.currentTemperature.sky,
      }
    }

    const getCop = () => {
      return {
        selectWeatherCop: state.selectWeatherCop,
        koreaTemperature: Math.round(
          parseInt(state.currentTemperature.temperature, 10)
        ),
      }
    }

    const selectCop = getCop()

    const handleSelect = (name: PersonalOptionsTypes) => {
      dispatch(PersonalOptionsActionTypes.GET_WEATHER_COP, name)
    }

    return { nowTemperature, selectCop, handleSelect }
  },
})
</script>
<style lang="scss">
.current-temperature-container {
  justify-content: space-between;
}
</style>
