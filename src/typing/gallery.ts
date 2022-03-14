import { Option } from "./index"

export interface GalleryItem {
  index?: number
  name?: string
  options: Record<string, Option>
}
