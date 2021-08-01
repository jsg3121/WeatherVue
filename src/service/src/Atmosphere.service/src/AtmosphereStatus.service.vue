<template>
  <Fragment>
    <AtmosphereStatus :atmosphere="atmosphere()" />
  </Fragment>
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"
import { ref } from "@vue/runtime-core"

export default {
  components: {
    AtmosphereStatus: Components.AtmosphereStatus,
  },
  async setup(): Promise<any> {
    const store = useStore()
    const data = ref()

    const state = store.state.currentTemperature
    data.value = {
      reh: state.reh,
      vec: state.vec,
      wsd: state.wsd,
    }

    console.log(data.value)

    const atmosphere = () => {
      return data.value
    }
    return { atmosphere }
  },
}
</script>
<style lang="scss"></style>
