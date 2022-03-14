import { ElementType, Option, Position, Section, SelectorType } from './index';

export interface GalleryInfo {
  src: string
  title: string
  thumbnail: string
}

export interface Selector {
  type: SelectorType,
  value: Record<string, Option>,
  position: Position
}

export interface State {
  sections: Section[],
  selector: Selector,
}
