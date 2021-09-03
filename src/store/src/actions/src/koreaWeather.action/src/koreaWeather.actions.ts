import {
  KoreaWeatherMutaions,
  KoreaWeatherMutationTypes,
} from "@/store/src/mutation"
import {} from "@/store/src/mutation/src/koreaWeather.mutation/src/types"
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
    payload: KoreaWeatherStateType
  ): Promise<KoreaWeatherStateType>
  [KoreaWeatherActionTypes.GET_THREES](
    { commit }: ArgumentedActionContext,
    payload: KoreaWeatherStateType
  ): Promise<KoreaWeatherStateType>
  [KoreaWeatherActionTypes.GET_WEEKLY](
    { commit }: ArgumentedActionContext,
    payload: KoreaWeatherStateType
  ): Promise<KoreaWeatherStateType>
  [KoreaWeatherActionTypes.GET_ENV](
    { commit }: ArgumentedActionContext,
    payload: KoreaWeatherStateType
  ): Promise<KoreaWeatherStateType>
}

export const koreaWeatherAction: ActionTree<
  KoreaWeatherStateType,
  KoreaWeatherStateType
> &
  KoreaWeatherActions = {
  [KoreaWeatherActionTypes.GET_WEATHER]({ commit }, payload) {
    return new Promise((res) => {
      commit(KoreaWeatherMutationTypes.SET_WEATHER, payload)
      res(payload)
    })
  },
  [KoreaWeatherActionTypes.GET_THREES]({ commit }, payload) {
    return new Promise((res) => {
      commit(KoreaWeatherMutationTypes.SET_THREES, payload)
      res(payload)
    })
  },
  [KoreaWeatherActionTypes.GET_WEEKLY]({ commit }, payload) {
    return new Promise((res) => {
      commit(KoreaWeatherMutationTypes.SET_WEEKLY, payload)
      res(payload)
    })
  },
  [KoreaWeatherActionTypes.GET_ENV]({ commit }, payload) {
    return new Promise((res) => {
      commit(KoreaWeatherMutationTypes.SET_ENV, payload)
      res(payload)
    })
  },
}
