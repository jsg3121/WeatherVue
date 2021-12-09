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
): Promise<boolean> => {
  if (data.value) {
    /**
     * ! 현재 접속 위치 좌표
     * @params {latitude: number, longitude:number}
     * @return {object} GeoLocationStateType
     */
    await http
      .request({
        url: "https://best-weather.com/geolocation",
        // url: "http://localhost/geolocation",
        method: "GET",
        params: {
          latitude: data.value.lat,
          longitude: data.value.lon,
        },
      })
      .then((res) => {
        store.dispatch(GeolocationActionTypes.GET_LOCATION, res.data)
      })
      .catch((e) => {
        return e
      })
  }
  return true
}

export const loadWeather = async (): Promise<boolean> => {
  const {
    state: { geolocation },
  } = store
  console.log(geolocation)
  /**
   * ! 현재 기상 상태 요청
   * @params {nx: number, ny: number}
   * @return {object} CurrentTypes
   */

  const current = async () => {
    await http
      .request({
        url: "https://best-weather.com/service/current",
        // url: "http://localhost/service/current",
        method: "GET",
        params: {
          nx: geolocation.gridX,
          ny: geolocation.gridY,
        },
      })
      .then((res) => {
        store.dispatch(KoreaWeatherActionTypes.GET_WEATHER, res.data)
      })
  }

  const weekly = async () => {
    await http
      .request({
        url: "https://best-weather.com/service/weekly",
        // url: "http://localhost/service/weekly",
        method: "GET",
        params: {
          nx: geolocation.gridX,
          ny: geolocation.gridY,
          locationCode: geolocation.weeklyLocatioCode,
          skyCode: geolocation.weeklySkyLocationCode,
        },
      })
      .then((res) => {
        store.dispatch(KoreaWeatherActionTypes.GET_WEEKLY, res.data.weeklyData)
        store.dispatch(KoreaWeatherActionTypes.GET_HOURLY, res.data.hourlyData)
      })
      .catch((e) => {
        return e
      })
  }

  const atmos = async () => {
    await http
      .request({
        url: "https://best-weather.com/service/atmos",
        // url: "http://localhost/service/atmos",
        method: "GET",
        params: {
          nx: geolocation.gridX,
          ny: geolocation.gridY,
          locationCode: geolocation.location1,
          skyCode: geolocation.weeklySkyLocationCode,
        },
      })
      .then((res) => {
        store.dispatch(KoreaWeatherActionTypes.GET_ENV, res.data)
      })
  }

  return await Promise.allSettled([current(), weekly(), atmos()]).then(() => {
    return true
  })
}
