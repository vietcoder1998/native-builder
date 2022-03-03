export type FieldType =
  | "text"
  | "textarea"
  | "checkbox"
  | "dropdown"
  | "button"
  | "date"
  | "radio"
  | "textarea";

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
export type Field = {
  title: string
  type: FieldName
  value: string
  options: string[]
  width: number
  required: boolean
  placeholder: string
  description: string
  name: string
  checked?: Boolean
  error: string
  key: string | number | symbol | undefined
  showError: boolean
  id: string
}
