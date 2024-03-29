import { store } from "@/store"
import { OpenWeatherActionTypes } from "@/store/src/actions"
import http from "axios"
export const getOpenWeatherMap = async (): Promise<boolean> => {
  const {
    state: { geolocation },
  } = store
  return await http
    .request({
      url: "https://best-weather.com/service/openweather",
      // url: "http://localhost/service/openweather",
      method: "GET",
      params: {
        latitude: geolocation.positionNx,
        longitude: geolocation.positionNy,
      },
    })
    .then((res) => {
      store.dispatch(OpenWeatherActionTypes.GET_OPEN_WEATHER, res.data)
      return true
    })
    .catch((e) => {
      return e
    })
}
