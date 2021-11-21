import {
  openWeatherCurrent,
  openWeatherHourly,
  openWeatherWeekly,
} from "./stateList"

export const OpenWeatherState = {
  openWeather: {
    current: openWeatherCurrent,
    hourly: openWeatherHourly,
    weekly: openWeatherWeekly,
  },
}

export type OpenWeatherStateType = typeof OpenWeatherState
