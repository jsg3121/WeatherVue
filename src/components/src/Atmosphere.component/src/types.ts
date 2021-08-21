import { Ref } from "vue"

export type PropsType = {
  reh: number
  wsd: number
  vec: number
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
