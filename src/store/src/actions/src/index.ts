export * from "./geologication.action"
export * from "./koreaWeather.action"
export * from "./personal.action"
export * from "./openWeather.action"

import { ActionTree } from "vuex"
import { State } from "../../state"
import { geolocationAction, GeolocationActions } from "./geologication.action"
import { koreaWeatherAction, KoreaWeatherActions } from "./koreaWeather.action"
import { openWeatherAction, OpenWeatherActions } from "./openWeather.action"
import {
  personalOptionsAction,
  PersonalOptionsActions,
} from "./personal.action"

export type Actions = GeolocationActions &
  KoreaWeatherActions &
  PersonalOptionsActions &
  OpenWeatherActions

export const actions: ActionTree<State, State> & Actions = {
  ...geolocationAction,
  ...koreaWeatherAction,
  ...personalOptionsAction,
  ...openWeatherAction,
}
