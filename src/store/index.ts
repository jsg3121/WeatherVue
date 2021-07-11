import Vuex from "vuex"
import geologication from "./src/geologication"

export const store = new Vuex.Store({
  modules: {
    geologicationStore: geologication,
  },
})
