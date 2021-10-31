import { current, hourly, weekly, atmosDust, atmosUv } from "./stateList"

export const KoreaWeatherState = {
  korea: {
    currentTemperature: current,
    hourlyTemperature: hourly,
    weeklyTemperature: weekly,
    atmos: {
      dust: atmosDust,
      uv: atmosUv,
    },
  },
}

export type KoreaWeatherStateType = typeof KoreaWeatherState
