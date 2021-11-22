import { HourlyTypes } from "@/store/src/state"

export type TimeSetProps = {
  hourlyTemperature: Pick<HourlyTypes, "temperature" | "precipitation" | "sky">
}

export type TimeSetDataTypes = {
  time: string
  sky: NodeRequire
  temp: string
}
