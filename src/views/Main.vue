<template>
  <Fragment>
    <suspense>
      <template #default>
        <Fragment>
          <Currnet />
          <AtmosStatus />
        </Fragment>
      </template>
      <template #fallback>
        <h1>loading</h1>
      </template>
    </suspense>
    <TimeSetWeather />
    <WeeklyWeather />
    <AtmosEnv />
    <FooterVue />
  </Fragment>
</template>

<script lang="ts">
import { Service } from "@/service"
import { Components } from "@/components"

export default {
  components: {
    Currnet: Service.CurrentStatus,
    TimeSetWeather: Service.TimeSetWeather,
    WeeklyWeather: Service.WeeklyWeather,
    AtmosEnv: Service.AtmosphereEnv,
    AtmosStatus: Service.AtmosphereStatus,
    FooterVue: Components.Footer,
  },
}
</script>

<style></style>
