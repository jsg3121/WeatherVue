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
import { Ref, ref } from "@vue/reactivity"
import { defineComponent, PropType } from "vue"
import { CurrentInfo } from "./CurrentInfo/index"
import { NowStatusRef, MinMaxRef } from "./types"

type SetUpTypes = {
  nowStatus: Ref<NowStatusRef>
  img: Ref<string | undefined>
  minMax: Ref<MinMaxRef>
}

interface CurrentProps {
  temperature: number
  minTemp: number
  maxTemp: number
  sky: string
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
    const nowStatus = ref<NowStatusRef>({
      nowTemp: props.nowTemperature.temperature,
      nowSky: props.nowTemperature.sky,
    })
    const img = ref<string>()
    const minMax = ref<MinMaxRef>({
      minTemp: props.nowTemperature.minTemp,
      maxTemp: props.nowTemperature.maxTemp,
    })

    const getSky = () => {
      const value = nowStatus.value.nowSky
      if (value === "1") {
        nowStatus.value.nowSky = "맑음"
        img.value = require("@/assets/img/main-sunny-icon@2x.png")
      } else if (value === "3") {
        nowStatus.value.nowSky = "구름 많음"
        img.value = require("@/assets/img/main-fog-icon@2x.png")
      } else if (value === "4") {
        nowStatus.value.nowSky = "흐림"
        img.value = require("@/assets/img/main-cloud-icon@2x.png")
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
