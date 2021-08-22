<template>
  <div>
    <WeeklyWeather :setWeekly="weekly" />
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
      state: { weekly },
    } = useStore()

    return { weekly }
  },
})
</script>
<style lang="scss"></style>
