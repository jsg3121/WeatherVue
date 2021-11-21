import { OpenWeatherHourlyTypes } from "./types.state"

/**
 * ! openWeaather 시간당 날씨 상태
 * * State data options
 * - sky : 하늘상태 `string` -> 기상청과 달리 비, 눈등 포함
 * - temp : 기온 `number`
 */
export const openWeatherHourly: Array<OpenWeatherHourlyTypes> = [
  {
    sky: "",
    temp: 0,
  },
]
