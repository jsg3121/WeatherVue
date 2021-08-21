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
      return `${store.state.location.depth1} ${store.state.location.depth2} ${store.state.location.depth3}`
    }

    return { locationName }
  },
}
</script>
<style lang="scss"></style>
