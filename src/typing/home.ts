export interface Column<T> {
  elements: Array<T>
}

export interface Element {
  fields: any
}

export interface Section {
  columns: Columns[]
  name: string
  id: string | number | undefined
}

export interface Field {
  name: string
}
