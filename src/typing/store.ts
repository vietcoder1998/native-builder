import { Field } from './fields'
import { SlideElement } from './sliders'
import { BeaeCollection } from './beae-element';

interface GalleryInfo {
  src: string
  title: string
  thumbnail: string
}

export interface State {
  gallery: {
    gap: number
    column: number
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
  collections: {
    gap: number
    column: number
    items: BeaeCollection[]
  }
}
