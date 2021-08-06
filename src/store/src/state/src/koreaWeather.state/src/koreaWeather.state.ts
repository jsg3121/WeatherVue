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
}

export type KoreaWeatherStateType = typeof KoreaWeatherState
