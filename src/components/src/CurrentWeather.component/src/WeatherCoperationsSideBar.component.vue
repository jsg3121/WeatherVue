<template>
  <div class="display-flex weather-sideBar">
    <ul class="weather-sideBar__list">
      <li
        class="weather-sideBar__item"
        v-for="items in data.weatherCoperations"
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
          <p class="weather-sideBar__current-temperature">99º</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { reactive, Ref, ref } from "vue"
import { NodeRequire } from "@/types"

type SideBarListType = {
  index: number
  name: string
  logo: NodeRequire
  selectLogo: NodeRequire
}

type ReturnFuncSetupType = {
  data: ReturnType<typeof reactive>
}

export default {
  setup(): ReturnFuncSetupType {
    const weatherCoperations: Ref<SideBarListType[]> = ref([
      {
        index: 1,
        name: "기상청",
        logo: require("@/assets/img/korea-weather-icon-s@2x.png"),
        selectLogo: require("@/assets/img/korea-weather-icon-n@2x.png"),
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

    const data: ReturnType<typeof reactive> = reactive({
      weatherCoperations,
    })

    return { data }
  },
}
</script>
<style lang="scss">
.weather-sideBar {
  width: calc(100% - 29rem);
  flex-direction: column;

  .weather-sideBar__list {
    .weather-sideBar__item {
      width: 224px;
      height: 146px;
      margin: 0 0 20px 40px;
      padding: 20px 25px 25px 35px;
      box-shadow: 0px 6px 18px 0 rgba(0, 0, 0, 0.24);
      background-color: #ffffff;
      border-bottom-left-radius: 50px;
      border-top-left-radius: 50px;

      &:last-child {
        margin-bottom: 0;
      }

      .weather-sideBar__title {
        justify-content: space-around;

        .weather-sideBar__icon {
          width: 30px;
          height: 30px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .weather-sideBar__name {
          font-size: 24px;
          font-weight: normal;
          text-align: left;
          color: #757575;
        }
      }

      .weather-sideBar__description {
        width: 100%;
        height: calc(100% - 51px);
        margin-top: 21px;
        justify-content: flex-start;

        .weather-sideBar__currentIcon {
          width: 50px;
          height: 50px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .weather-sideBar__current-temperature {
          font-family: "Oswald";
          font-size: 48px;
          font-weight: 500;
          text-align: center;
          color: #555555;
          margin-left: 36px;
        }
      }
    }
  }
}
</style>
