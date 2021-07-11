<template>
  <div>
    <div class="location-title display-flex">
      <figure class="location-title__img">
        <img src="@/assets/img/location-icon@2x.png" alt="icon-location" />
      </figure>
      <h2 class="location-title__text">서울시 강남구 논현동</h2>
    </div>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="scss">
.location-title {
  margin: 3.75rem 1.3125rem 2.5rem 2rem;

  .location-title__img {
    width: 3.75rem;
    height: 3.75rem;
    padding: 0.625rem;
    border-radius: 1.25rem;
    box-shadow: 0px 0.1875rem 0.875rem 0 rgba(24, 61, 94, 0.18);
    background-color: #ffffff;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .location-title__text {
    height: 2.1875rem;
    font-size: 2.25rem;
    font-weight: bold;
    font-style: normal;
    text-align: left;
    color: #04061d;
    margin-left: 1.3125rem;
  }
}
</style>
