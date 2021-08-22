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

type DataTypesProps = {
  date: string
  time: string
  value: string
  valueSKY: string
  valuePTY: string
}

type TimeSetDataTypes = {
  threeHours: DataTypesProps
  r06: Pick<DataTypesProps, "date" | "time" | "value">
  s06: Pick<DataTypesProps, "date" | "time" | "value">
}

type SetUpTypes = {
  onDataList: () => TimeSetDataTypes | undefined
}

export default {
  components: {
    TimeSetWeather: Components.TimeSet,
  },
  async setup(): Promise<SetUpTypes> {
    const store = useStore()
    const timeSetData = ref<TimeSetDataTypes>()

    // await getThreeHours()
    const onDataList = () => {
      const data = {
        threeHours: store.state.threeHours,
        r06: store.state.r06,
        s06: store.state.s06,
      }
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
