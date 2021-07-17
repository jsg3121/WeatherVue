import { createStore } from "vuex"
import { GeoloGicateModuleState, geologication } from "./src/geologication"

export interface RootState {
  geologication: GeoloGicateModuleState
}

export default createStore({
  modules: {
    geologication,
  },
})
