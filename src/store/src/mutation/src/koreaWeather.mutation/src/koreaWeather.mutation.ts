import { KoreaWeatherStateType } from "@/store/src/state"
import { HourlyTypes } from "@/store/src/state"
import { MutationTree } from "vuex"
import { KoreaWeatherMutationTypes, HourlyPayloadType } from "./types"

export type KoreaWeatherMutaions<S = KoreaWeatherStateType> = {
  [KoreaWeatherMutationTypes.SET_WEATHER](
    state: S,
    payload: KoreaWeatherStateType["korea"]["currentTemperature"]
  ): void
  [KoreaWeatherMutationTypes.SET_THREES](
    state: S,
    payload: Array<HourlyPayloadType>
  ): void
  [KoreaWeatherMutationTypes.SET_WEEKLY](
    state: S,
    payload: KoreaWeatherStateType["korea"]["weeklyTemperature"]
  ): void
  [KoreaWeatherMutationTypes.SET_ENV](
    state: S,
    payload: KoreaWeatherStateType["korea"]["atmos"]
  ): void
}

export const koreaWeatherMutaions: MutationTree<KoreaWeatherStateType> &
  KoreaWeatherMutaions = {
  [KoreaWeatherMutationTypes.SET_WEATHER](state, payload) {
    state.korea.currentTemperature = payload
  },
  [KoreaWeatherMutationTypes.SET_THREES](state, payload) {
    const temperature = payload.filter((list) => {
      return list.category === "TMP"
    })
    const sky = payload.filter((list) => {
      return list.category === "SKY"
    })
    const precipitation = payload.filter((list) => {
      return list.category === "PTY"
    })
    const data: unknown = {
      temperature,
      sky,
      precipitation,
    }
    state.korea.hourlyTemperature = data as HourlyTypes
  },
  [KoreaWeatherMutationTypes.SET_WEEKLY](state, payload) {
    state.korea.weeklyTemperature = payload
  },
  [KoreaWeatherMutationTypes.SET_ENV](state, payload) {
    state.korea.atmos = payload
  },
}
