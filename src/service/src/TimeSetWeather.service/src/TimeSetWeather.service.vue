<template>
  <div>
    <TimeSetWeather :onDataList="timeSetData" />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"
// import { HourlyTypes } from "@/store/src/state"
import { defineComponent, reactive, watch } from "vue"
import { changeSky, setTime } from "./hourlyUtils"
import { NodeRequire } from "@/types"

type TimeSetDataTypes = {
  time: string
  sky: NodeRequire
  temp: string
}

type SetUpTypes = {
  timeSetData: Array<TimeSetDataTypes>
}

export default defineComponent({
  components: {
    TimeSetWeather: Components.TimeSet,
  },
  setup(): SetUpTypes {
    const {
      state: {
        korea: {
          hourlyTemperature: {
            precipitation: koreaPrecipitation,
            sky: koreaSky,
            temperature: koreaTemp,
          },
        },
        openWeather: { hourly },
        personal,
      },
    } = useStore()
    const timeSetData = reactive<Array<TimeSetDataTypes>>([])

    const getSkyState = (sky: string, precipitation: string) => {
      if (sky === "1") {
        return require("@/assets/img/sunny-icon@2x.png")
      } else if (sky === "3" || sky === "4") {
        if (precipitation === "0") {
          return require("@/assets/img/cloud-icon@2x.png")
        } else if (
          precipitation === "1" ||
          precipitation === "2" ||
          precipitation === "4" ||
          precipitation === "5" ||
          precipitation === "6"
        ) {
          return require("@/assets/img/rain-icon@2x.png")
        } else if (precipitation === "3" || precipitation === "7") {
          return require("@/assets/img/snow-icon@2x.png")
        }
      } else {
        return require("@/assets/img/sunny-icon@2x.png")
      }
    }

    const onDataList = () => {
      timeSetData.length = 0
      switch (personal.selectWeatherCop) {
        case "korea": {
          for (let i = 0; i < 40; i++) {
            timeSetData.push({
              time: koreaTemp[i].fcstTime,
              sky: getSkyState(
                koreaSky[i].fcstValue,
                koreaPrecipitation[i].fcstValue
              ),
              temp: koreaTemp[i].fcstValue,
            })
          }

          return
        }
        case "openWeather": {
          hourly.forEach((list, index) => {
            timeSetData.push({
              time: setTime(index),
              sky: changeSky(list.sky),
              temp: String(Math.round(list.temp)),
            })
          })
          return
        }
        default: {
          return
        }
      }
    }
    onDataList()

    watch(
      () => personal.selectWeatherCop,
      () => {
        onDataList()
      }
    )

    return { timeSetData }
  },
})
</script>
<style lang="scss"></style>
