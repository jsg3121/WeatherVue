import { GeoLocationStateType } from "@/store/src/state"

export type LocationType = GeoLocationStateType["location"]

export type PositionType = {
  lat: number
  lon: number
}
