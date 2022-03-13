import { Section } from './home';
import { Field } from './fields'
import { SlideElement } from './sliders'
import { BeaeCollection } from './beae-element';

interface GalleryInfo {
  src: string
  title: string
  thumbnail: string
}

export interface State {
  sections: Section[]
}
