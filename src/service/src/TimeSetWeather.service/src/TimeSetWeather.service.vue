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
import { HourlyTypes } from "@/store/src/state"

type TimeSetDataTypes = {
  hourlyTemperature: Pick<HourlyTypes, "temperature" | "precipitation" | "sky">
}

type SetUpTypes = {
  onDataList: () => TimeSetDataTypes | undefined
}

export default {
  components: {
    TimeSetWeather: Components.TimeSet,
  },
  async setup(): Promise<SetUpTypes> {
    const {
      state: {
        korea: { hourlyTemperature },
      },
    } = useStore()
    const timeSetData = ref<TimeSetDataTypes>()

    const onDataList = () => {
      const data = {
        hourlyTemperature: hourlyTemperature,
      } as unknown
      timeSetData.value = data as TimeSetDataTypes
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
