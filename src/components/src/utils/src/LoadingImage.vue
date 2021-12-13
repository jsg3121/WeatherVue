import { defineComponent } from "vue";

<template>
  <figure class="lotate-container">
    <img :src="imgLotate" alt="Loading img" />
  </figure>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core"
import { NodeRequire } from "@/types"

export default defineComponent({
  setup() {
    const imgLotate = ref<NodeRequire>()
    const imageList = ref<Array<NodeRequire>>([
      require("@/assets/img/main-sunny-icon@2x.png"),
      require("@/assets/img/main-snow-icon@2x.png"),
      require("@/assets/img/main-fog-icon@2x.png"),
      require("@/assets/img/main-cloud-icon@2x.png"),
      require("@/assets/img/main-rain-icon@2x.png"),
      require("@/assets/img/main-thunder-icon@2x.png"),
    ])
    const index = ref<number>(0)
    imgLotate.value = require("@/assets/img/main-sunny-icon@2x.png")

    setInterval(() => {
      index.value++
      if (index.value % 6 === 1) {
        imgLotate.value = imageList.value[1]
      }
      if (index.value % 6 === 2) {
        imgLotate.value = imageList.value[2]
      }
      if (index.value % 6 === 3) {
        imgLotate.value = imageList.value[3]
      }
      if (index.value % 6 === 4) {
        imgLotate.value = imageList.value[4]
      }
      if (index.value % 6 === 5) {
        imgLotate.value = imageList.value[5]
      }
      if (index.value % 6 === 0) {
        imgLotate.value = imageList.value[0]
      }
    }, 350)
    return { imgLotate }
  },
})
</script>
<style lang="scss">
.lotate-container {
  width: 100%;
  height: 5rem;
  margin-bottom: 0.5rem;

  img {
    height: 100%;
    object-fit: contain;
  }
}
</style>
