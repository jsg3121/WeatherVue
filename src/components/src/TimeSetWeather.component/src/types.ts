import { HourlyTypes } from "@/store/src/state"
import { NodeRequire } from "@/types"

export type TimeSetProps = {
  hourlyTemperature: Pick<HourlyTypes, "temperature" | "precipitation" | "sky">
}

export type HourlyDataTypes = {
  temperature: string
  time: string
  skyImg: NodeRequire
}
