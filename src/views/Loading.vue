<template>
  <div class="loading-container">
    <div class="container-layout">
      <LoadingImage />
      <p>
        {{ ing }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core"
import { RequestPositionType } from "@/types"
import { getKoreaWeather, loadWeather } from "@/data/src/koreaWeather.data"
import { getOpenWeatherMap } from "@/data/src/openWeather.data"
import { Components } from "@/components"

export default defineComponent({
  components: {
    LoadingImage: Components.LoadingImage,
  },
  setup(_props, { emit }) {
    const ing = ref("0%")
    const data = ref<RequestPositionType>()

    const getData = async () => {
      await new Promise((res: (value: RequestPositionType) => void) => {
        navigator.geolocation.getCurrentPosition((position) => {
          res({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        })
      }).then((res) => {
        data.value = res
        ing.value = "위치를 가져왔어요!"
      })

      await getKoreaWeather(data).then((res) => {
        if (res) {
          ing.value = "날씨 정보를 가져오는 중입니다"
        }
        return
      })

      await Promise.allSettled([loadWeather(), getOpenWeatherMap()])

      return true
    }

    getData().then(() => {
      ing.value = "완료되었습니다!"
      setTimeout(() => {
        emit("isLoading")
      }, 1500)
    })

    return { ing }
  },
})
</script>
<style lang="scss">
.loading-container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  .container-layout {
    width: 15rem;
    height: 7rem;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    p {
      width: 100%;
      text-align: center;
      font-weight: 700;
      color: #04061d;

      &.alert {
        margin-top: 0.5rem;
        font-size: 0.825rem;
        font-weight: 300;
        color: #ff4a4a;
      }
    }
  }
}
</style>
