import { HourlyTypes } from "@/store/src/state"
import { NodeRequire } from "@/types"

export type TimeSetProps = {
  hourlyTemperature: Pick<HourlyTypes, "temperature" | "precipitation" | "sky">
  rain6Hour: HourlyTypes["rain6Hour"]
  snow6Hour: HourlyTypes["snow6Hour"]
}
