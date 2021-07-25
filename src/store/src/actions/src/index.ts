export * from "./example.action"
export * from "./geologication.action"

import { geolocationAction, GeolocationActions } from "./geologication.action"
import { exampleAction, ExampleActions } from "./example.action"
import { State } from "../../state"
import { ActionTree } from "vuex"

export type Actions = GeolocationActions & ExampleActions

export const actions: ActionTree<State, State> & Actions = {
  ...geolocationAction,
  ...exampleAction,
}
