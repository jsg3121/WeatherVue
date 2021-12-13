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
import { defineComponent } from "vue"

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
    return {}
  },
})
</script>
<style lang="scss"></style>
