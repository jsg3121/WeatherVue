export * from "./example.action"
export * from "./geologication.action"
export * from "./koreaWeather.action"

import { geolocationAction, GeolocationActions } from "./geologication.action"
import { exampleAction, ExampleActions } from "./example.action"
import { State } from "../../state"
import { ActionTree } from "vuex"
import { koreaWeatherAction, KoreaWeatherActions } from "./koreaWeather.action"
import {
  personalOptionsAction,
  PersonalOptionsActions,
} from "./personal.action"

export type Actions = GeolocationActions &
  ExampleActions &
  KoreaWeatherActions &
  PersonalOptionsActions

export const actions: ActionTree<State, State> & Actions = {
  ...geolocationAction,
  ...exampleAction,
  ...koreaWeatherAction,
  ...personalOptionsAction,
}
