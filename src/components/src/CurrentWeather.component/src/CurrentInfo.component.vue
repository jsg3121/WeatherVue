<template>
  <div class="current-info">
    <figure class="current-info__img">
      <img :src="`${img}`" alt="기상 아이콘" />
    </figure>
    <div class="current-info__description display-flex">
      <NowInfo :nowInfo="nowStatus" />
      <MinMaxInfo :minMax="minMax" />
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "@vue/reactivity"
import { CurrentInfo } from "./CurrentInfo/index"
export default {
  components: {
    MinMaxInfo: CurrentInfo.MinMaxInfo,
    NowInfo: CurrentInfo.NowInfo,
  },
  props: {
    nowTemperature: {
      type: Object,
      required: true,
    },
  },
  setup(props: any) {
    const nowStatus = ref({
      nowTemp: props.nowTemperature.t1h,
      nowSky: props.nowTemperature.sky,
    })
    const img = ref<string>()
    const minMax = ref({
      minTemp: props.nowTemperature.tmn,
      maxTemp: props.nowTemperature.tmx,
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
}
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
