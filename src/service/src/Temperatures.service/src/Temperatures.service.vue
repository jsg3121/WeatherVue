<template>
  <div>
    <HeaderVue />
    <Location :locationName="locationName()" />
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
import { Ref, ref } from "@vue/runtime-core"
import { GeoLocationStateType } from "@/store/src/state"
import { Store } from "@/store"

type LocationType = GeoLocationStateType["location"]

type SetUpTypes = {
  location: Ref<LocationType | undefined>
  store: Store
  locationName: () => string
}

export default {
  components: {
    HeaderVue: Components.Header,
    Location: Components.Location,
    NowTemperature: Components.CurrentTemperatures,
    WeatherCopSideBar: Components.WeatherCoperations,
    Atmostphere: Components.AtmosphereStatus,
  },

  async setup(): Promise<SetUpTypes> {
    const store = useStore()
    const location = ref<LocationType>()

    navigator.geolocation.getCurrentPosition(async (position) => {
      const data: Promise<LocationType> = await http
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
        .catch((e) => {
          return e
        })
      location.value = await data

      await store.dispatch(
        GeolocationActionTypes.GET_LOCATION,
        data as ReturnType<any>
      )
    })

    const locationName = () => {
      return `${store.state.location.depth1} ${store.state.location.depth2} ${store.state.location.depth3}`
    }
    return { store, location, locationName }
  },
}
</script>

<style lang="scss">
.current-temperature-container {
  justify-content: space-between;
}
</style>
