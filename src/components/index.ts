import Header from "./src/Header.component.vue"
import Footer from "./src/Footer.component.vue"
import { GeolocationComponents } from "./src/Geolocation.component"
import { CurrentTemperaturesComponents } from "./src/CurrentWeather.component"
import { TimeSetComponent } from "./src/TimeSetWeather.component"
import { WeeklyWeatherComponent } from "./src/WeeklyWeather.component"
import { AtmosphereComponent } from "./src/Atmosphere.component"
import { LoadingImage } from "./src/utils"

export const Components = {
  Header,
  Footer,
  LoadingImage,
  ...GeolocationComponents,
  ...CurrentTemperaturesComponents,
  ...TimeSetComponent,
  ...WeeklyWeatherComponent,
  ...AtmosphereComponent,
}
