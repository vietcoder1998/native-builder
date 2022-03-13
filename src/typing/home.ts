import { ElementType } from './home';
import { Field } from './fields'
export interface Column<T> {
  elements: Array<T>
  name: string,
  width: number,
}

export interface Element<T> {
  name: string
  fields: Field[] | T[]
  type: ElementType
  options?: Record<Symbol, any>
}

export interface Section<T> {
  columns: Column<T>[]
  name: string
  id: string | number | undefined
  quantity: number
  gap: number,
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

export enum SelectorType {
  element = 'element',
  section = 'section',
  column = 'column',
  field = 'field'
}