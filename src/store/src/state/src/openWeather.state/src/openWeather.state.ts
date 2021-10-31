import { current, hourly, weekly } from "./stateList"

export const OpenWeatherState = {
  current: current,
  hourly: hourly,
  weekly: weekly,
}

export type OpenWeatherStateType = typeof OpenWeatherState
