<template>
  <div class="current-info">
    <figure class="current-info__img">
      <!-- #TODO : #1  -->
      <img :src="`${img}`" alt="기상 아이콘" />
    </figure>
    <div class="current-info__description display-flex">
      <NowInfo :nowInfo="nowStatus" />
      <MinMaxInfo :minMax="minMax" />
    </div>
  </div>
</template>
<script lang="ts">
import { Ref, ref, toRefs } from "@vue/reactivity"
import { defineComponent, PropType } from "vue"
import { CurrentInfo } from "./CurrentInfo/index"
import {
  MinMax,
  MinMaxRef,
  NowStatus,
  NowStatusRef,
  CurrentProps,
} from "./types"

type SetUpTypes = {
  nowStatus: Ref<NowStatus>
  img: Ref<string | undefined>
  minMax: Ref<MinMax>
}

export default defineComponent({
  components: {
    MinMaxInfo: CurrentInfo.MinMaxInfo,
    NowInfo: CurrentInfo.NowInfo,
  },
  props: {
    nowTemperature: {
      type: Object as PropType<CurrentProps>,
      required: true,
    },
  },
  setup(props): SetUpTypes {
    const { temperature, minTemp, maxTemp, sky, pty } = toRefs<CurrentProps>(
      props.nowTemperature
    )
    const nowStatus = ref<NowStatusRef>({
      korea: {
        nowTemp: temperature,
        nowSky: sky,
      },
      openWeather: {
        nowTemp: temperature,
        nowSky: sky,
      },
    })
    const img = ref<string>()
    const minMax = ref<MinMaxRef>({
      minTemp: minTemp,
      maxTemp: maxTemp,
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
        if (String(pty) !== "0") {
          if (
            String(pty) === "2" ||
            String(pty) === "3" ||
            String(pty) === "6" ||
            String(pty) === "7"
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

    return { nowStatus, img, minMax }
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
