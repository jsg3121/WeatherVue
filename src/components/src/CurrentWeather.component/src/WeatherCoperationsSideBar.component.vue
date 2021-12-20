<template>
  <div class="display-flex weather-sideBar">
    <ul class="weather-sideBar__list">
      <li
        class="weather-sideBar__item"
        v-for="items in weatherCoperations"
        :key="items"
        :class="items.selected ? 'selected' : ''"
        @click="emitSelect(items.selectName)"
        @mouseover="items.hover = true"
        @mouseleave="items.hover = false"
      >
        <div class="weather-sideBar__title display-flex">
          <figure class="weather-sideBar__icon">
            <img
              :src="
                items.hover === true || items.selected
                  ? items.selectLogo
                  : items.logo
              "
              alt="기상사 로고 이미지"
            />
          </figure>
          <p class="weather-sideBar__name">{{ items.name }}</p>
        </div>
        <div class="weather-sideBar__description display-flex">
          <figure class="weather-sideBar__currentIcon">
            <img
              :src="
                items.sky
                  ? items.sky
                  : require('@/assets/img/sunny-small-icon@2x.png')
              "
              alt=""
            />
          </figure>
          <p class="weather-sideBar__current-temperature">
            {{ items.temperature }}º
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { PersonalOptionsTypes } from "@/store/src/state"
import { defineComponent, PropType, Ref, ref, toRefs } from "vue"
import { SideBarListType } from "./types"

export type SetUpTypes = {
  weatherCoperations: Ref<SideBarListType[]>
  emitSelect: (name: PersonalOptionsTypes) => void
}

type SideBarListProps = {
  selectWeatherCop: PersonalOptionsTypes
  weather: {
    korea: {
      temperature: number
      sky: string
      pty: string
    }
    openWeather: {
      temperature: number
      sky: string
      pty: string
    }
  }
}

