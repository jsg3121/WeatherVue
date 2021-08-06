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
  onDataList: () => TimeSetDataTypes | undefined
}

type TimeSetDataTypes = {
  date: string
  time: string
  value: string
  valueSKY: string
  valueR06: string
  valuePTY: string
}

export default {
  components: {
    TimeSetWeather: Components.TimeSet,
  },
  async setup(): Promise<SetUpTypes> {
    const store = useStore()
    const timeSetData = ref<TimeSetDataTypes>()

    const onDataList = () => {
      const data = store.state.threeHours
      timeSetData.value = data
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
