<template>
  <suspense>
    <template #default>
      <DataProvider />
    </template>
    <template #fallback> loading.... </template>
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
