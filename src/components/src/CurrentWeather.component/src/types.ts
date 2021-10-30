import { PersonalOptionsTypes } from "@/store/src/state"

export type NowStatusRef = {
  nowTemp: number
  nowSky: string
}

export type MinMaxRef = {
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
}
