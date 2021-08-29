import { useStore } from "@/store"
import {
  GeolocationActionTypes,
  KoreaWeatherActionTypes,
} from "@/store/src/actions"
import { RequestPositionType } from "@/types"
import http from "axios"
import { Ref } from "vue"

const store = useStore()

export const getKoreaWeather = async (
  data: Ref<RequestPositionType | undefined>
) => {
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

    await http
      .request({
        url: "http://localhost/api/ko/weekly",
        method: "GET",
        params: {
          latitude: data.value.lat,
          longitude: data.value.lon,
        },
      })
      .then((res) => {
        store.dispatch(KoreaWeatherActionTypes.GET_WEEKLY, res.data)
      })
      .catch((e) => {
        return e
      })

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
}
