<template>
  <div class="current-temperature-container display-flex">
    <NowTemperature :nowTemperature="nowTemperature()" />
    <WeatherCopSideBar :selectCop="weatherData" @handleSelect="handleSelect" />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"
import { PersonalOptionsActionTypes } from "@/store/src/actions"
import { PersonalOptionsTypes } from "@/store/src/state"
import { defineComponent, reactive, watch } from "vue"

type WeatherDataType = {
  selectWeatherCop: PersonalOptionsTypes
  weather: {
    korea: {
      temperature: number
      sky: string
      pty: string
      minTemp: string
      maxTemp: string
    }
    openWeather: {
      temperature: number
      sky: string
      pty: string
      minTemp: string
      maxTemp: string
    }
  }
}

type SetUpTypes = {
  nowTemperature: () => WeatherDataType
  weatherData: WeatherDataType
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

    const weatherData = reactive<WeatherDataType>({
      selectWeatherCop: selectWeatherCop,
      weather: {
        korea: {
          temperature: Math.round(parseInt(currentTemperature.temperature, 10)),
          sky: currentTemperature.sky,
          pty: currentTemperature.pty,
          minTemp: currentTemperature.minTemp,
          maxTemp: currentTemperature.maxTemp,
        },
        openWeather: {
          temperature: Math.round(current.temp),
          sky: current.sky,
          pty: currentTemperature.pty,
          minTemp: String(current.min_temp),
          maxTemp: String(current.max_temp),
        },
      },
    })

    /**
     * ! 현재 날씨 상태
     * * Data Options
     * - temperature: 현재 기온
     * - minTemp: 최저기온
     * - maxTemp: 최고기온
     * - sky: 하늘상태
     */
    const nowTemperature = () => {
      return weatherData
    }

    const handleSelect = (name: PersonalOptionsTypes) => {
      dispatch(PersonalOptionsActionTypes.GET_WEATHER_COP, name)
      weatherData.selectWeatherCop = name
    }

    watch(weatherData, () => {
      nowTemperature()
    })

    return { nowTemperature, weatherData, handleSelect }
  },
})
</script>
<style lang="scss">
.current-temperature-container {
  justify-content: space-between;
}
</style>
