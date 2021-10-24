<template>
  <div>
    <TitleLocation />
    <Temperature />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TitleLocation from "./TitleLocation.service.vue"
import Temperature from "./Temperatures.service.vue"

export default defineComponent({
  components: {
    TitleLocation: TitleLocation,
    Temperature: Temperature,
  },
  async setup() {
    return {}
  },
})
</script>
