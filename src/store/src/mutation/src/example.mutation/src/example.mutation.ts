import { exampleStateType } from "@/store/src/state"
import { MutationTree } from "vuex"
import { ExampleMutationTypes } from "./types"

export type ExampleMutations<S = exampleStateType> = {
  [ExampleMutationTypes.SET_COUNTER](state: S, payload: number): void
}

export const exampleMutations: MutationTree<exampleStateType> &
  ExampleMutations = {
  [ExampleMutationTypes.SET_COUNTER](state, payload: number) {
    state.counter = payload
  },
}
