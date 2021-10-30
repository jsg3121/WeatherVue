<template>
  <div class="weekly-weather-container">
    <h3 class="weekly-weather-container__title">주간예보</h3>
    <ul class="weekly-weather-container__item-list display-flex">
      <li
        class="weekly-weather-container__list"
        v-for="(item, idx) in weeklyData"
        :key="item"
      >
        <div class="item-container display-flex">
          <p class="item-container__temperatures--maximum">
            {{ Math.floor(item.maxTemperature) }}º
          </p>
          <figure class="item-container__img--maximum">
            <img
              :src="getStatus(item.skyPm)"
              alt="주간예보 날씨 아이콘 (최고 기온)"
            />
          </figure>
          <span class="item-container__separator"></span>
          <figure class="item-container__img--minimum">
            <img
              :src="getStatus(item.skyAm)"
              alt="주간예보 날씨 아이콘 (최저 기온)"
            />
          </figure>
          <p class="item-container__temperatures--minimum">
            {{ Math.floor(item.minTemperature) }}º
          </p>
          <div class="item-container__date-info display-flex">
            <p
              class="item-container__day"
              :class="
                getDate(idx).day === '일'
                  ? 'font-color_red'
                  : getDate(idx).day === '토'
                  ? 'font-color_blue'
                  : ''
              "
            >
              {{
                idx === "day1"
                  ? `내일`
                  : idx === "day2"
                  ? "모레"
                  : getDate(idx).day
              }}
            </p>
            <p
              class="item-container__date"
              :class="
                getDate(idx).day === '일'
                  ? 'font-color_red'
                  : getDate(idx).day === '토'
                  ? 'font-color_blue'
                  : ''
              "
            >
              {{ getDate(idx).date }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { WeeklyTypes } from "@/store/src/state"
import { defineComponent, PropType, reactive } from "@vue/runtime-core"
import { dayStatus, getDays } from "./dateChange"
import { SetUpType } from "./types"

export default defineComponent({
  props: {
    setWeekly: {
      type: Object as PropType<WeeklyTypes>,
      required: true,
    },
  },
  setup(props): SetUpType {
    // const { setWeekly } = toRefs(props)
    const weeklyData = reactive<WeeklyTypes>(props.setWeekly)

    const getDate: SetUpType["getDate"] = (day: string) => {
      const data = getDays(day)
      return data
    }

    const getStatus: SetUpType["getStatus"] = (sky) => {
      const data = dayStatus(sky)
      return require(`@/assets/img/${data}-icon@2x.png`)
    }

    return { getDate, getStatus, weeklyData }
  },
})
</script>
<style lang="scss">
.weekly-weather-container {
  width: 100%;
  height: 26.0625rem;
  padding: 1.875rem 1.875rem 2.1875rem 1.875rem;
  border-radius: 1.5rem;
  box-shadow: 0 0.3125rem 1.125rem 0 rgba(0, 0, 0, 0.08);
  border: solid 0.125rem #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
  margin-top: 2.5rem;

  .weekly-weather-container__title {
    font-size: 1.75rem;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.0525rem;
    text-align: left;
    color: #333333;
    margin-bottom: 1.8125rem;
  }

  .weekly-weather-container__item-list {
    height: calc(100% - 3.5625rem);
    width: 100%;
    justify-content: space-between;
    flex: 1;

    .weekly-weather-container__list {
      height: 100%;
      width: 3.5rem;

      .item-container {
        width: 100%;
        height: 100%;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;

        p[class*="item-container__temperatures--"] {
          font-size: 1.5rem;
          font-weight: bold;
          line-height: 1.17;
          letter-spacing: -0.045rem;
          text-align: center;
          color: #505050;
        }

        figure[class*="item-container__img--"] {
          width: 100%;
          height: auto;

          img {
            width: 100%;
          }
        }

        .item-container__separator {
          width: 0.125rem;
          height: 0.875rem;
          border-radius: 0.09375rem;
          background-color: #6e6d7c;
          transform: rotate(45deg);
        }

        .item-container__date-info {
          max-height: 3.375rem;
          justify-content: space-between;
          flex-direction: column;
          flex: 1;
          margin-top: 2.25rem;

          p {
            font-size: 1.25rem;
            font-weight: normal;
            letter-spacing: -0.0375rem;
            text-align: center;
            color: #505050;

            &.font-color_red {
              color: #f04b4b;
            }
            &.font-color_blue {
              color: #4a4afc;
            }
          }
        }
      }
    }
  }
}
</style>
