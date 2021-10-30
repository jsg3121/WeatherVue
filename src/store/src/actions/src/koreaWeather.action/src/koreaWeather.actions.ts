import {
  KoreaWeatherMutaions,
  KoreaWeatherMutationTypes,
} from "@/store/src/mutation"
import { HourlyPayloadType } from "@/store/src/mutation"
import { KoreaWeatherStateType } from "@/store/src/state"
import { ActionContext, ActionTree } from "vuex"
import { KoreaWeatherActionTypes } from "./types"

type ArgumentedActionContext = {
  commit<K extends keyof KoreaWeatherMutaions>(
    key: K,
    payload: Parameters<KoreaWeatherMutaions[K]>[1]
  ): ReturnType<KoreaWeatherMutaions[K]>
} & Omit<ActionContext<KoreaWeatherStateType, KoreaWeatherStateType>, "commit">

export interface KoreaWeatherActions {
  [KoreaWeatherActionTypes.GET_WEATHER](
    { commit }: ArgumentedActionContext,
    payload: KoreaWeatherStateType["currentTemperature"]
  ): Promise<KoreaWeatherStateType>
  [KoreaWeatherActionTypes.GET_THREES](
    { commit }: ArgumentedActionContext,
    payload: Array<HourlyPayloadType>
  ): Promise<KoreaWeatherStateType>
  [KoreaWeatherActionTypes.GET_WEEKLY](
    { commit }: ArgumentedActionContext,
    payload: KoreaWeatherStateType["weeklyTemperature"]
  ): Promise<KoreaWeatherStateType>
  [KoreaWeatherActionTypes.GET_ENV](
    { commit }: ArgumentedActionContext,
    payload: KoreaWeatherStateType["atmos"]
  ): Promise<KoreaWeatherStateType>
}

export const koreaWeatherAction: ActionTree<
  KoreaWeatherStateType,
  KoreaWeatherStateType
> &
  KoreaWeatherActions = {
  [KoreaWeatherActionTypes.GET_WEATHER]({ commit }, payload) {
    return new Promise(() => {
      commit(KoreaWeatherMutationTypes.SET_WEATHER, payload)
    })
  },
  [KoreaWeatherActionTypes.GET_THREES]({ commit }, payload) {
    return new Promise(() => {
      commit(KoreaWeatherMutationTypes.SET_THREES, payload)
    })
  },
  [KoreaWeatherActionTypes.GET_WEEKLY]({ commit }, payload) {
    return new Promise(() => {
      commit(KoreaWeatherMutationTypes.SET_WEEKLY, payload)
    })
  },
  [KoreaWeatherActionTypes.GET_ENV]({ commit }, payload) {
    return new Promise(() => {
      commit(KoreaWeatherMutationTypes.SET_ENV, payload)
    })
  },
}
