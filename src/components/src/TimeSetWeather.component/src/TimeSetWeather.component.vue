<template>
  <div class="timeSet-container">
    <h3 class="timeSet-container__title">시간당 날씨 정보</h3>
    <ul class="timeSet-container__item-list display-flex">
      <li class="tiemSet-container__list" v-for="item in listData" :key="item">
        <div class="item-container display-flex">
          <p class="item-container__temperatures">{{ item.temperature }}º</p>
          <figure class="item-container__img">
            <img
              :src="item.skyImg ? item.skyImg : ''"
              alt="시간대별 날씨 아이콘"
            />
          </figure>
          <p class="item-container__time">{{ item.time.substr(0, 2) }}시</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  reactive,
  Ref,
  ref,
} from "@vue/runtime-core"
import { HourlyDataTypes, TimeSetProps } from "./types"

type setUpTypes = {
  listData: Ref<HourlyDataTypes[] | undefined>
}

export default defineComponent({
  props: {
    onDataList: {
      type: Object as PropType<TimeSetProps>,
      required: true,
    },
  },

  setup(props): setUpTypes {
    const data = reactive<TimeSetProps["hourlyTemperature"]>({
      temperature: props.onDataList.hourlyTemperature.temperature,
      precipitation: props.onDataList.hourlyTemperature.precipitation,
      sky: props.onDataList.hourlyTemperature.sky,
    })
    const listData = ref<Array<HourlyDataTypes>>()

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

    const dataListFormat = () => {
      listData.value = data.temperature.map((item, index) => {
        return {
          temperature: item.fcstValue,
          time: item.fcstTime,
          skyImg: getSkyState(
            data.sky[index].fcstValue,
            data.precipitation[index].fcstValue
          ),
        }
      })
    }

    onMounted(() => {
      dataListFormat()
    })

    return { listData }
  },
})
</script>
<style lang="scss">
.timeSet-container {
  width: 100%;
  height: 15.125rem;
  padding: 1.875rem;
  border-radius: 1.5rem;
  box-shadow: 0 0.3125rem 1.125rem 0 rgba(0, 0, 0, 0.08);
  background-color: rgba(255, 255, 255, 0.2);
  border: solid 0.125rem #ffffff;

  .timeSet-container__title {
    font-family: "NanumSquare";
    font-size: 1.75rem;
    font-weight: 900;
    font-style: normal;
    line-height: 1;
    letter-spacing: -0.0525rem;
    text-align: left;
    color: #333333;
    margin-bottom: 1.75rem;
  }

  .timeSet-container__item-list {
    width: 100%;
    flex: 1;
    justify-content: space-between;
    height: calc(100% - 2.375rem);
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 0.5rem;

    .tiemSet-container__list {
      min-width: 3.5rem;
      height: 100%;
      margin-right: 1rem;

      .item-container {
        height: 100%;
        width: 100%;
        text-align: center;
        flex-direction: column;
        justify-content: space-between;

        .item-container__temperatures {
          font-size: 1.5rem;
          font-weight: bold;
          letter-spacing: -0.045rem;
          text-align: center;
          color: #505050;
        }

        .item-container__img {
          width: 100%;

          img {
            width: 100%;
          }
        }

        .item-container__time {
          font-size: 1.25rem;
          font-weight: normal;
          letter-spacing: -0.0375rem;
          text-align: center;
          color: #8f8f8f;
        }
      }
    }
  }
}
</style>
