<template>
  <div>
    <HeaderVue />
    <Location />
    <NowTemperature />
  </div>
</template>

<script lang="ts">
import { Components } from "@/components"

export default {
  components: {
    HeaderVue: Components.Header,
    Location: Components.Location,
    NowTemperature: Components.CurrentTemperatures,
  },
}
</script>

<style></style>
