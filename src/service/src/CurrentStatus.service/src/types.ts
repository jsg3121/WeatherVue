import { Store } from "@/store"
import { GeoLocationStateType } from "@/store/src/state"
import { Ref } from "vue"

export type LocationType = GeoLocationStateType["location"]

export type PositionType = {
  lat: number
  lon: number
}

export type SetUpTypes = {
  location: Ref<LocationType | undefined>
  store: Store
  locationName: () => string
}
