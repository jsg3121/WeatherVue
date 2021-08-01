import { KoreaWeatherStateType } from "@/store/src/state"
import { MutationTree } from "vuex"
import { KoreaWeatherMutationTypes } from "./types"

export type KoreaWeatherMutaions<S = KoreaWeatherStateType> = {
  [KoreaWeatherMutationTypes.SET_WEATHER](state: S, payload: any): void
}

export const koreaWeatherMutaions: MutationTree<KoreaWeatherStateType> &
  KoreaWeatherMutaions = {
  [KoreaWeatherMutationTypes.SET_WEATHER](state, payload) {
    state.currentTemperature = payload
  },
}
