<template>
  <div class="timeSet-container">
    <h3 class="timeSet-container__title">시간대별</h3>
    <ul class="timeSet-container__item-list display-flex">
      <li class="tiemSet-container__list" v-for="item in data" :key="item">
        <div class="item-container display-flex">
          <p class="item-container__temperatures">{{ item.value }}º</p>
          <figure class="item-container__img">
            <img
              src="@/assets/img/sunny-icon@2x.png"
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
import { onMounted, ref } from "@vue/runtime-core"

type DataProps = {
  date: string
  time: string
  value: string
  valueSKY: string
  valueR06: string
  valuePTY: string
}

export default {
  props: {
    onDataList: {
      type: Object,
      required: true,
    },
  },
  setup(props: any) {
    const data = ref()

    onMounted(() => {
      data.value = props.onDataList
      // data.value = data.value.map((item: Pick<DataProps, "valueSKY">) => {
      //   if (item.valueSKY === "0") {
      //     // 강수는 0이지만 하늘 상태에 따라 흐림 또는 맑음
      //     require("@/assets/img/sunny-icon@2x.png")
      //   }
      //   // 맑음
      //   else if (
      //     item.valueSKY === "1" ||
      //     item.valueSKY === "2" ||
      //     item.valueSKY === "4" ||
      //     item.valueSKY === "5" ||
      //     item.valueSKY === "6" ||
      //     item.valueSKY === "7"
      //   ) {
      //     // 6시간 강우량이 70이상 예상될 때 번개
      //     require("@/assets/img/sunny-icon@2x.png")
      //   }
      //   // 비와 관련된 모든 기상
      //   else if (item.valueSKY === "3")
      //     require("@/assets/img/sunny-icon@2x.png")
      //   // 눈
      // })
      // console.log(data.value)
    })
    return { data }
  },
}
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
