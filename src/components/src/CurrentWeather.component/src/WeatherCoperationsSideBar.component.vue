<template>
  <div class="display-flex weather-sideBar">
    <ul class="weather-sidebar__list">
      <li
        class="weather-sidebar__item"
        v-for="items in data.WeatherCoperations"
        :key="items"
      >
        <div class="weather-sidebar__title">
          <figure class="weather-sidebar__icon">
            <img :src="items.logo" alt="" />
          </figure>
          <p class="weather-sidebar__title"></p>
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
  weatherCoperations: Ref<SideBarListType[]>
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

    const data = reactive({
      weatherCoperations,
    })

    return { weatherCoperations, data }
  },
}
</script>
<style lang="scss"></style>
