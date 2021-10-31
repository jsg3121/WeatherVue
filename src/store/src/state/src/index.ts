export * from "./geologication.state"
export * from "./koreaWeather.state"
export * from "./personal.state"
export * from "./openWeather.state"

import { GeoLocationState } from "./geologication.state"
import { KoreaWeatherState } from "./koreaWeather.state"
import { OpenWeatherState } from "./openWeather.state"
import { PersonalOptionsState } from "./personal.state"

export const state = {
  ...GeoLocationState,
  ...KoreaWeatherState,
  ...PersonalOptionsState,
  ...OpenWeatherState,
}

export type State = typeof state
