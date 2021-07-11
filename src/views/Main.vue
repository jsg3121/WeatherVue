<template>
  <div>
    <Currnet />
  </div>
</template>

<script lang="ts">
import { Service } from "@/service"

export default {
  components: {
    Currnet: Service.Temperatures,
  },
}
</script>

<style></style>
