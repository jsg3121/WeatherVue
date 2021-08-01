export * from "./example.mutation"
export * from "./geolocation.mutation"
export * from "./koreaWeather.mutation"

import {
  geolocationMutations,
  GeologicationMutations,
} from "./geolocation.mutation"
import { ExampleMutations, exampleMutations } from "./example.mutation"
import { MutationTree } from "vuex"
import { State } from "../../state"
import {
  koreaWeatherMutaions,
  KoreaWeatherMutaions,
} from "./koreaWeather.mutation"
// import { State } from "../../state"

export type Mutations =
  | GeologicationMutations
  | ExampleMutations
  | KoreaWeatherMutaions

export const mutations: MutationTree<State> & Mutations = {
  ...geolocationMutations,
  ...exampleMutations,
  ...koreaWeatherMutaions,
}

// export type Mutations = typeof mutations
