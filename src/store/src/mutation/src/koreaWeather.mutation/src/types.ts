export enum KoreaWeatherMutationTypes {
  SET_WEATHER = "SET_WEATHER",
  SET_THREES = "SET_THREES",
  SET_WEEKLY = "SET_WEEKLY",
  SET_ENV = "SET_ENV",
}

/**
 * ! Hourly data payload types
 */
export type HourlyPayloadType = {
  category: string
  fcstDate: string
  fcstTime: string
  fcstValue: string
}
