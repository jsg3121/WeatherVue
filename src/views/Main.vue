<template>
  <suspense>
    <DataProvider />
    <!-- <template #default>
    </template>
    <template #fallback> loading.... </template> -->
  </suspense>
</template>

<script lang="ts">
import { DataProvider } from "@/data"

export default {
  components: {
    DataProvider,
  },
}
</script>

<style></style>
