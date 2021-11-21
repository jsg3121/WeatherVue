<template>
  <div class="current-info__additional-information">
    <div class="current-info__maxAndmin-temperature display-flex">
      <p class="current-info__min-temperature">
        {{ Math.round(temperature.minTemp) }}º
      </p>
      <span class="current-info__separator"></span>
      <p class="current-info__max-temperature">
        {{ Math.round(temperature.maxTemp) }}º
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, toRefs, watch } from "vue"

type MinMaxProps = {
  minTemp: number
  maxTemp: number
}

type SetUpTypes = {
  temperature: MinMaxProps
}

export default defineComponent({
  props: {
    minMax: {
      type: Object as PropType<MinMaxProps>,
      required: true,
    },
    selectCop: {
      type: String,
      required: true,
    },
  },
  setup(props): SetUpTypes {
    const { selectCop: weatherCop, minMax } = toRefs(props)
    const temperature = reactive<MinMaxProps>({
      minTemp: minMax.value.minTemp,
      maxTemp: minMax.value.maxTemp,
    })

    watch(weatherCop, () => {
      temperature.minTemp = minMax.value.minTemp
      temperature.maxTemp = minMax.value.maxTemp
    })
    return { temperature }
  },
})
</script>
<style lang="scss">
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
</style>
