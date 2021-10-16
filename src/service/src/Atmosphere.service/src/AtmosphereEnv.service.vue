<template>
  <div>
    <AtmosEnv :data="{ envData, uvData }" />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  components: {
    AtmosEnv: Components.AtmosphereEnv,
  },
  setup() {
    const store = useStore()

    const envData = store.state.environment.out.filter((item) => {
      return item.stationName === store.state.geolocation.location2 || "종로구"
    })
    const uvData = store.state.environment.uvValue

    return { envData, uvData }
  },
})
</script>
<style lang="scss"></style>
