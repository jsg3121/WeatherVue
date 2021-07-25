<template>
  <div class="atmosphere-container display-flex">
    <div class="atmosphere-container__wind-direction display-flex">
      <figure class="atmosphere-container__img">
        <img src="@/assets/img/windy-icon@2x.png" alt="풍향 아이콘" />
      </figure>
      <div class="atmosphere-container__description display-flex">
        <p class="atmosphere-container__figure">3 m/s</p>
        <p class="atmosphere-container__description-name">북서풍</p>
      </div>
    </div>
    <div class="atmosphere-container__humidity display-flex">
      <figure class="atmosphere-container__img">
        <img src="@/assets/img/rain-drop-icon@2x.png" alt="습도 아이콘" />
      </figure>
      <div class="atmosphere-container__description display-flex">
        <p class="atmosphere-container__figure">17%</p>
        <p class="atmosphere-container__description-name">습도</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="scss">
.atmosphere-container {
  width: 100%;
  margin-top: 3.875rem;
  height: 84px;
  justify-content: space-between;
}
</style>
