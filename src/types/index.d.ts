import { Store } from "../store"

declare module "@vue/reuntime-core" {
  interface ComponentCustomProperties {
    $store: Store
  }
}
