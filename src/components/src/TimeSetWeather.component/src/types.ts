import { NodeRequire } from "@/types"

export type OnDataListType = {
  date: string
  time: string
  value: string
  valuePTY: string
  valueSKY: string
  iconSrc?: NodeRequire
}

interface TimeSetValueInterface {
  date: string
  time: string
  value: string
}

export type TimeSetProps = {
  threeHours: Array<OnDataListType>
  r06: Array<TimeSetValueInterface>
  s06: Array<TimeSetValueInterface>
}
