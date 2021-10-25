/**
 * ! 현재 날씨 상태 state types
 */
export type CurrentTypes = {
  humidity: string
  precipitation: string
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
  fsctValue: string
}

export type HourlyTypes = {
  precipitation: Array<HourlyTypesProps>
  sky: Array<HourlyTypesProps>
  temperature: Array<HourlyTypesProps>
  rain6Hour: Array<HourlyTypesProps>
  snow6Hour: Array<HourlyTypesProps>
}
