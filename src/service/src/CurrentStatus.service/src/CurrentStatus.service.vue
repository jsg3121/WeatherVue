<template>
  <Fragment>
    <Headers />
    <Temperature />
    <Atmostphere />
  </Fragment>
</template>

<script lang="ts">
import { Components } from "@/components"
import HeaderTitle from "./TitleLocation.service.vue"
import Temperature from "./Temperatures.service.vue"

export default {
  components: {
    Headers: HeaderTitle,
    Temperature: Temperature,
    Atmostphere: Components.AtmosphereStatus,
  },
}
</script>
