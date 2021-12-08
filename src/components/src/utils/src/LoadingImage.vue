import { defineComponent } from "vue";

<template>
  <figure class="lotate-container">
    <img :src="imgLotate" alt="" />
  </figure>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core"
import { NodeRequire } from "@/types"

export default defineComponent({
  setup() {
    const imgLotate = ref<NodeRequire>()
    const index = ref<number>(0)
    imgLotate.value = require("@/assets/img/main-sunny-icon@2x.png")

    setInterval(() => {
      index.value++
      if (index.value % 6 === 1) {
        imgLotate.value = require("@/assets/img/main-snow-icon@2x.png")
      }
      if (index.value % 6 === 2) {
        imgLotate.value = require("@/assets/img/main-fog-icon@2x.png")
      }
      if (index.value % 6 === 3) {
        imgLotate.value = require("@/assets/img/main-cloud-icon@2x.png")
      }
      if (index.value % 6 === 4) {
        imgLotate.value = require("@/assets/img/main-rain-icon@2x.png")
      }
      if (index.value % 6 === 5) {
        imgLotate.value = require("@/assets/img/main-thunder-icon@2x.png")
      }
      if (index.value % 6 === 0) {
        imgLotate.value = require("@/assets/img/main-sunny-icon@2x.png")
      }
    }, 500)
    return { imgLotate }
  },
})
</script>
<style lang="scss">
.lotate-container {
  width: 100%;
  height: 5rem;

  img {
    height: 100%;
    object-fit: contain;
  }
}
</style>
