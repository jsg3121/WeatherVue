import { NodeRequire } from "@/types"

export type ChangeDate = {
  day: string
  date: string
}

export type ChangStatus = NodeRequire

export type DateChange<T> = (num: number) => T
export type DateStatus<T> = (val: string) => T

export type SetUpType = {
  dateChange: DateChange<ChangeDate>
  dateStatus: DateStatus<ChangStatus>
}
