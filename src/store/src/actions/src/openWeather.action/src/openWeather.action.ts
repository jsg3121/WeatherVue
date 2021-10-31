import {
  OpenWeatherMutations,
  OpenWeatherMutationTypes,
} from "@/store/src/mutation"
import { OpenWeatherStateType } from "@/store/src/state"
import { ActionContext, ActionTree } from "vuex"
import { OpenWeatherActionTypes } from "./types"

type ArgumuntedActionContext = {
  commit<K extends keyof OpenWeatherMutations>(
    key: K,
    payload: Parameters<OpenWeatherMutations[K]>[1]
  ): ReturnType<OpenWeatherMutations[K]>
} & Omit<ActionContext<OpenWeatherStateType, OpenWeatherStateType>, "commit">

export interface OpenWeatherActions {
  [OpenWeatherActionTypes.GET_OPEN_WEATHER](
    { commit }: ArgumuntedActionContext,
    payload: OpenWeatherStateType
  ): Promise<OpenWeatherStateType>
}

export const openWeatherAction: ActionTree<
  OpenWeatherStateType,
  OpenWeatherStateType
> &
  OpenWeatherActions = {
  [OpenWeatherActionTypes.GET_OPEN_WEATHER]({ commit }, payload) {
    return new Promise(() => {
      commit(OpenWeatherMutationTypes.SET_OPEN_WEATHER, payload)
    })
  },
}
