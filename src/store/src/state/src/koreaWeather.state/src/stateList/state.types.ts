/**
 * ! 현재 날씨 상태 state types
 */
export type CurrentTypes = {
  humidity: string
  pty: string
  temperature: string
  windDirection: string
  windSpeed: string
  sky: string
  minTemp: string
  maxTemp: string
}

/**
 * ! 시간별 날씨 상태 state types
 */
type HourlyTypesProps = {
  category: string
  fcstDate: string
  fcstTime: string
  fcstValue: string
}

export type HourlyTypes = {
  precipitation: Array<HourlyTypesProps>
  sky: Array<HourlyTypesProps>
  temperature: Array<HourlyTypesProps>
}

/**
 * ! weekly weather data
 */

type WeeklyDateType = {
  minTemperature: number
  maxTemperature: number
  skyAm: string
  skyPm: string
}

export type WeeklyTypes = {
  day1: WeeklyDateType | null
  day2: WeeklyDateType | null
  day3: WeeklyDateType | null
  day4: WeeklyDateType | null
  day5: WeeklyDateType | null
  day6: WeeklyDateType | null
  day7: WeeklyDateType | null
}

/**
 * ! atmos dust
 */

export type AtmosDust = {
  sidoName: string
  pm10Grade1h: string
  pm25Grade1h: string
  o3Grade: string
  dataTime: string
  stationName: string
}

/**
 * ! atmos uv
 */

export type AtmosUv = string
