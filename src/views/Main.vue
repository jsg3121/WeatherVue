<template>
  <div>
    <Currnet />
    <TimeSetWeather />
    <WeeklyWeather />
  </div>
</template>

<script lang="ts">
import { Service } from "@/service"

export default {
  components: {
    Currnet: Service.Temperatures,
    TimeSetWeather: Service.TimeSetWeather,
    WeeklyWeather: Service.WeeklyWeather,
  },
}
</script>

<style></style>
