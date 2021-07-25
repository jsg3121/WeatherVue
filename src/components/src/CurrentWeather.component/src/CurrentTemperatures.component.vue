<template>
  <div class="current-info">
    <figure class="current-info__img">
      <img src="@/assets/img/main-sunny-icon@2x.png" alt="기상 아이콘" />
    </figure>
    <div class="current-info__description display-flex">
      <div class="current-info__current-status">
        <h3 class="current-info__now-temperatures">99º</h3>
        <h4 class="current-info__now-status">맑음</h4>
      </div>
      <div class="current-info__additional-information">
        <div class="current-info__maxAndmin-temperature display-flex">
          <p class="current-info__min-temperature">99º</p>
          <span class="current-info__separator"></span>
          <p class="current-info__max-temperature">99º</p>
        </div>
        <div class="current-info__diff-yesterday">
          <p>어제보다 99º높음</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="scss">
.current-info {
  width: 26.5rem;
  .current-info__img {
    width: 26.5rem;
    height: 17.625rem;
    margin-bottom: 3.25rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .current-info__description {
    justify-content: space-evenly;

    > div {
      width: 50%;
    }

    .current-info__current-status {
      .current-info__now-temperatures {
        font-family: "Oswald";
        font-size: 6.25rem;
        font-weight: 500;
        letter-spacing: normal;
        text-align: center;
        color: #1f1f1f;
        height: 5.125rem;
        line-height: 0.8;
        margin-bottom: 1.6875rem;
      }

      .current-info__now-status {
        font-size: 2.25rem;
        font-weight: 700;
        line-height: 1.17;
        letter-spacing: normal;
        text-align: center;
        color: #333333;
        height: 2.5625rem;
      }
    }

    .current-info__additional-information {
      .current-info__maxAndmin-temperature {
        width: 8.75rem;
        height: 2.75rem;
        margin: 0 auto 1.6875rem;
        border-radius: 1.25rem;
        box-shadow: 0 0.375rem 0.75rem 0 rgba(0, 0, 0, 0.08);
        background-color: #ffffff;
        justify-content: center;

        .current-info__min-temperature {
          font-family: "Oswald";
          font-size: 1.625rem;
          font-weight: normal;
          color: #2a62c9;
        }

        .current-info__max-temperature {
          font-family: "Oswald";
          font-size: 1.625rem;
          font-weight: normal;
          color: #ff4848;
        }

        .current-info__separator {
          width: 0.125rem;
          height: 1.25rem;
          margin: 0.625rem;
          background-color: #e1e1e1;
        }
      }

      .current-info__diff-yesterday {
        p {
          width: 6.5625rem;
          font-size: 1.75rem;
          font-weight: normal;
          line-height: 1.21;
          text-align: center;
          color: #555555;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
