import { GetterTree } from "vuex"
import { State } from "../../state"
import { ExampleGetters } from "./example.getters"
import { GeolocationGetters, geolocationGetters } from "./geolocation.getters"

export type Getters = ExampleGetters | GeolocationGetters

export const getters: GetterTree<State, State> & Getters = {
  ...geolocationGetters,
}
