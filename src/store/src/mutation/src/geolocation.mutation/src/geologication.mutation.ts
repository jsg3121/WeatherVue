import { GeoLocationStateType } from "@/store/src/state"
import { MutationTree } from "vuex"
import { GeologicationMutationTypes } from "./types"

export type GeologicationMutations<S = GeoLocationStateType> = {
  [GeologicationMutationTypes.SET_LOCATION](state: S, payload: any): void
}

export const geolocationMutations: MutationTree<GeoLocationStateType> &
  GeologicationMutations = {
  [GeologicationMutationTypes.SET_LOCATION](state, payload) {
    state.location = payload
  },
}
