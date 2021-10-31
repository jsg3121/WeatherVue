export type OpenWeatherCurrentTypes = {
  temp: number
  humidity: number
  wind_speed: number
  wind_deg: number
  sky: string
  min_temp: number
  max_temp: number
}

export type OpenWeatherWeeklyTypes = {
  sky: string
  maxTemperature: number
  minTemperature: number
}

export type OpenWeatherHourlyTypes = {
  sky: string
  temp: number
}
