<template>
  <suspense>
    <template #default>
      <DataProvider />
    </template>
    <template #fallback> loading.... </template>
  </suspense>
</template>

<script lang="ts">
import { DataProvider } from "./src/"

export default {
  components: {
    DataProvider,
  },
}
</script>

<style></style>
