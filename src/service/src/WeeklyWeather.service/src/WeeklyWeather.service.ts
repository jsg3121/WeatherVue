import { useStore } from "@/store"
import { RequestPositionType } from "@/types"
import { Ref } from "vue"
import http from "axios"
import { KoreaWeatherActionTypes } from "@/store/src/actions"

const store = useStore()

export const getWeeklyGetData = async (
  data: Ref<RequestPositionType | undefined>
) => {
  if (data.value) {
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
        console.log(res)
        store.dispatch(KoreaWeatherActionTypes.GET_WEEKLY, res.data)
      })
      .catch((e) => {
        return e
      })
  }
}
