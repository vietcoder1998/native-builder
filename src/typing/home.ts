import { ElementType } from './home';
import { Field } from './fields'
export interface Column<T> {
  elements: Array<T>
}

export interface Element {
  fields: Field[],
  type: ElementType
}

export interface Section {
  columns: Columns[]
  name: string
  id: string | number | undefined
  quantity: number,
  gap: number
}

export interface Field {
  name: string
}

export enum ElementType {
  gallery = 'gallery',
  form = 'form',
  slide = 'slide',
  default = 'unknown'
}
