<template>
  <Fragment>
    <TitleLocation />
    <Temperature />
  </Fragment>
</template>

<script lang="ts">
import TitleLocation from "./TitleLocation.service.vue"
import Temperature from "./Temperatures.service.vue"
import { useStore } from "@/store"
import { ref } from "vue"
import { getLocation, getTemperature } from "./getWeather"
import { LocationType, PositionType, SetUpTypes } from "./types"

export default {
  components: {
    TitleLocation: TitleLocation,
    Temperature: Temperature,
  },
  async setup(): Promise<SetUpTypes> {
    const store = useStore()
    const location = ref<LocationType>()
    const data = ref<PositionType>()

    await new Promise((res: (value: PositionType) => void) => {
      navigator.geolocation.getCurrentPosition((position) => {
        res({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      })
    }).then((res) => {
      data.value = res
    })

    await getLocation(data)
    await getTemperature()

    const locationName = () => {
      return `${store.state.location.depth1} ${store.state.location.depth2} ${store.state.location.depth3}`
    }

    return { store, location, locationName }
  },
}
</script>
