export * from "./example.mutation"
export * from "./geolocation.mutation"
export * from "./koreaWeather.mutation"
export * from "./personal.mutation"

import { MutationTree } from "vuex"
import { State } from "../../state"
import { ExampleMutations, exampleMutations } from "./example.mutation"
import {
  geolocationMutations,
  GeologicationMutations,
} from "./geolocation.mutation"
import {
  koreaWeatherMutaions,
  KoreaWeatherMutaions,
} from "./koreaWeather.mutation"
import {
  openWeatherMutations,
  OpenWeatherMutationTypes,
} from "./openWeather.mutation"
import {
  personalOptionsMutations,
  PersonalOptionsMutationsType,
} from "./personal.mutation"
// import { State } from "../../state"

export type Mutations =
  | GeologicationMutations
  | ExampleMutations
  | KoreaWeatherMutaions
  | PersonalOptionsMutationsType
  | OpenWeatherMutationTypes

export const mutations: MutationTree<State> & Mutations = {
  ...geolocationMutations,
  ...exampleMutations,
  ...koreaWeatherMutaions,
  ...personalOptionsMutations,
  ...openWeatherMutations,
}

// export type Mutations = typeof mutations
