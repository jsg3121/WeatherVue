import {
  OpenWeatherMutations,
  OpenWeatherMutationTypes,
} from "@/store/src/mutation/src/openWeather.mutation"
import { OpenWeatherStateType } from "@/store/src/state/src/openWeather.state"
import { ActionContext, ActionTree } from "vuex"
import { OpenWeatherActionTypes } from "./types"

type ArgumuntedActionContext = {
  commit<K extends keyof OpenWeatherMutations>(
    key: K,
    payload: Parameters<OpenWeatherMutations[K]>[1]
  ): ReturnType<OpenWeatherMutations[K]>
} & Omit<ActionContext<OpenWeatherStateType, OpenWeatherStateType>, "commit">

export interface OpenWeatherActions {
  [OpenWeatherActionTypes.GET_WEATHER](
    { commit }: ArgumuntedActionContext,
    payload: OpenWeatherStateType
  ): Promise<OpenWeatherStateType>
}

export const openWatherAction: ActionTree<
  OpenWeatherStateType,
  OpenWeatherStateType
> &
  OpenWeatherActions = {
  [OpenWeatherActionTypes.GET_WEATHER]({ commit }, payload) {
    return new Promise(() => {
      commit(OpenWeatherMutationTypes.SET_WEATHER, payload)
    })
  },
}
