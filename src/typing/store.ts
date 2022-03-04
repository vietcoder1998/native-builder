import { SlideElement } from './sliders'
import { FieldName } from './fields'

interface GalleryInfo {
  src: string
  title: string
  thumbnail: string
}

export interface State {
  gallery: {
    gap: number
    columns: number
    items: GalleryInfo[]
  }
  fields: Field[]
  slidePage: {
    pagination: boolean
    navigation: boolean
    itemsNumber: number
    slides: SlideElement[]
  }
}

export interface 