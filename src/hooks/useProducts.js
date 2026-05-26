import { getProducts } from '../services/productService'

export function useProducts() {
  return getProducts()
}
