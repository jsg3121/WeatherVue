export const KoreaWeatherState = {
  currentTemperature: {
    reh: "",
    rn1: "",
    t1h: "",
    vec: "",
    wsd: "",
    sky: "",
    tmn: "",
    tmx: "",
  },
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
  weekly: {
    day3: {},
    day4: {},
    day5: {},
    day6: {},
    day7: {},
  },
}

export type KoreaWeatherStateType = typeof KoreaWeatherState
