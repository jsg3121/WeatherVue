<template>
  <div>
    <WeeklyWeather />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { getWeeklyGetData } from "./WeeklyWeather.service"
import { useStore } from "@/store"

export default {
  components: {
    WeeklyWeather: Components.WeeklyWeather,
  },
  setup() {
    const store = useStore()

    console.log(store.state.location)

    return
  },
}
</script>
<style lang="scss"></style>
