import Header from "./src/Header.component.vue"
import Footer from "./src/Footer.component.vue"
import { GeolocationComponents } from "./src/Geolocation.component"
import { CurrentTemperaturesComponents } from "./src/CurrentWeather.component"

export const Components = {
  Header,
  Footer,
  ...GeolocationComponents,
  ...CurrentTemperaturesComponents,
}
