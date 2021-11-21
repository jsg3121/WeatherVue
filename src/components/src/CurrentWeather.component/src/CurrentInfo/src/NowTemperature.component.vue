<template>
  <div class="current-info__current-status">
    <h3 class="current-info__now-temperatures">{{ nowData.nowTemp }}º</h3>
    <h4 class="current-info__now-status">{{ nowData.nowSky }}</h4>
  </div>
</template>
<script lang="ts">
import { Ref, ref, toRefs } from "@vue/reactivity"
import { defineComponent, watch } from "vue"
import { NowInfoProps } from "./types"

type SetUpTypes = {
  nowData: Ref<NowInfoProps>
}

export default defineComponent({
  props: {
    nowInfo: {
      type: Object,
      required: true,
    },
    selectCop: {
      type: String,
      required: true,
    },
  },
  setup(props): SetUpTypes {
    const { selectCop: weatherCop, nowInfo } = toRefs(props)
    const nowData = ref<NowInfoProps>({
      nowTemp: nowInfo.value.nowTemp,
      nowSky: nowInfo.value.nowSky,
    })

    watch(weatherCop, () => {
      nowData.value.nowTemp = nowInfo.value.nowTemp
      nowData.value.nowSky = nowInfo.value.nowSky
    })

    return { nowData }
  },
})
</script>
<style lang="scss">
.current-info__current-status {
  .current-info__now-temperatures {
    font-family: "Oswald";
    font-size: 6.25rem;
    font-weight: 500;
    letter-spacing: normal;
    text-align: center;
    color: #1f1f1f;
    height: 5.125rem;
    line-height: 0.8;
    margin-bottom: 1.6875rem;
  }

  .current-info__now-status {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: center;
    color: #333333;
    height: 2.5625rem;
  }
}
</style>
