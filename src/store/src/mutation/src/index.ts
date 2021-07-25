export * from "./example.mutation"
export * from "./geolocation.mutation"

import {
  geolocationMutations,
  GeologicationMutations,
} from "./geolocation.mutation"
import { ExampleMutations, exampleMutations } from "./example.mutation"
import { MutationTree } from "vuex"
import { State } from "../../state"
// import { State } from "../../state"

export type Mutations = GeologicationMutations | ExampleMutations

export const mutations: MutationTree<State> & Mutations = {
  ...geolocationMutations,
  ...exampleMutations,
}

// export type Mutations = typeof mutations
