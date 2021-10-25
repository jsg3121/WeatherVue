import { Ref } from "vue"

export type AtmosStatusPropType = {
  humidity: number
  windDirection: number
  windSpeed: number
}

export type CardDataType = {
  img: (path: string) => string
  alt: string
  unit: string
  description: string
  rate: number
}

export type setUpTypes = {
  cardData: Ref<Array<CardDataType>>
}
