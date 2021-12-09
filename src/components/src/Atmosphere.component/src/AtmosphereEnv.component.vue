<template>
  <div class="atmosphere-env-container">
    <ul class="atmosphere-env-container__list display-flex">
      <li class="atmosphere-env-container__item">
        <div class="item-container display-flex">
          <figure class="item-container__img">
            <img
              src="@/assets/img/fine-dust-icon@2x.png"
              alt="대기환경 아이콘"
            />
          </figure>
          <div class="item-container__description display-flex">
            <p class="item-container__name">미세먼지</p>
            <p class="item-container__status">{{ dustVal }}</p>
          </div>
        </div>
      </li>
      <li class="atmosphere-env-container__item">
        <div class="item-container display-flex">
          <figure class="item-container__img">
            <img
              src="@/assets/img/fine-particulate-matter-icon@2x.png"
              alt="대기환경 아이콘"
            />
          </figure>
          <div class="item-container__description display-flex">
            <p class="item-container__name">초미세먼지</p>
            <p class="item-container__status">{{ minDustVal }}</p>
          </div>
        </div>
      </li>
      <li class="atmosphere-env-container__item">
        <div class="item-container display-flex">
          <figure class="item-container__img">
            <img src="@/assets/img/uv-icon@2x.png" alt="대기환경 아이콘" />
          </figure>
          <div class="item-container__description display-flex">
            <p class="item-container__name">자외선</p>
            <p class="item-container__status">{{ uvVal }}</p>
          </div>
        </div>
      </li>
      <li class="atmosphere-env-container__item">
        <div class="item-container display-flex">
          <figure class="item-container__img">
            <img src="@/assets/img/ozone-icon@2x.png" alt="대기환경 아이콘" />
          </figure>
          <div class="item-container__description display-flex">
            <p class="item-container__name">오존</p>
            <p class="item-container__status">{{ o3Val }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { AtmosDust, AtmosUv } from "@/store/src/state"
import { defineComponent, PropType, ref } from "@vue/runtime-core"

const value = (val: string) => {
  console.log("111111111111111")

  console.log(val)

  switch (val) {
    case "1":
      return "좋음"
    case "2":
      return "보통"
    case "3":
      return "나쁨"
    case "4":
      return "매우 나쁨"
    case null:
    case undefined:
      return "보통"
    default:
      return "좋음"
  }
}

const uvValue = (val: string) => {
  const key = parseInt(val, 10)
  if (key <= 2) {
    return "낮음"
  } else if (3 <= key && key <= 5) {
    return "보통"
  } else if (6 <= key && key <= 7) {
    return "높음"
  } else if (8 <= key && key <= 10) {
    return "매우 높음"
  } else if (11 <= key) {
    return "위험"
  }
}

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<{ dust: AtmosDust; uv: AtmosUv }>,
      required: true,
    },
  },
  setup(props) {
    const env = ref(props.data)
    const dustVal = ref(value(props.data.dust.pm10Grade1h))
    const minDustVal = ref(value(props.data.dust.pm25Grade1h))
    const o3Val = ref(uvValue(props.data.dust.o3Grade))
    const uvVal = ref(uvValue(props.data.uv))
    return { env, dustVal, minDustVal, o3Val, uvVal }
  },
})
</script>
<style lang="scss">
.atmosphere-env-container {
  width: 100%;
  margin-top: 2.4375rem;

  .atmosphere-env-container__list {
    flex: 1;
    justify-content: space-between;

    .atmosphere-env-container__item {
      width: 8.375rem;
      height: 15.9375rem;
      padding: 2.5625rem 1.6875rem 2.3125rem;
      border-radius: 1.5rem;
      box-shadow: 0 0.3125rem 1.125rem 0 rgba(0, 0, 0, 0.08);
      border: solid 0.125rem #ffffff;
      background-color: rgba(255, 255, 255, 0.2);

      .item-container {
        height: 100%;
        flex: 1;
        justify-content: space-between;
        flex-direction: column;

        .item-container__img {
          width: 5rem;
          height: 5rem;

          img {
            width: 100%;
          }
        }

        .item-container__description {
          max-height: 3.5rem;
          justify-content: space-between;
          flex: 1;
          flex-direction: column;

          .item-container__name {
            width: 5rem;
            height: 1.5625rem;
            font-size: 1.375rem;
            font-weight: normal;
            line-height: 1.3;
            text-align: center;
            color: #797979;
          }

          .item-container__status {
            width: 7rem;
            height: 1.5rem;
            font-size: 1.65rem;
            font-weight: bold;
            line-height: 1.2;
            letter-spacing: normal;
            text-align: center;
            color: #333333;
          }
        }
      }

      &:nth-child(1) {
        .item-container__name {
          font-size: 1.2rem !important;
        }
      }
      &:nth-child(2) {
        .item-container__name {
          font-size: 1rem !important;
        }
      }
    }
  }
}
</style>