export default defineComponent({
  props: {
    selectCop: {
      type: Object as PropType<SideBarListProps>,
      required: true,
    },
  },
  emits: ["handleSelect"],
  setup(props, { emit }): SetUpTypes {
    const { selectWeatherCop, weather } = toRefs(props.selectCop)

    const getSky = (pty: string, sky: string) => {
      if (sky === "1") {
        return require("@/assets/img/sunny-small-icon@2x.png")
      } else if (sky === "3") {
        return require("@/assets/img/fog-small-icon@2x.png")
      } else if (sky === "4") {
        if (String(pty) !== "0") {
          if (
            String(pty) === "2" ||
            String(pty) === "3" ||
            String(pty) === "6" ||
            String(pty) === "7"
          ) {
            return require("@/assets/img/smow-small-icon@2x.png")
          } else {
            return require("@/assets/img/rain-small-icon@2x.png")
          }
        } else {
          return require("@/assets/img/cloud-small-icon@2x.png")
        }
      }
    }

    const getOpenWeatherSky = (sky: string) => {
      if (sky === "clear sky") {
        return require("@/assets/img/sunny-small-icon@2x.png")
      } else if (sky.indexOf("cloud") >= 0) {
        if (sky.indexOf("few") >= 0) {
          return require("@/assets/img/fog-small-icon@2x.png")
        } else {
          return require("@/assets/img/cloud-small-icon@2x.png")
        }
      } else if (sky.indexOf("rain") >= 0) {
        return require("@/assets/img/rain-small-icon@2x.png")
      } else if (sky.indexOf("snow") >= 0) {
        return require("@/assets/img/smow-small-icon@2x.png")
      } else {
        return require("@/assets/img/cloud-small-icon@2x.png")
      }
    }

    const weatherCoperations = ref<Array<SideBarListType>>([
      {
        index: 1,
        name: "기상청",
        selectName: "korea",
        logo: require("@/assets/img/korea-weather-icon-s@2x.png"),
        selectLogo: require("@/assets/img/korea-weather-icon-n@2x.png"),
        temperature: weather.value.korea.temperature,
        selected: selectWeatherCop.value === "korea" ? true : false,
        sky: getSky(weather.value.korea.pty, weather.value.korea.sky),
        hover: false,
      },
      {
        index: 2,
        name: "오픈웨더",
        selectName: "openWeather",
        logo: require("@/assets/img/open-weather-map-icon-s@2x.png"),
        selectLogo: require("@/assets/img/open-weather-map-icon-n@2x.png"),
        temperature: weather.value.openWeather.temperature,
        selected: selectWeatherCop.value === "openWeather" ? true : false,
        sky: getOpenWeatherSky(weather.value.openWeather.sky),
        hover: false,
      },
      // {
      //   index: 3,
      //   name: "아큐웨더",
      //   selectName: "accu",
      //   logo: require("@/assets/img/accu-weather-icon-n@2x.png"),
      //   selectLogo: require("@/assets/img/accu-weather-icon-s@2x.png"),
      //   selected: selectWeatherCop.value === "accu" ? true : false,
      // },
    ])

    const emitSelect = (name: string) => {
      weatherCoperations.value.map((list) => {
        return list.selectName === name
          ? (list.selected = true)
          : (list.selected = false)
      })
      emit("handleSelect", name)
    }

    return { weatherCoperations, emitSelect }
  },
})
</script>
<style lang="scss">
.weather-sideBar {
  width: 100%;
  flex-direction: column;

  .weather-sideBar__list {
    position: relative;
    height: 19.5rem;
    width: 14rem;

    .weather-sideBar__item {
      width: 14rem;
      height: 9.125rem;
      margin: 0 0 1.25rem 0;
      padding: 1.25rem 1.5625rem 1.5625rem 2.1875rem;
      box-shadow: 0 0.375rem 1.125rem 0 rgba(0, 0, 0, 0.24);
      background-color: rgba(255, 255, 255, 0.08);
      border-bottom-left-radius: 3.125rem;
      border-top-left-radius: 3.125rem;
      right: 0;
      cursor: pointer;
      overflow: hidden;

      &.selected {
        background: linear-gradient(to top, #001d35, #053863);

        .weather-sideBar__name {
          color: #ffffff !important;
        }
        .weather-sideBar__current-temperature {
          color: #ffffff !important;
        }

        &:after {
          display: none;
        }
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, #001d35, #053863);
        transform: translate(-100%, 0%);
        transition: transform 0.3s;
      }

      &:hover {
        &:after {
          top: 0;
          left: 0;
          transform: translate(0, 0);
        }

        .weather-sideBar__name {
          color: #ffffff !important;
          transition: color 0.2s;
        }
        .weather-sideBar__current-temperature {
          color: #ffffff !important;
          transition: color 0.2s;
        }
      }

      &:first-child {
        position: absolute;
        top: 0;
      }

      &:last-child {
        position: absolute;
        bottom: 0;
        margin-bottom: 0;
      }

      .weather-sideBar__title {
        justify-content: space-around;
        position: relative;
        z-index: 100;

        .weather-sideBar__icon {
          width: 1.875rem;
          height: 1.875rem;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .weather-sideBar__name {
          font-size: 1.5rem;
          font-weight: normal;
          text-align: left;
          color: #757575;
        }
      }

      .weather-sideBar__description {
        width: 100%;
        height: calc(100% - 3.1875rem);
        margin-top: 1.3125rem;
        justify-content: flex-start;
        position: relative;
        z-index: 100;

        .weather-sideBar__currentIcon {
          width: 3.125rem;
          height: 3.125rem;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .weather-sideBar__current-temperature {
          font-family: "Oswald";
          font-size: 3rem;
          font-weight: 500;
          text-align: center;
          color: #555555;
          margin-left: 2.25rem;
        }
      }

      @media screen and (max-width: 640px) {
        margin-left: 0;
      }

      // &:hover {
      //   padding: 1.5rem 1.8125rem 1.8125rem 2.4375rem;
      //   width: 14.5rem;
      //   height: 9.625rem;
      //   display: block;
      //   background: linear-gradient(to top, #001d35, #053863);
      //   position: relative;
      //   transition: all 0.3s;

      //   &:first-child {
      //     margin: -0.25rem -2.5rem 1rem 2rem;
      //   }

      //   &:last-child {
      //     margin: -0.25rem -2.5rem -0.25rem 2rem;
      //   }
      // }
    }
  }
}
</style>
