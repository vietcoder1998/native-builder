import { ElementType, Option, Position, Section, SelectorType, OptionType } from './index';
import { CustomHTMLAttributes } from './fields';

export interface GalleryInfo {
  src: string
  title: string
  thumbnail: string
}

export interface Selector {
  type?: SelectorType,
  position: Position
  options?: Record<OptionType, Option>,
  customHTMLAttributes?: CustomHTMLAttributes,
}

export interface State {
  sections: Section[],
  selector: Selector,
}
