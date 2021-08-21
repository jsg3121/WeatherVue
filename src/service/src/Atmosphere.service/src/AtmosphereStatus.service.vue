<template>
  <AtmosphereStatus :atmosphere="atmosphere()" />
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"
import { onMounted, ref } from "@vue/runtime-core"

export default {
  components: {
    AtmosphereStatus: Components.AtmosphereStatus,
  },
  async setup(): Promise<any> {
    const store = useStore()
    const data = ref()

    const atmosphere = () => {
      const state = store.state.currentTemperature
      data.value = {
        reh: state.reh,
        vec: state.vec,
        wsd: state.wsd,
      }
      return data.value
    }

    onMounted(() => {
      atmosphere()
    })

    return { atmosphere }
  },
}
</script>
<style lang="scss"></style>
