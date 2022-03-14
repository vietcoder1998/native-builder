import { Option, Position } from './index'
export type FieldType =
  | 'text'
  | 'textarea'
  | 'checkbox'
  | 'select'
  | 'button'
  | 'date'
  | 'radio'
  | 'textarea'

export enum FieldName {
  text = 'text',
  textarea = 'textarea',
  checkbox = 'checkbox',
  select = 'select',
  button = 'button',
  date = 'date',
  radio = 'radio',
  number = 'number',
  upload = 'upload'
}

export enum Tag {
  input = 'input',
  select = 'select',
  img = 'img'
}

export enum HTMLInputCustomAttributes {
  required = 'required',
  checked = 'checked',
  placeholder = 'placeholder',
  description = 'description',
  name = 'name',
  key = 'key',
  value = 'value',
  defaultValue = 'defaultValue',
  options = 'options'
}

export type FieldOptions<T> = {
  position: Position
  options: Option[]
}

export type CustomHTMLAttributes = {
  options?: string[]
  width?: number
  required?: boolean
  placeholder?: string
  description?: string
  name: string
  checked?: Boolean
  error?: string
  key?: string | number | symbol | undefined
  showError?: boolean
  id?: string
}
