<template>
  <div class="loading-container">
    <div class="container-layout">
      {{ ing }}
      <!-- <button @click="$emit('isLoading')">asdfasd</button> -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core"
import { RequestPositionType } from "@/types"
import { getKoreaWeather, loadWeather } from "@/data/src/koreaWeather.data"
import { getOpenWeatherMap } from "@/data/src/openWeather.data"

export default defineComponent({
  setup(_props, { emit }) {
    const ing = ref("0%")
    const data = ref<RequestPositionType>()

    const getData = async () => {
      await new Promise((res: (value: RequestPositionType) => void) => {
        navigator.geolocation.getCurrentPosition((position) => {
          res({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        })
      }).then((res) => {
        data.value = res
        ing.value = "위치를 가져왔어요!"
      })

      await getKoreaWeather(data).then((res) => {
        if (res) {
          ing.value = "이제 날씨 정보를 가져올게요!!"
        }
        return
      })

      await Promise.allSettled([loadWeather(), getOpenWeatherMap()])

      return true
    }

    getData().then(() => {
      ing.value = "모든 정보를 불러왔어요!"

      setTimeout(() => {
        emit("isLoading")
      }, 3000)
    })

    return { ing }
  },
})
</script>
<style lang="ts"></style>
