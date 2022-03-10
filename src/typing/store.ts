import { Field } from './fields'
import { SlideElement } from './sliders'

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
  formContact: {
    fields: Field[]
  }
  slidePage: {
    pagination: string
    navigation: string
    itemsNumber: number
    slides: SlideElement[]
  },
}
