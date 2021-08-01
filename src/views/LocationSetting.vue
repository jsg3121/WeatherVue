<template>
  <div>
    <h1>위치 정보를 허용하거나 알아보고 싶은 지역을 입력해 주세요</h1>
    <button @click="getLocation">완료</button>
  </div>
</template>
<script lang="ts">
import router from "@/router"
import { GeolocationActionTypes } from "@/store/src/actions"
import http from "axios"
import { Store, useStore } from "@/store"
import { GeoLocationStateType } from "@/store/src/state"
import { reactive, ref, Ref } from "vue"

type LocationType = GeoLocationStateType["location"]

type SetUpTypes = {
  location: Ref<LocationType | undefined>
  store: Store
  locationName: () => string
}

export default {
  setup() {
    const store = useStore()
    const data = ref()
    new Promise((res, _) => {
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
      console.log(data.value)
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
      router.push({ path: "/main" })
    }
    return { getLocation }
  },
}
</script>
<style lang="scss"></style>
