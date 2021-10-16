<template>
  <div>
    <HeaderVue />
    <Location :locationName="locationName()" />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"

type SetUpTypes = {
  locationName: () => string
}

export default {
  components: {
    HeaderVue: Components.Header,
    Location: Components.Location,
  },

  setup(): SetUpTypes {
    const store = useStore()
    const locationName = () => {
      return `${store.state.geolocation.fullLocation}`
    }

    return { locationName }
  },
}
</script>
<style lang="scss"></style>
