import { OpenWeatherStateType } from "@/store/src/state"
import { MutationTree } from "vuex"
import { OpenWeatherMutationTypes } from "./types"

export type OpenWeatherMutations<S = OpenWeatherStateType> = {
  [OpenWeatherMutationTypes.SET_OPEN_WEATHER](
    state: S,
    payload: OpenWeatherStateType
  ): void
}

export const openWeatherMutations: MutationTree<OpenWeatherStateType> &
  OpenWeatherMutations = {
  [OpenWeatherMutationTypes.SET_OPEN_WEATHER](state, payload) {
    console.log(state)
    console.log(payload)
  },
}
