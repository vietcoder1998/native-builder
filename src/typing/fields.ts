import { Field } from './fields'
import { key } from './../store'
export type FieldType =
  | 'text'
  | 'textarea'
  | 'checkbox'
  | 'dropdown'
  | 'button'
  | 'date'
  | 'radio'
  | 'textarea'

export enum FieldName {
  text = 'text',
  textarea = 'textarea',
  checkbox = 'checkbox',
  dropdown = 'dropdown',
  button = 'button',
  date = 'date',
  radio = 'radio',
  number = 'number'
}

export type FieldFixer = {
  title: string
  fieldType: string
  customHTMLAttributes: Object
  options?: FieldName[]
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

export type Field = {
  title?: string
  type?: FieldName
  value?: string
  customHTMLAttributes: CustomHTMLAttributes
}

export type CustomHTMLAttributes = {
  options?: string[]
  width?: number
  required?: boolean
  placeholder?: string
  description?: string
  name?: string
  checked?: Boolean
  error?: string
  key?: string | number | symbol | undefined
  showError?: boolean
  id?: string
  defaultValue?: string
}
