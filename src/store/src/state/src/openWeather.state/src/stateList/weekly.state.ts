import { OpenWeatherWeeklyTypes } from "./types.state"

/**
 * ! openWeather 주간 날씨
 * * State data options
 * - sky : 하늘 상태 `string` -> 기상청과 달리 비, 눈등 포함
 * - maxTemperature : 최고기온 `number`
 * - minTemperature : 최저기온 `number`
 */
export const openWeatherWeekly: Array<OpenWeatherWeeklyTypes> = [
  {
    sky: "",
    maxTemperature: 0,
    minTemperature: 0,
  },
]
