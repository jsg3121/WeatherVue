<template>
  <div class="current-info">
    <figure class="current-info__img">
      <img loading="lazy" :src="`${img}`" alt="기상 아이콘" />
    </figure>
    <div class="current-info__description display-flex">
      <NowInfo :nowInfo="showWeather" :selectCop="selectWeatherCop" />
      <MinMaxInfo :minMax="minMax" :selectCop="selectWeatherCop" />
    </div>
  </div>
</template>
<script lang="ts">
import { PersonalOptionsTypes } from "@/store/src/state"
import { reactive, Ref, ref, toRefs } from "@vue/reactivity"
import { defineComponent, PropType, watch } from "vue"
import { CurrentInfo } from "./CurrentInfo/index"
import { MinMax, ShowWeatherType } from "./types"

type SetUpTypes = {
  showWeather: ShowWeatherType
  img: Ref<string | undefined>
  minMax: MinMax
  selectWeatherCop: Ref<PersonalOptionsTypes>
}

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

export default defineComponent({
  components: {
    MinMaxInfo: CurrentInfo.MinMaxInfo,
    NowInfo: CurrentInfo.NowInfo,
  },
  props: {
    nowTemperature: {
      type: Object as PropType<WeatherDataType>,
      required: true,
    },
  },
  setup(props): SetUpTypes {
    const { selectWeatherCop, weather } = toRefs<WeatherDataType>(
      props.nowTemperature
    )
    const firstSet = selectWeatherCop.value as keyof WeatherDataType["weather"]
    const showWeather = reactive<ShowWeatherType>({
      nowTemp: weather.value[firstSet].temperature,
      nowSky: weather.value[firstSet].sky,
    })

    const img = ref<string>()
    const minMax = reactive<MinMax>({
      minTemp: weather.value[firstSet].minTemp,
      maxTemp: weather.value[firstSet].maxTemp,
    })

    const getSky = () => {
      const value = showWeather.nowSky
      if (value === "1" || value === "clear sky") {
        showWeather.nowSky = "맑음"
        img.value = require("@/assets/img/main-sunny-icon@2x.png")
      } else if (value === "3" || value.indexOf("few") >= 0) {
        showWeather.nowSky = "구름 많음"
        img.value = require("@/assets/img/main-fog-icon@2x.png")
      } else if (value === "4" || value.indexOf("cloud") >= 0) {
        if (
          String(weather.value.korea.pty) !== "0" ||
          value.indexOf("snow") >= 0 ||
          value.indexOf("rain") >= 0
        ) {
          if (
            String(weather.value.korea.pty) === "2" ||
            String(weather.value.korea.pty) === "3" ||
            String(weather.value.korea.pty) === "6" ||
            String(weather.value.korea.pty) === "7" ||
            value.indexOf("snow") >= 0
          ) {
            showWeather.nowSky = "눈"
            img.value = require("@/assets/img/main-snow-icon@2x.png")
          } else {
            showWeather.nowSky = "비"
            img.value = require("@/assets/img/main-rain-icon@2x.png")
          }
        } else {
          showWeather.nowSky = "흐림"
          img.value = require("@/assets/img/main-cloud-icon@2x.png")
        }
      } else {
        showWeather.nowSky = "흐림"
        img.value = require("@/assets/img/main-cloud-icon@2x.png")
      }
    }
    watch(selectWeatherCop, () => {
      const cop = selectWeatherCop.value as keyof WeatherDataType["weather"]
      showWeather.nowTemp = weather.value[cop].temperature
      showWeather.nowSky = weather.value[cop].sky
      minMax.minTemp = weather.value[cop].minTemp
      minMax.maxTemp = weather.value[cop].maxTemp
      getSky()
    })
    getSky()

    return { showWeather, img, minMax, selectWeatherCop }
  },
})
</script>
<style lang="scss">
.current-info {
  width: 26.5rem;
  .current-info__img {
    width: 26.5rem;
    height: 17.625rem;
    margin-bottom: 3.25rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .current-info__description {
    justify-content: space-evenly;

    > div {
      width: 50%;
    }
  }
}
</style>
