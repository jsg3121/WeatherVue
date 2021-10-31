import { PersonalOptionsTypes } from "@/store/src/state"
import { Ref } from "@vue/reactivity"

export type NowStatusRef = {
  nowTemp: Ref<number>
  nowSky: Ref<string>
}

export type NowStatus = {
  nowTemp: number
  nowSky: string
}

export type MinMaxRef = {
  minTemp: Ref<number>
  maxTemp: Ref<number>
}

export type MinMax = {
  minTemp: number
  maxTemp: number
}

export type SideBarListType = {
  index: number
  name: string
  selectName: PersonalOptionsTypes
  logo: NodeRequire
  selectLogo: NodeRequire
  temperature?: number
  selected: boolean
  sky?: NodeRequire
}
