export * from "./geologication.state"
export * from "./example.state"

import { exampleState } from "./example.state"
import { GeoLocationState } from "./geologication.state"

export const state = {
  ...exampleState,
  ...GeoLocationState,
}

export type State = typeof state
