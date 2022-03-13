import { ElementType } from './home'
import { Field } from './fields'

export type Option = [any, HTMLInputCustomAttributes, any[]]

export interface Column {
  elements: Element[]
  name: string
  width: number
}

export type Field<T> = {
  title?: string
  type?: FieldName
  value?: T
  index: number
  customHTMLAttributes: CustomHTMLAttributes
  options: Option[]
}

export interface Element {
  name: string
  fields: Field[]
  type: ElementType
  // foo: baz => baz[0] is value, baz[1] is type, baz[2] is options(ex: gap: [1, number, [2, 3, 4 ] )
  options?: Option[]
}

export interface Section {
  columns: Column[]
  name: string
  id: string | number | undefined
  quantity: Option[]
  gap: Option[]
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
