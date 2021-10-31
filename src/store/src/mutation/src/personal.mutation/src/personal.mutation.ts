import { PersonalOptionsStateType } from "@/store/src/state"
import { MutationTree } from "vuex"
import { PersonalOptionsMutationsType } from "./types"

export type PersonalOptionsMutations<S = PersonalOptionsStateType> = {
  [PersonalOptionsMutationsType.SET_WEATHER_COP](
    state: S,
    payload: PersonalOptionsStateType["personal"]["selectWeatherCop"]
  ): void
}

export const personalOptionsMutations: MutationTree<PersonalOptionsStateType> &
  PersonalOptionsMutations = {
  [PersonalOptionsMutationsType.SET_WEATHER_COP](state, payload) {
    state.personal.selectWeatherCop = payload
  },
}
