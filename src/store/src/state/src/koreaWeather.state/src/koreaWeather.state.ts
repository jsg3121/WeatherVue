import { current, hourly } from "./stateList"

export const KoreaWeatherState = {
  currentTemperature: current,
  hourlyTemperature: hourly,
  weeklyTwoDays: {
    day1: {},
    day2: {},
  },
  weekly: {
    day3: {},
    day4: {},
    day5: {},
    day6: {},
    day7: {},
  },
  environment: {
    out: [
      {
        sidoName: "",
        pm10Grade1h: "",
        pm25Grade1h: "",
        o3Grade: "",
        dataTime: "",
        stationName: "",
      },
    ],
    uvValue: {},
  },
}

export type KoreaWeatherStateType = typeof KoreaWeatherState
