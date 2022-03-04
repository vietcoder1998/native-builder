import { FieldType, FieldFixer } from './fields'
export type DynamicInputField = FieldFixer

export enum DynamicSupportHTMLType {
  input = 'input',
  select = 'select',
  textarea = 'textarea'
}
