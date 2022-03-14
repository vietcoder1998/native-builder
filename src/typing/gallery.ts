import { Option } from "./index"

export interface GalleryItem {
  src: string
  alt?: string
  thumbnail: string
  title: string
  index?: number
  options: Option
}
