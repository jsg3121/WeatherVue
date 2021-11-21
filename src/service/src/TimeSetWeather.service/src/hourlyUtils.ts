import dayjs from "dayjs"
import "dayjs/locale/ko"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export const setTime = (index: number): string => {
  const nowDate = dayjs(new Date()).tz("Asia/Seoul")
  return nowDate.add(index, "hour").format("hhmm")
}

export const changeSky = (sky: string): NodeRequire => {
  if (sky === "clear sky") {
    return require("@/assets/img/sunny-small-icon@2x.png")
  } else if (sky.indexOf("cloud") >= 0) {
    if (sky.indexOf("few") >= 0) {
      return require("@/assets/img/fog-small-icon@2x.png")
    } else {
      return require("@/assets/img/cloud-small-icon@2x.png")
    }
  } else if (sky.indexOf("rain") >= 0) {
    return require("@/assets/img/rain-small-icon@2x.png")
  } else if (sky.indexOf("snow") >= 0) {
    return require("@/assets/img/smow-small-icon@2x.png")
  } else {
    return require("@/assets/img/cloud-small-icon@2x.png")
  }
}
