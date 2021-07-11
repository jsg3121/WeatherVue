<template>
  <div>
    <div class="current-info">
      <!-- <figure class="current-info__img">
        {{ weatherStatus }}
      </figure> -->
      <Sunny />

      <div class="current-info__description display-flex">
        <div class="current-info__current-status">
          <h3 class="current-info__now-temperatures">12º</h3>
          <h4 class="current-info__now-status">맑음</h4>
        </div>
        <div class="current-info__additional-information">
          <div class="current-info__maxAndmin-temperature divplay-flex">
            <p class="current-info__min-temperature">4º</p>
            <span class="current-info__separator"></span>
            <p class="current-info__max-temperature">19º</p>
          </div>
          <div class="current-info__diff-yesterday">
            <p>어제보다 99º높음</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
//#TODO : svg파일 import error
import Sunny from "@/assets/img/main-sunny-icon.svg"
export default {
  components: {
    Sunny,
  },
}
</script>
<style lang="scss"></style>
