import { Ref } from "vue"

export type NowStatusRef = {
  nowTemp: string
  nowSky: string
}

export type MinMaxRef = {
  minTemp: string
  maxTemp: string
}

export type SideBarListType = {
  index: number
  name: string
  logo: NodeRequire
  selectLogo: NodeRequire
}
