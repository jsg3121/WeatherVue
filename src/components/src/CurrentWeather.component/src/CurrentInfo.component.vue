<template>
  <div class="current-info">
    <figure class="current-info__img">
      <img :src="`${img}`" alt="기상 아이콘" />
    </figure>
    <div class="current-info__description display-flex">
      {{ selectWeatherCop }}
      <NowInfo :nowInfo="nowStatus" />
      <MinMaxInfo :minMax="minMax" />
    </div>
  </div>
</template>
<script lang="ts">
import { Ref, ref, toRefs } from "@vue/reactivity"
import { defineComponent, PropType } from "vue"
import { CurrentInfo } from "./CurrentInfo/index"
import { PersonalOptionsTypes } from "@/store/src/state"
import {
  MinMax,
  MinMaxRef,
  NowStatus,
  NowStatusRef,
  CurrentProps,
} from "./types"

type SetUpTypes = {
  nowStatus: any
  img: Ref<string | undefined>
  minMax: Ref<MinMax>
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

    const nowStatus = ref({
      korea: {
        nowTemp: weather.value.korea.temperature,
        nowSky: weather.value.korea.sky,
      },
      openWeather: {
        nowTemp: weather.value.openWeather.temperature,
        nowSky: weather.value.openWeather.sky,
      },
    })
    const img = ref<string>()
    const minMax = ref({
      minTemp: weather.value.korea.minTemp,
      maxTemp: weather.value.korea.maxTemp,
    })

    const getSky = () => {
      const value = nowStatus.value.korea.nowSky
      if (value === "1") {
        nowStatus.value.korea.nowSky = "맑음"
        img.value = require("@/assets/img/main-sunny-icon@2x.png")
      } else if (value === "3") {
        nowStatus.value.korea.nowSky = "구름 많음"
        img.value = require("@/assets/img/main-fog-icon@2x.png")
      } else if (value === "4") {
        if (String(weather.value.korea.pty) !== "0") {
          if (
            String(weather.value.korea.pty) === "2" ||
            String(weather.value.korea.pty) === "3" ||
            String(weather.value.korea.pty) === "6" ||
            String(weather.value.korea.pty) === "7"
          ) {
            nowStatus.value.korea.nowSky = "눈"
            img.value = require("@/assets/img/main-snow-icon@2x.png")
          } else {
            nowStatus.value.korea.nowSky = "비"
            img.value = require("@/assets/img/main-rain-icon@2x.png")
          }
        } else {
          nowStatus.value.korea.nowSky = "흐림"
          img.value = require("@/assets/img/main-cloud-icon@2x.png")
        }
      }
    }
    getSky()

    return { nowStatus, img, minMax, selectWeatherCop }
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
