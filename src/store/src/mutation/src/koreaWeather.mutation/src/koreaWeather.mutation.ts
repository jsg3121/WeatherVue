import { KoreaWeatherStateType } from "@/store/src/state"
import { MutationTree } from "vuex"
import { KoreaWeatherMutationTypes } from "./types"

export type KoreaWeatherMutaions<S = KoreaWeatherStateType> = {
  [KoreaWeatherMutationTypes.SET_WEATHER](state: S, payload: any): void
  [KoreaWeatherMutationTypes.SET_THREES](state: S, payload: any): void
  [KoreaWeatherMutationTypes.SET_WEEKLY](state: S, payload: any): void
}

export const koreaWeatherMutaions: MutationTree<KoreaWeatherStateType> &
  KoreaWeatherMutaions = {
  [KoreaWeatherMutationTypes.SET_WEATHER](state, payload) {
    state.currentTemperature = payload
  },
  [KoreaWeatherMutationTypes.SET_THREES](state, payload) {
    const data = payload.T3H.map((item: any, idx: number) => {
      const res = (item = {
        ...item,
        valuePTY: payload.PTY[idx].value,
        valueSKY: payload.SKY[idx].value,
      })
      return res
    })
    state.r06 = payload.R06
    state.threeHours = data
    state.s06 = payload.S06
  },
  [KoreaWeatherMutationTypes.SET_WEEKLY](state, payload) {
    console.log(payload)

    state.weekly = payload.weekOut
  },
}
