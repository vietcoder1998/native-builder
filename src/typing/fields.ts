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
  value?: unknown
  options: string[] | undefined
  width: number | undefined
  required: boolean | undefined
  placeholder: string | undefined
  description: string | undefined
  name: string | undefined
}
