export type CurrentTypes = {
  temp: number
  humidity: number
  wind_speed: number
  wind_deg: number
  sky: string
  min_temp: number
  max_temp: number
}

export type WeeklyTypes = {
  sky: string
  maxTemperature: number
  minTemperature: number
}

export type HourlyTypes = {
  sky: string
  temp: number
}
