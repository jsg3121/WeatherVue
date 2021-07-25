<template>
  <div>
    <Currnet />
    <TimeSetWeather />
    <WeeklyWeather />
    <AtmosEnv />
  </div>
</template>

<script lang="ts">
import { Service } from "@/service"

export default {
  components: {
    Currnet: Service.Temperatures,
    TimeSetWeather: Service.TimeSetWeather,
    WeeklyWeather: Service.WeeklyWeather,
    AtmosEnv: Service.AtmosphereEnv,
  },
}
</script>

<style></style>
