import { personalOptions } from "./stateList"
export * from "./stateList/state.types"

export const PersonalOptionsState = {
  personal: {
    selectWeatherCop: personalOptions,
  },
}

export type PersonalOptionsStateType = typeof PersonalOptionsState
