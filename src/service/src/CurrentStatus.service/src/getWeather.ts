import { useStore } from "@/store"
import {
  GeolocationActionTypes,
  KoreaWeatherActionTypes,
} from "@/store/src/actions"
import http from "axios"
import { Ref } from "vue"
import { PositionType } from "./types"
const store = useStore()

export const getLocation = async (data: Ref<PositionType | undefined>) => {
  if (data.value) {
    await http
      .request({
        url: "https://best-weather.com/geolocation",
        method: "GET",
        params: {
          latitude: data.value.lat,
          longitude: data.value.lon,
        },
      })
      .then((res) => {
        store.dispatch(
          GeolocationActionTypes.GET_LOCATION,
          // #TODO : #1. any타입 변경
          res.data as ReturnType<any>
        )
      })
      .catch((e) => {
        return e
      })
  }
}

export const getTemperature = async () => {
  await http
    .request({
      url: "https://best-weather.com/api/ko/nowWeather",
      method: "GET",
      params: {
        nx: store.state.location.gridX,
        ny: store.state.location.gridY,
      },
    })
    .then((res) => {
      store.dispatch(KoreaWeatherActionTypes.GET_WEATHER, res.data)
    })
}

export const getThreeHours = async () => {
  await http
    .request({
      url: "https://best-weather.com/api/ko/threeHours",
      method: "GET",
      params: {
        nx: store.state.location.gridX,
        ny: store.state.location.gridY,
      },
    })
    .then((res) => {
      store.dispatch(KoreaWeatherActionTypes.GET_THREES, res.data)
    })
}
