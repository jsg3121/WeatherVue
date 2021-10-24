import { current } from "./stateList"

export const KoreaWeatherState = {
  currentTemperature: current,
  threeHours: {
    date: "",
    time: "",
    value: "",
    valuePTY: "",
    valueR06: "",
    valueSKY: "",
  },
  r06: {
    date: "",
    time: "",
    value: "",
  },
  s06: {
    date: "",
    time: "",
    value: "",
  },
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
