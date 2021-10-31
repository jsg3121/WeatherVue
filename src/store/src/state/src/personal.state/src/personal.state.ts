import { personalOptions } from "./stateList"
export * from "./stateList/state.types"

export const PersonalOptionsState = {
  selectWeatherCop: personalOptions,
}

export type PersonalOptionsStateType = typeof PersonalOptionsState
