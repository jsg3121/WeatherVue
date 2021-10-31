import { OpenWeatherStateType } from "@/store/src/state/src/openWeather.state"
import { MutationTree } from "vuex"
import { OpenWeatherMutationTypes } from "./types"

export type OpenWeatherMutations<S = OpenWeatherStateType> = {
  [OpenWeatherMutationTypes.SET_WEATHER](
    state: S,
    payload: OpenWeatherStateType
  ): void
}

export const openWeatherMutations: MutationTree<OpenWeatherStateType> &
  OpenWeatherMutations = {
  [OpenWeatherMutationTypes.SET_WEATHER](state, payload) {
    console.log(state)
    console.log(payload)
  },
}
