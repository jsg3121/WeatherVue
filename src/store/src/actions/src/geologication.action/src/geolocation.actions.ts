import {
  GeologicationMutations,
  GeologicationMutationTypes,
} from "@/store/src/mutation"
import { GeoLocationStateType } from "@/store/src/state"
import { ActionContext, ActionTree } from "vuex"
import { GeolocationActionTypes } from "./types"

type ArgumentedActionContext = {
  commit<K extends keyof GeologicationMutations>(
    key: K,
    payload: Parameters<GeologicationMutations[K]>[1]
  ): ReturnType<GeologicationMutations[K]>
} & Omit<ActionContext<GeoLocationStateType, GeoLocationStateType>, "commit">

export interface GeolocationActions {
  [GeolocationActionTypes.GET_LOCATION](
    { commit }: ArgumentedActionContext,
    payload: GeoLocationStateType["geolocation"]
  ): Promise<GeoLocationStateType>
}

export const geolocationAction: ActionTree<
  GeoLocationStateType,
  GeoLocationStateType
> &
  GeolocationActions = {
  [GeolocationActionTypes.GET_LOCATION]({ commit }, payload) {
    return new Promise(() => {
      commit(GeologicationMutationTypes.SET_LOCATION, payload)
    })
  },
}
