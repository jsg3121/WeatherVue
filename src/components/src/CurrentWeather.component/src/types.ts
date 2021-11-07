import { CurrentTypes, PersonalOptionsTypes } from "@/store/src/state"
import { Ref } from "@vue/reactivity"

export type CurrentProps = Omit<
  CurrentTypes,
  "humidity" | "windDirection" | "windSpeed"
>
export type NowStatusRef = {
  korea: {
    nowTemp: Ref<CurrentProps["temperature"]>
    nowSky: Ref<string>
  }
  openWeather: {
    nowTemp: Ref<CurrentProps["temperature"]>
    nowSky: Ref<string>
  }
}

export type NowStatus = {
  korea: {
    nowTemp: string
    nowSky: string
  }
  openWeather: {
    nowTemp: string
    nowSky: string
  }
}

export type MinMaxRef = {
  minTemp: Ref<CurrentProps["minTemp"]>
  maxTemp: Ref<CurrentProps["maxTemp"]>
}

export type MinMax = {
  minTemp: string
  maxTemp: string
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
