<template>
  <div>
    <div v-if="location === undefined">loading...!!!</div>
    <div v-else>
      {{ store.state.location }}
    </div>

    <HeaderVue />
    <Location />
    <div class="current-temperature-container display-flex">
      <NowTemperature />
      <WeatherCopSideBar />
    </div>
    <Atmostphere />
  </div>
</template>

<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"
import http from "axios"
import { GeolocationActionTypes } from "@/store/src/actions"
import { ref } from "@vue/runtime-core"

export default {
  components: {
    HeaderVue: Components.Header,
    Location: Components.Location,
    NowTemperature: Components.CurrentTemperatures,
    WeatherCopSideBar: Components.WeatherCoperations,
    Atmostphere: Components.AtmosphereStatus,
  },

  async setup(): Promise<any> {
    const store = useStore()
    const location = ref()

    navigator.geolocation.getCurrentPosition(async function (position) {
      const data = await http
        .request({
          url: "https://best-weather.com/geolocation",
          method: "GET",
          params: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        })
        .then((res) => {
          return res.data
        })
        .catch(() => {
          return
        })
      location.value = await data
      console.log(location.value)

      await store.dispatch(GeolocationActionTypes.GET_LOCATION, data)
    })
    return { store, location }
  },
}
</script>

<style lang="scss">
.current-temperature-container {
  justify-content: space-between;
}
</style>
