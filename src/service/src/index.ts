import { AtmosphereService } from "./Atmosphere.service"
import { CurrentStatusService } from "./CurrentStatus.service"
import { TimeSetService } from "./TimeSetWeather.service"
import { WeeklyWeatherService } from "./WeeklyWeather.service"

export const Service = {
  ...CurrentStatusService,
  ...TimeSetService,
  ...WeeklyWeatherService,
  ...AtmosphereService,
}
