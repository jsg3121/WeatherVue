<template>
  <div>
    <TimeSetWeather :onDataList="onDataList()" />
  </div>
</template>
<script lang="ts">
import { Components } from "@/components"
import { ref } from "@vue/runtime-core"
import { useStore } from "@/store"
import { onMounted } from "vue"

type SetUpTypes = {
  onDataList: () => TimeSetDataTypes[] | undefined
}

type TimeSetDataTypes = {
  date: string
  time: string
  value: string
}

export default {
  components: {
    TimeSetWeather: Components.TimeSet,
  },
  async setup(): Promise<SetUpTypes> {
    const store = useStore()
    const timeSetData = ref<TimeSetDataTypes[]>()

    const onDataList = () => {
      timeSetData.value = store.state.threeHours
      return timeSetData.value
    }

    onMounted(() => {
      onDataList()
    })

    return { onDataList }
  },
}
</script>
<style lang="scss"></style>
