import { GeoLocationStateType } from "@/store/src/state"

export type GeolocationPosition = {
  position: {
    coords: {
      latitude: number
      longitude: number
    }
  }
}

export type RequestPositionType = {
  lat: number
  lon: number
}

export type LocationType = GeoLocationStateType["location"]
