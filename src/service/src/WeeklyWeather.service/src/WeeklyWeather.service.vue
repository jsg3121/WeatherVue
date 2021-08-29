<template>
  <div>
    <WeeklyWeather :setWeekly="{ weekly, weeklyTwoDays }" />
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
  setup() {
    const {
      state: { weekly, weeklyTwoDays },
    } = useStore()

    return { weekly, weeklyTwoDays }
  },
})
</script>
<style lang="scss"></style>
