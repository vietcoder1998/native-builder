import { ElementType } from './home'
import { Field } from './fields'
export interface Column {
  elements: Element[]
  name: string
  width: number
}

export interface Element {
  name: string
  fields: Field[]
  type: ElementType
  // foo: baz => baz[0] is value, baz[1] is type, baz[2] is options(ex: gap: [1, number, [2, 3, 4 ] )
  options?: [any, HTMLInputCustomAttributes, any[]]
}

export type Options = [any, HTMLInputCustomAttributes, any[]]

export interface Section<T> {
  columns: Column<T>[]
  name: string
  id: string | number | undefined
  quantity: Options
  gap: Options
}

export type Position = [number, number, number, number]

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

export type HTMLInputOptions =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'select'
