<template>
  <div>
    <HeaderVue />
    <Location />
    <div class="display-flex">
      <NowTemperature />
      <WeatherCopSideBar />
    </div>
    <Atmostphere />
  </div>
</template>

<script lang="ts">
import { Components } from "@/components"
import http from "axios"
import { useStore } from "vuex"

export default {
  components: {
    HeaderVue: Components.Header,
    Location: Components.Location,
    NowTemperature: Components.CurrentTemperatures,
    WeatherCopSideBar: Components.WeatherCoperations,
    Atmostphere: Components.AtmosphereStatus,
  },

  setup() {
    const store = useStore()

    const getGeolocation = async (position: any) => {
      await http
        .request({
          url: "https://best-weather.com/geolocation",
          method: "GET",
          params: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        })
        .then((res) => {
          console.log(res.data)
          store.dispatch("getLocation", { params: res.data })
        })
        .catch(() => {
          return
        })
    }
    const defaultGeolocation = async () => {
      await http
        .request({
          url: "https://best-weather.com/geolocation",
          method: "GET",
          params: {
            latitude: 37.514575,
            longitude: 127.04955555555556,
          },
        })
        .then((res) => {
          console.log(res.data)
          store.dispatch("getLocation", { params: res.data })
        })
        .catch(() => {
          return
        })
    }

    navigator.geolocation.getCurrentPosition(getGeolocation, defaultGeolocation)

    return { store }
  },
}
</script>

<style></style>
