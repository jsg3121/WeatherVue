<template>
  <div>
    <WeeklyWeather :setWeekly="weeklyTemperature" />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"
import { defineComponent } from "vue"

export default defineComponent({
  components: {
    WeeklyWeather: Components.WeeklyWeather,
  },
  async setup() {
    const {
      state: {
        korea: { weeklyTemperature },
      },
    } = useStore()

    return { weeklyTemperature }
  },
})
</script>
<style lang="scss"></style>
