<template>
  <div>
    <suspense>
      <template #default>
        <Currnet />
      </template>
      <template #fallback>
        <h1>loading</h1>
      </template>
    </suspense>
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
