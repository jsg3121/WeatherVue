import {
  PersonalOptionsMutations,
  PersonalOptionsMutationsType,
} from "@/store/src/mutation"
import { PersonalOptionsStateType } from "@/store/src/state"
import { ActionContext, ActionTree } from "vuex"
import { PersonalOptionsActionTypes } from ".."

type ArgumentedActionContext = {
  commit<K extends keyof PersonalOptionsMutations>(
    key: K,
    payload: Parameters<PersonalOptionsMutations[K]>[1]
  ): ReturnType<PersonalOptionsMutations[K]>
} & Omit<
  ActionContext<PersonalOptionsStateType, PersonalOptionsStateType>,
  "commit"
>

export interface PersonalOptionsActions {
  [PersonalOptionsActionTypes.GET_WEATHER_COP](
    { commit }: ArgumentedActionContext,
    payload: PersonalOptionsStateType["personal"]["selectWeatherCop"]
  ): Promise<PersonalOptionsStateType>
}

export const personalOptionsAction: ActionTree<
  PersonalOptionsStateType,
  PersonalOptionsStateType
> &
  PersonalOptionsActions = {
  [PersonalOptionsActionTypes.GET_WEATHER_COP]({ commit }, payload) {
    return new Promise(() => {
      commit(PersonalOptionsMutationsType.SET_WEATHER_COP, payload)
    })
  },
}
