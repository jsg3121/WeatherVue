import { WeeklyTypes } from "@/store/src/state"

export type ChangeDate = {
  date: string
  day: string
}

export type ChangStatus = NodeRequire

export type GetDate = (val: string) => ChangeDate
export type GetSatus<T> = (sky: string) => T

export type SetUpType = {
  getDate: GetDate
  getStatus: GetSatus<ChangStatus>
  weeklyData: WeeklyTypes
}
