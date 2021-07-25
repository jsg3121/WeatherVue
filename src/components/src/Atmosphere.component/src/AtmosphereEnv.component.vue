<template>
  <div class="atmosphere-env-container">
    <ul class="atmosphere-env-container__list display-flex">
      <li class="atmosphere-env-container__item" v-for="item in 4" :key="item">
        <div class="item-container display-flex">
          <figure class="item-container__img">
            <img src="@/assets/img/uv-icon@2x.png" alt="대기환경 아이콘" />
          </figure>
          <div class="item-container__description display-flex">
            <p class="item-container__name">자외선</p>
            <p class="item-container__status">주의</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="scss">
.atmosphere-env-container {
  width: 100%;
  margin-top: 2.4375rem;

  .atmosphere-env-container__list {
    flex: 1;
    justify-content: space-between;

    .atmosphere-env-container__item {
      width: 8.375rem;
      height: 15.9375rem;
      padding: 2.5625rem 1.6875rem 2.3125rem;
      border-radius: 1.5rem;
      box-shadow: 0 0.3125rem 1.125rem 0 rgba(0, 0, 0, 0.08);
      border: solid 0.125rem #ffffff;
      background-color: rgba(255, 255, 255, 0.2);

      .item-container {
        height: 100%;
        flex: 1;
        justify-content: space-between;
        flex-direction: column;

        .item-container__img {
          width: 5rem;
          height: 5rem;

          img {
            width: 100%;
          }
        }

        .item-container__description {
          max-height: 3.5rem;
          justify-content: space-between;
          flex: 1;
          flex-direction: column;

          .item-container__name {
            width: 5rem;
            height: 1.5625rem;
            font-size: 1.375rem;
            font-weight: normal;
            line-height: 1.3;
            text-align: center;
            color: #797979;
          }

          .item-container__status {
            width: 5rem;
            height: 2rem;
            font-size: 1.75rem;
            font-weight: bold;
            line-height: 1.2;
            letter-spacing: normal;
            text-align: center;
            color: #333333;
          }
        }
      }
    }
  }
}
</style>
