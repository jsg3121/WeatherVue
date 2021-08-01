<template>
  <Fragment>
    <AtmosphereStatus />
  </Fragment>
</template>
<script lang="ts">
import { Components } from "@/components"
import { ref } from "@vue/reactivity"
export default {
  components: {
    AtmosphereStatus: Components.AtmosphereStatus,
  },
  setup() {
    const atmosphere = ref()

    return { atmosphere }
  },
}
</script>
<style lang="scss"></style>
