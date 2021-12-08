<template>
  <div class="timeSet-container">
    <h3 class="timeSet-container__title">시간당 날씨 정보</h3>
    <ul class="timeSet-container__item-list display-flex">
      <li class="tiemSet-container__list" v-for="item in listData" :key="item">
        <div class="item-container display-flex">
          <p class="item-container__temperatures">{{ item.temp }}º</p>
          <figure class="item-container__img">
            <img :src="item.sky ? item.sky : ''" alt="시간대별 날씨 아이콘" />
          </figure>
          <p class="item-container__time">{{ item.time.substr(0, 2) }}시</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from "@vue/runtime-core"
import { TimeSetDataTypes } from "./types"

type setUpTypes = {
  listData: TimeSetDataTypes[] | undefined
}

export default defineComponent({
  props: {
    onDataList: {
      type: Object as PropType<Array<TimeSetDataTypes>>,
      required: true,
    },
  },

  setup(props): setUpTypes {
    const { onDataList } = toRefs(props)
    const listData = reactive<Array<TimeSetDataTypes>>(onDataList.value)

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
