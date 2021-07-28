import {
  CommitOptions,
  createStore,
  DispatchOptions,
  Store as VueStore,
} from "vuex"
import { Getters, getters } from "./src/getters"
import { State, state } from "./src/state"
import { Mutations, mutations } from "./src/mutation"
import { Actions, actions } from "./src/actions"
import createPersistedState from "vuex-persistedstate"

export const store = createStore({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()],
})

export type Store = Omit<VueStore<State>, "getters" | "commit" | "dispatch"> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

export const useStore = () => {
  return store as Store
}
