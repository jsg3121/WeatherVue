<template>
  <div>
    <AtmosEnv :data="{ envData, uvData }" />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"

export default {
  components: {
    AtmosEnv: Components.AtmosphereEnv,
  },
  setup() {
    const store = useStore()

    const envData = store.state.environment.out.filter((item) => {
      return item.stationName === store.state.location.depth2 || "종로구"
    })
    const uvData = store.state.environment.uvValue

    return { envData, uvData }
  },
}
</script>
<style lang="scss"></style>
