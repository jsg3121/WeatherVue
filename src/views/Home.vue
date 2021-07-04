<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div> -->
  <div>
    <h1>TEST</h1>
    <h1>{{ this.location }}</h1>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue"
import http from "axios"

type DataType = {
  location: string
}

export default {
  data(): DataType {
    return {
      location: "서울 특별시 강남구",
    }
  },
  setup(): void {
    console.log("created!!!")
    const getGeolocation = async (position: any) => {
      http
        .request({
          url: "http://localhost:3306/geolocation",
          method: "GET",
          params: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        })
        .then((res) => {
          console.log(res)
        })
    }
    const defaultGeolocation = () => {
      console.log(123)
      console.log(456)
    }

    navigator.geolocation.getCurrentPosition(getGeolocation, defaultGeolocation)

    onMounted(() => {
      http
        .get("http://3.35.230.196:8989/api/ko/nowWeather")
        .then((res: unknown) => {
          return res
        })
    })
  },
}
</script>
