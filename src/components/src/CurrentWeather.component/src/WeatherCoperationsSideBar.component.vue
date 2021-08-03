<template>
  <div class="display-flex weather-sideBar">
    <ul class="weather-sideBar__list">
      <li
        class="weather-sideBar__item"
        v-for="items in weatherCoperations"
        :key="items"
      >
        <div class="weather-sideBar__title display-flex">
          <figure class="weather-sideBar__icon">
            <img :src="items.logo" alt="기상사 로고 이미지" />
          </figure>
          <p class="weather-sideBar__name">{{ items.name }}</p>
        </div>
        <div class="weather-sideBar__description display-flex">
          <figure class="weather-sideBar__currentIcon">
            <img src="@/assets/img/sunny-small-icon@2x.png" alt="" />
          </figure>
          <p class="weather-sideBar__current-temperature">
            {{
              items.temperature
                ? Math.round(parseInt(items.temperature, 10))
                : 99
            }}º
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Ref, ref } from "vue"
import { NodeRequire } from "@/types"
import { useStore } from "@/store"

type SideBarListType = {
  index: number
  name: string
  logo: NodeRequire
  selectLogo: NodeRequire
}

type ReturnFuncSetupType = {
  weatherCoperations: Ref<SideBarListType[]>
}

export default {
  setup(): ReturnFuncSetupType {
    const store = useStore()

    const weatherCoperations = ref([
      {
        index: 1,
        name: "기상청",
        logo: require("@/assets/img/korea-weather-icon-s@2x.png"),
        selectLogo: require("@/assets/img/korea-weather-icon-n@2x.png"),
        temperature: store.state.currentTemperature.t1h,
      },
      {
        index: 2,
        name: "오픈웨더",
        logo: require("@/assets/img/open-weather-map-icon-s@2x.png"),
        selectLogo: require("@/assets/img/open-weather-map-icon-n@2x.png"),
      },
      {
        index: 3,
        name: "아큐웨더",
        logo: require("@/assets/img/accu-weather-icon-n@2x.png"),
        selectLogo: require("@/assets/img/accu-weather-icon-s@2x.png"),
      },
    ])

    // const data: ReturnType<typeof reactive> = reactive({
    //   weatherCoperations,
    // })

    return { weatherCoperations }
  },
}
</script>
<style lang="scss">
.weather-sideBar {
  width: calc(100% - 29rem);
  flex-direction: column;

  .weather-sideBar__list {
    .weather-sideBar__item {
      width: 14rem;
      height: 9.125rem;
      margin: 0 0 1.25rem 2.5rem;
      padding: 1.25rem 1.5625rem 1.5625rem 2.1875rem;
      box-shadow: 0 0.375rem 1.125rem 0 rgba(0, 0, 0, 0.24);
      background-color: rgba(255, 255, 255, 0.08);
      border-bottom-left-radius: 3.125rem;
      border-top-left-radius: 3.125rem;

      &:last-child {
        margin-bottom: 0;
      }

      .weather-sideBar__title {
        justify-content: space-around;

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
    }
  }
}
</style>
