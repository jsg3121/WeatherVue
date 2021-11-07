import { OpenWeatherStateType } from "@/store/src/state"
import { MutationTree } from "vuex"
import { OpenWeatherMutationTypes } from "./types"

export type OpenWeatherMutations<S = OpenWeatherStateType> = {
  [OpenWeatherMutationTypes.SET_OPEN_WEATHER](
    state: S,
    payload: OpenWeatherStateType["openWeather"]
  ): void
}

export const openWeatherMutations: MutationTree<OpenWeatherStateType> &
  OpenWeatherMutations = {
  [OpenWeatherMutationTypes.SET_OPEN_WEATHER](state, payload) {
    state.openWeather = payload
  },
}
