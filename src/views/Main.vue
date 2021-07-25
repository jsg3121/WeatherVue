<template>
  <div>
    <Currnet />
    <TimeSetWeather />
    <WeeklyWeather />
    <AtmosEnv />
    <FooterVue />
  </div>
</template>

<script lang="ts">
import { Service } from "@/service"
import { Components } from "@/components"

export default {
  components: {
    Currnet: Service.Temperatures,
    TimeSetWeather: Service.TimeSetWeather,
    WeeklyWeather: Service.WeeklyWeather,
    AtmosEnv: Service.AtmosphereEnv,
    FooterVue: Components.Footer,
  },
}
</script>

<style></style>
