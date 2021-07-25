import { ExampleMutations, ExampleMutationTypes } from "@/store/src/mutation"
import { exampleStateType } from "@/store/src/state"
import { ActionContext, ActionTree } from "vuex"
import { ExampleActionTypes } from "./types"

type ArgumentedActionContext = {
  commit<K extends keyof ExampleMutations>(
    key: K,
    payload: Parameters<ExampleMutations[K]>[1]
  ): ReturnType<ExampleMutations[K]>
} & Omit<ActionContext<exampleStateType, exampleStateType>, "commit">

export interface ExampleActions {
  [ExampleActionTypes.GET_COUNTER](
    { commit }: ArgumentedActionContext,
    payload: number
  ): Promise<number>
}

export const exampleAction: ActionTree<exampleStateType, exampleStateType> &
  ExampleActions = {
  [ExampleActionTypes.GET_COUNTER]({ commit }) {
    return new Promise((res) => {
      setTimeout(() => {
        const data = 256
        commit(ExampleMutationTypes.SET_COUNTER, data)
        res(data)
      }, 500)
    })
  },
}
