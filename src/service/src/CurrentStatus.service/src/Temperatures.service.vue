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
    pty: string
  }
  selectCop: {
    selectWeatherCop: PersonalOptionsTypes
    temperature: {
      korea: number
      openWeather: number
    }
    pty: {
      korea: string
    }
    sky: {
      korea: string
      openWeather: string
    }
  }
  handleSelect: (name: PersonalOptionsTypes) => void
}

export default defineComponent({
  components: {
    NowTemperature: Components.CurrentTemperatures,
    WeatherCopSideBar: Components.WeatherCoperations,
  },
  async setup(): Promise<SetUpTypes> {
    const {
      state: {
        korea: { currentTemperature },
        personal: { selectWeatherCop },
        openWeather: { current },
      },
      dispatch,
    } = useStore()

    console.log(currentTemperature)

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
        pty: currentTemperature.pty,
      }
    }

    const getCop = () => {
      return {
        selectWeatherCop: selectWeatherCop,
        temperature: {
          korea: Math.round(parseInt(currentTemperature.temperature, 10)),
          openWeather: Math.round(current.temp),
        },
        pty: {
          korea: currentTemperature.pty,
        },
        sky: {
          korea: currentTemperature.sky,
          openWeather: current.sky,
        },
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
