<template>
  <div>
    <AtmosEnv :data="{ dust, uv }" />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"
import { AtmosDust } from "@/store/src/state"
import { defineComponent } from "@vue/runtime-core"

type SetUpTypes = {
  dust: AtmosDust
  uv: string
}

export default defineComponent({
  components: {
    AtmosEnv: Components.AtmosphereEnv,
  },
  async setup(): Promise<SetUpTypes> {
    const {
      state: {
        korea: { atmos },
      },
    } = useStore()
    const dust = atmos.dust[0]
    const uv = atmos.uv

    return { dust, uv }
  },
})
</script>
<style lang="scss"></style>
