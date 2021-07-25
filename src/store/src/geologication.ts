// import { Module } from "vuex"
// import { RootState } from ".."

// type StateLocationPrameter = {
//   payload: {
//     params: string
//   }
// }

// export interface GeoloGicateModuleState {
//   location: {
//     num: string
//     country: string
//     divisionCode: string
//     depth1: string
//     depth2: string
//     depth3: string
//     gridX: string
//     gridY: string
//     longitudeHour: string
//     longitudeMin: string
//     longitudeSec: string
//     latitudeHour: string
//     latitudeMin: string
//     latitudeSec: string
//     longitudePerSec: string
//     latitudePerSec: string
//   }
// }

// export const geologication: Module<GeoloGicateModuleState, RootState> = {
//   state: {
//     location: {
//       num: "499",
//       country: "kor",
//       divisionCode: "1168000000",
//       depth1: "서울특별시",
//       depth2: "강남구",
//       depth3: "",
//       gridX: "61",
//       gridY: "126",
//       longitudeHour: "127",
//       longitudeMin: "2",
//       longitudeSec: "58.4",
//       latitudeHour: "37",
//       latitudeMin: "30",
//       latitudeSec: "52.47",
//       longitudePerSec: "127.04955555555556",
//       latitudePerSec: "37.514575",
//     },
//   },
//   mutations: {
//     setLocation(state, payload): void {
//       state.location = payload.params
//     },
//   },
//   actions: {
//     getLocation({ commit }, payload: StateLocationPrameter): void {
//       commit("setLocation", payload)
//     },
//   },
// }
