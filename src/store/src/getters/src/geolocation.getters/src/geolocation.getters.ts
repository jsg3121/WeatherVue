import { GeoLocationStateType } from "@/store/src/state"
import { GetterTree } from "vuex"

export type GeolocationGetters = {
  // doubledCounter(state: GeoLocationStateType): number
}

export const geolocationGetters: GetterTree<
  GeoLocationStateType,
  GeoLocationStateType
> &
  GeolocationGetters = {
  // doubledCounter: (state) => {
  //   return state
  // },
}
