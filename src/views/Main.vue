<template>
  <Loading v-if="!isLoading" @isLoading="loadingFinish" />
  <Suspense v-if="isLoading">
    <template #default>
      <DataProvider />
    </template>
    <template #fallback> </template>
  </Suspense>
</template>

<script lang="ts">
import { DataProvider } from "@/data"
import { defineComponent, ref } from "vue"
import Loading from "./Loading.vue"

export default defineComponent({
  components: {
    DataProvider,
    Loading,
  },
  setup() {
    const isLoading = ref<boolean>(false)
    const loadingFinish = () => {
      isLoading.value = true
    }

    return { loadingFinish, isLoading }
  },
})
</script>

<style></style>
