import Header from "./src/Header.component.vue"
import Footer from "./src/Footer.component.vue"
import { GeolocationComponents } from "./src/Geolocation.component"
import { CurrentTemperaturesComponents } from "./src/CurrentWeather.component"
import { TimeSetComponent } from "./src/TimeSetWeather.component"
import { WeeklyWeatherComponent } from "./src/WeeklyWeather.component"

export const Components = {
  Header,
  Footer,
  ...GeolocationComponents,
  ...CurrentTemperaturesComponents,
  ...TimeSetComponent,
  ...WeeklyWeatherComponent,
}
