import { exampleStateType } from "@/store/src/state"
import { GetterTree } from "vuex"

export type ExampleGetters = {
  doubledCounter(state: exampleStateType): number
}

export const exampleGetters: GetterTree<exampleStateType, exampleStateType> &
  ExampleGetters = {
  doubledCounter: (state) => {
    return state.counter * 2
  },
}
