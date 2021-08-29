import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import "dayjs/locale/ko"
import { ChangeDate, DateChange, DateStatus, GetDate, GetSatus } from "./types"

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

export const getDays: GetDate<ChangeDate> = (val: string) => {
  const date = dayjs(val).format("MM.DD")
  const day = dayjs(val).format("dd")
  return { date, day }
}

export const dayStatus: GetSatus<string> = (pty, sky) => {
  if (sky === "1") {
    return "sunny"
  } else if (sky === "3" || sky === "4") {
    if (pty === "0") {
      return "cloud"
    } else if (
      pty === "1" ||
      pty === "2" ||
      pty === "4" ||
      pty === "5" ||
      pty === "6"
    ) {
      return "rain"
    } else if (pty === "3" || pty === "7") {
      return "snow"
    }
  } else {
    return "cloud"
  }
  return "sunny"
}
