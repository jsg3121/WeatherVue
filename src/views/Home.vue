<template>
  <div>
    <h1>TEST</h1>
    <h1>{{ this.store.state.location }}</h1>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue"
import http from "axios"
import { Store, useStore } from "vuex"

type ReturnFuncSetup = {
  store: Store<any>
}

export default {
  setup(): ReturnFuncSetup | void {
    const store = useStore()
    const getGeolocation = async (position: any) => {
      await http
        .request({
          url: "http://localhost:3306/geolocation",
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
    }
    const defaultGeolocation = async () => {
      await http
        .request({
          url: "http://localhost:3306/geolocation",
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
    }

    navigator.geolocation.getCurrentPosition(getGeolocation, defaultGeolocation)

    onMounted(() => {
      http
        .get("http://3.35.230.196:8989/api/ko/nowWeather")
        .then((res: unknown) => {
          return res
        })
    })
    return {
      store,
    }
  },
}
</script>
