import { KoreaWeatherStateType } from "@/store/src/state"
import { HourlyTypes } from "@/store/src/state"
import { MutationTree } from "vuex"
import { KoreaWeatherMutationTypes, HourlyPayloadType } from "./types"

export type KoreaWeatherMutaions<S = KoreaWeatherStateType> = {
  [KoreaWeatherMutationTypes.SET_WEATHER](
    state: S,
    payload: KoreaWeatherStateType["currentTemperature"]
  ): void
  [KoreaWeatherMutationTypes.SET_THREES](
    state: S,
    payload: Array<HourlyPayloadType>
  ): void
  [KoreaWeatherMutationTypes.SET_WEEKLY](state: S, payload: any): void
  [KoreaWeatherMutationTypes.SET_ENV](state: S, payload: any): void
}

export const koreaWeatherMutaions: MutationTree<KoreaWeatherStateType> &
  KoreaWeatherMutaions = {
  [KoreaWeatherMutationTypes.SET_WEATHER](state, payload) {
    state.currentTemperature = payload
  },
  [KoreaWeatherMutationTypes.SET_THREES](state, payload) {
    const temperature = payload.filter((list) => {
      return list.category === "T3H"
    })
    const sky = payload.filter((list) => {
      return list.category === "SKY"
    })
    const precipitation = payload.filter((list) => {
      return list.category === "PTY"
    })
    const rain6Hour = payload.filter((list) => {
      return list.category === "R06"
    })
    const snow6Hour = payload.filter((list) => {
      return list.category === "S06"
    })

    const data: unknown = {
      temperature,
      sky,
      precipitation,
      rain6Hour,
      snow6Hour,
    }
    state.hourlyTemperature = data as HourlyTypes
  },
  [KoreaWeatherMutationTypes.SET_WEEKLY](state, payload) {
    state.weeklyTwoDays = payload.tomorrowMinMax
    state.weekly = payload.weekOut
  },
  [KoreaWeatherMutationTypes.SET_ENV](state, payload) {
    state.environment = { ...payload }
  },
}
