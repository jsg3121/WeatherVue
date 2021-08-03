<template>
  <div>
    <TimeSetWeather />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { getTimeSetWeather } from "./getTimeSetWeather"
import { onMounted } from "@vue/runtime-core"

export default {
  components: {
    TimeSetWeather: Components.TimeSet,
  },
  async setup() {
    onMounted(() => {
      getTimeSetWeather()
    })
    return {}
  },
}
</script>
<style lang="scss"></style>
