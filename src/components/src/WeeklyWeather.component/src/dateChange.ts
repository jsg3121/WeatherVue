import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import "dayjs/locale/ko"
import { ChangeDate, ChangStatus, DateChange, DateStatus } from "./types"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export const dayChange: DateChange<ChangeDate> = (num: number) => {
  const form = dayjs().add(num, "day")
  const date = form.format("MM.DD")
  const day = form.format("dd")

  return { date, day }
}

export const statusChange: DateStatus<string> = (val: string) => {
  if (val === "맑음") {
    return "sunny"
  } else if (val === "구름많음" || val === "흐림") {
    return "cloud"
  } else if (val.indexOf("비") || val.indexOf("소나기")) {
    return "rain"
  } else if (val.indexOf("눈")) {
    return "snow"
  } else {
    return "cloud"
  }
}
