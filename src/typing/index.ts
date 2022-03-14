import { CustomHTMLAttributes } from './fields'

// option[0] is value, options[1] is type of field in tag,  options[2] is tag, options[3] is selection
// ex: { gap: [ 1, 'number', 'input', [] ]} => none options selected
// ex: { required: [ false, 'checkbox, 'input', [ 'title1', 'title2'] ]  }
// tag is required: Required => 'input' | 'select' | 'img' | h1, ... ( HTMLElement )
// field of tag: Required => 'checkbox' | 'text' | 'number' | 'date' ... ( HTMLInputValue)

export type FieldType =
  | 'text'
  | 'textarea'
  | 'checkbox'
  | 'select'
  | 'button'
  | 'date'
  | 'radio'
  | 'textarea'
  | 'range'
  | 'upload'
  | 'number'

export type ElType = 'gallery' | 'form' | 'slide' | 'unknown'
export type SelectorType = 'element' | 'section' | 'column' | 'field'
export type Tag = 'img' | 'div' | 'input' | 'h1' | 'h2' | 'button' | 'select'
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

export type OptionType =
  | 'gap'
  | 'col'
  | 'type'
  | 'title'
  | 'src'
  | 'required'
  | 'tag'
  | 'quantity'

export type Option = [
  string | number,
  Tag,
  HTMLInputOptions,
  string[] | number[] | boolean[] | undefined
]

export interface NestedComponent<T> {
  type: T
  options: Record<OptionType, Option>
  name: string
  id: string | number
}
export interface Column extends NestedComponent<any> {
  elements: Element[]
}

export interface Field extends NestedComponent<FieldType> {
  value?: string | number | boolean
  tag: Tag
  customHTMLAttributes: CustomHTMLAttributes
}

// foo: baz => baz[0] is value, baz[1] is type, baz[2] is options(ex: gap: [1, number, [2, 3, 4 ]] )
export interface Element extends NestedComponent<ElType> {
  fields: Field[]
}

export interface Section extends NestedComponent<any> {
  columns: Column[]
}

export type Position = [number, number, number, number]
