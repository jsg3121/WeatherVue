import { AtmosphereService } from "./AtmosphereEnv.service"
import { TemperaturesService } from "./Temperatures.service"
import { TimeSetService } from "./TimeSetWeather.service"
import { WeeklyWeatherService } from "./WeeklyWeather.service"

export const Service = {
  ...TemperaturesService,
  ...TimeSetService,
  ...WeeklyWeatherService,
  ...AtmosphereService,
}
