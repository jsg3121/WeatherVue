import { CurrentTypes } from "./state.types"

/**
 * ! 현재 기상 상태 state value
 * * State Data Options
 * - humidity: 현재 습도
 * - precipitation: 강수량
 * - temperature: 현재 기온
 * - windDirection: 풍향
 * - windSpeed: 풍속
 * - sky: 하늘 상태
 * - minTemp: 최저기온
 * - maxTemp: 최고기온
 */
export const current: CurrentTypes = {
  humidity: "",
  pty: "",
  temperature: "",
  windDirection: "",
  windSpeed: "",
  sky: "",
  minTemp: "",
  maxTemp: "",
}
