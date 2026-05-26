import { getProducts } from '../services/productService'

export function useRankingProducts() {
  return getProducts()
}
