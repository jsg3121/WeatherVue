export * from "./geologication.state"
export * from "./example.state"
export * from "./koreaWeather.state"

import { exampleState } from "./example.state"
import { GeoLocationState } from "./geologication.state"
import { KoreaWeatherState } from "./koreaWeather.state"

export const state = {
  ...exampleState,
  ...GeoLocationState,
  ...KoreaWeatherState,
}

export type State = typeof state
