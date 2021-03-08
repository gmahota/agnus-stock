import { Product } from '../base/product'

export default class Stock {
  id: number
  date: Date
  product: string
  quantity: number
  type: string
  Product?: Product
}
