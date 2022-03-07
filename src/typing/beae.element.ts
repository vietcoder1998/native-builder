export type BeaeElement = {
  thumbnail: string
  productTitle: string
  price: number
  addToCart: boolean
}

export type ProductCollection = Record<number, BeaeElement>
