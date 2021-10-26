import dayjs from "dayjs"
import "dayjs/locale/ko"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import { GetDate, GetSatus } from "./types"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export const getDays: GetDate = (val: string) => {
  const num = parseInt(val.slice(-1), 10)
  const nowDate = dayjs(new Date()).tz("Asia/Seoul")
  const date = nowDate.add(num, "day").format("MM.DD")
  const day = nowDate.add(num, "day").format("dd")

  return { date, day }
}

export const dayStatus: GetSatus<string> = (sky) => {
  if (sky.indexOf("맑음") === 0) {
    return "sunny"
  } else if (sky.indexOf("구름") === 0) {
    return "cloud"
  } else if (sky.indexOf("비") === 0) {
    return "rain"
  } else if (sky.indexOf("눈") === 0) {
    return "snow"
  } else {
    return "sunny"
  }
}
