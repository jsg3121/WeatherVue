<template>
  <Fragment>
    <Headers />
    <Temperature />
  </Fragment>
</template>

<script lang="ts">
import HeaderTitle from "./TitleLocation.service.vue"
import Temperature from "./Temperatures.service.vue"
import http from "axios"
import { GeoLocationStateType } from "@/store/src/state"
import { Store, useStore } from "@/store"
import {
  GeolocationActionTypes,
  KoreaWeatherActionTypes,
} from "@/store/src/actions"
import { ref, Ref } from "vue"

type LocationType = GeoLocationStateType["location"]

type PositionType = {
  lat: number
  lon: number
}

type SetUpTypes = {
  location: Ref<LocationType | undefined>
  store: Store
  locationName: () => string
  position: () => PositionType | undefined
}

export default {
  components: {
    Headers: HeaderTitle,
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

    const getLocation = async () => {
      if (data.value) {
        await http
          .request({
            url: "https://best-weather.com/geolocation",
            method: "GET",
            params: {
              latitude: data.value.lat,
              longitude: data.value.lon,
            },
          })
          .then((res) => {
            store.dispatch(
              GeolocationActionTypes.GET_LOCATION,
              // #TODO : #1. any타입 변경
              res.data as ReturnType<any>
            )
          })
          .catch((e) => {
            return e
          })
      }
    }
    await getLocation()

    await http
      .request({
        url: " http://localhost:80/api/ko/nowWeather",
        method: "GET",
        params: {
          nx: store.state.location.gridX,
          ny: store.state.location.gridY,
        },
      })
      .then((res) => {
        store.dispatch(KoreaWeatherActionTypes.GET_WEATHER, res.data)
      })

    const locationName = () => {
      return `${store.state.location.depth1} ${store.state.location.depth2} ${store.state.location.depth3}`
    }

    const position = () => {
      return data.value
    }

    return { store, location, locationName, position }
  },
}
</script>
