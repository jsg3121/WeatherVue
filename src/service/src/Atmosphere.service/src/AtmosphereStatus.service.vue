<template>
  <AtmosphereStatus :atmosphere="atmosphere()" />
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"
import { defineComponent, onMounted, ref } from "@vue/runtime-core"

export default defineComponent({
  components: {
    AtmosphereStatus: Components.AtmosphereStatus,
  },
  async setup() {
    const {
      state: { currentTemperature },
    } = useStore()
    const data = ref()

    const atmosphere = () => {
      data.value = {
        humidity: currentTemperature.humidity,
        windDirection: currentTemperature.windDirection,
        windSpeed: currentTemperature.windSpeed,
      }
      return data.value
    }

    onMounted(() => {
      atmosphere()
    })

    return { atmosphere }
  },
})
</script>
<style lang="scss"></style>
