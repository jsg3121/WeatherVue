import { useStore } from "@/store"

const store = useStore()

export const getTimeSetWeather = async () => {
  console.log(store.state.currentTemperature)
}
