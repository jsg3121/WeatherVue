<template>
  <div>
    <TitleLocation />
    <Temperature />
  </div>
</template>

<script lang="ts">
import TitleLocation from "./TitleLocation.service.vue"
import Temperature from "./Temperatures.service.vue"
import { Store, useStore } from "@/store"
import { Ref, ref } from "vue"
import { getLocation, getTemperature, getThreeHours } from "./getWeather"
import { LocationType, PositionType } from "./types"

type SetUpTypes = {
  location: Ref<LocationType | undefined>
  store: Store
}

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
    await getThreeHours()

    return { store, location }
  },
}
</script>
