<template>
  <Fragment>
    <Currnet />
    <AtmosStatus />
    <TimeSetWeather />
    <WeeklyWeather />
    <AtmosEnv />
    <FooterVue />
  </Fragment>
</template>
<script lang="ts">
import { Components } from "@/components"
import { Service } from "@/service"
import { RequestPositionType } from "@/types"
import { defineComponent, ref } from "vue"
import { getKoreaWeather, loadWeather } from "./koreaWeather.data"
import { getOpenWeatherMap } from "./openWeather.data"

export default defineComponent({
  components: {
    Currnet: Service.CurrentStatus,
    TimeSetWeather: Service.TimeSetWeather,
    WeeklyWeather: Service.WeeklyWeather,
    AtmosEnv: Service.AtmosphereEnv,
    AtmosStatus: Service.AtmosphereStatus,
    FooterVue: Components.Footer,
  },
  async setup() {
    const data = ref<RequestPositionType>()

    await new Promise((res: (value: RequestPositionType) => void) => {
      navigator.geolocation.getCurrentPosition((position) => {
        res({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      })
    }).then((res) => {
      data.value = res
    })
    // await getKoreaWeather(data)
    // await loadWeather()
    // getOpenWeatherMap()
    await Promise.all([
      getKoreaWeather(data),
      loadWeather(),
      getOpenWeatherMap(),
    ])

    return {}
  },
})
</script>
<style lang="scss"></style>
