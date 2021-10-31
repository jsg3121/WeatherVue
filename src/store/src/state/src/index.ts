export * from "./geologication.state"
export * from "./example.state"
export * from "./koreaWeather.state"
export * from "./personal.state"

import { exampleState } from "./example.state"
import { GeoLocationState } from "./geologication.state"
import { KoreaWeatherState } from "./koreaWeather.state"
import { OpenWeatherState } from "./openWeather.state"
import { PersonalOptionsState } from "./personal.state"

export const state = {
  ...exampleState,
  ...GeoLocationState,
  ...KoreaWeatherState,
  ...PersonalOptionsState,
  ...OpenWeatherState,
}

export type State = typeof state
