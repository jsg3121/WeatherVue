<template>
  <suspense>
    <template #default>
      <Fragment>
        <Currnet />
        <AtmosStatus />
        <TimeSetWeather />
        <WeeklyWeather />
        <AtmosEnv />
        <FooterVue />
      </Fragment>
    </template>
    <template #fallback> loading.... </template>
  </suspense>
</template>
<script lang="ts">
import { Components } from "@/components"
import { Service } from "@/service"
import { RequestPositionType } from "@/types"
import { defineComponent, ref } from "vue"
import { getKoreaWeather } from "./koreaWeather.data"

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
    await getKoreaWeather(data)

    return {}
  },
})
</script>
<style lang="scss"></style>
