import { OpenWeatherCurrentTypes } from "./types.state"

/**
 * ! openWeather 현재 상태
 * * State data options
 * - temp: 현재 기온  `number`
 * - humidity: 습도  `number`
 * - wind_speed: 풍속  `number`
 * - wind_deg: 풍향  `number`
 * - sky: 하늘 상태  `string` -> 기상청과 달리 비, 눈등 포함
 * - min_temp: 당일 최저기온  `number`
 * - max_temp: 당일 최고기온  `number`
 */
export const openWeatherCurrent: OpenWeatherCurrentTypes = {
  temp: 0,
  humidity: 0,
  wind_speed: 0,
  wind_deg: 0,
  sky: "",
  min_temp: 0,
  max_temp: 0,
}
