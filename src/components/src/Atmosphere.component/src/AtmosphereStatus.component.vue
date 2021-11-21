<template>
  <div class="atmosphere-container display-flex">
    <div
      class="atmosphere-container__info display-flex"
      v-for="item in cardData"
      :key="item"
    >
      <figure class="atmosphere-container__img">
        <img :src="item.img" :alt="item.alt" />
      </figure>
      <div class="atmosphere-container__description display-flex">
        <p class="atmosphere-container__figure">
          {{ item.rate }} {{ item.unit }}
        </p>
        <p class="atmosphere-container__description-name">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, toRefs } from "@vue/reactivity"
import { defineComponent, onMounted, PropType, watch } from "@vue/runtime-core"
import { setUpTypes, AtmosStatusPropType, CardDataType } from "./types"

export default defineComponent({
  props: {
    atmosphere: {
      type: Object as PropType<AtmosStatusPropType>,
      required: true,
    },
  },
  setup(props): setUpTypes {
    const { atmosphere } = toRefs(props)

    const cardData = ref<Array<CardDataType>>([
      {
        img: require("@/assets/img/windy-icon@2x.png"),
        alt: "풍향 아이콘",
        unit: "m/s",
        description: "북서풍",
        rate: 0,
      },
      {
        img: require("@/assets/img/rain-drop-icon@2x.png"),
        alt: "습도 아이콘",
        unit: "%",
        description: "습도",
        rate: 0,
      },
    ])

    const setWindDriection = (vec: number) => {
      if (vec) {
        if (22.5 < vec && vec <= 67.5) return "북동풍"
        else if (67.5 < vec && vec <= 112.5) return "동풍"
        else if (112.5 < vec && vec <= 157.5) return "남동풍"
        else if (157.5 < vec && vec <= 202.5) return "남풍"
        else if (202.5 < vec && vec <= 247.5) return "남서풍"
        else if (247.5 < vec && vec <= 292.5) return "서풍"
        else if (292.5 < vec && vec <= 337.5) return "북서풍"
        else if (337.5 < vec && vec <= 22.5) return "북풍"
      }
      return "풍속"
    }

    const setData = () => {
      cardData.value[1].rate = props.atmosphere.humidity
      cardData.value[0].rate = props.atmosphere.windSpeed
      cardData.value[0].description = setWindDriection(
        props.atmosphere.windDirection
      )
    }

    watch(atmosphere, () => {
      setData()
    })
    setData()

    return { cardData }
  },
})
</script>
<style lang="scss">
.atmosphere-container {
  width: 100%;
  margin-top: 3.875rem;
  margin-bottom: 2.5rem;
  height: 5.25rem;
  justify-content: space-between;

  > div {
    max-width: 47%;
    height: 100%;
    padding: 1.375rem 1.9375rem 1.375rem 2.375rem;
    border-radius: 1.5rem;
    box-shadow: 0 0.3125rem 1.125rem 0 rgba(0, 0, 0, 0.08);
    background-color: rgba(255, 255, 255, 0.2);
    border: solid 0.125rem #ffffff;
    flex: 1;

    .atmosphere-container__img {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 1.875rem;
      img {
        height: 100%;
      }
    }

    .atmosphere-container__description {
      width: calc(100% - 4.375rem);
      justify-content: space-between;
      flex: 1;

      .atmosphere-container__figure {
        font-family: "Oswald";
        font-size: 1.75rem;
        font-weight: bold;
        line-height: 1;
        text-align: left;
        color: #333333;
      }

      .atmosphere-container__description-name {
        font-family: "NanumSquare";
        font-size: 1.375rem;
        font-weight: bold;
        font-style: normal;
        text-align: right;
        color: #797979;

        &:before {
          content: "/";
          width: 0.5rem;
          height: 0.75rem;
          margin: 0.875rem 0.8125rem 0.875rem 0;
          color: #797979;
        }
      }
    }
  }
}
</style>
