export type FieldType =
  | "text"
  | "textarea"
  | "checkbox"
  | "dropdown"
  | "button"
  | "date"
  | "radio"
  | "textarea";
  
export type Field = {
  title?: string;
  type?: FieldType;
  value?: unknown;
  options?: string[];
  width?: number;
  required?: boolean;
  placeholder?: string;
  description?: string;
  name?: string;
};
