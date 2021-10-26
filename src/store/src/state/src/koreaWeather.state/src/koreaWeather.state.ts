import { current, hourly, weekly } from "./stateList"

export const KoreaWeatherState = {
  currentTemperature: current,
  hourlyTemperature: hourly,
  weeklyTemperature: weekly,
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
