<template>
  <div>
    <WeeklyWeather />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { useStore } from "@/store"
import { onMounted } from "@vue/runtime-core"
import { defineComponent } from "vue"

export default defineComponent({
  components: {
    WeeklyWeather: Components.WeeklyWeather,
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      console.log(store.state.location)
    })

    return
  },
})
</script>
<style lang="scss"></style>
