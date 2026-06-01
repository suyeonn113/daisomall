import { getProducts } from '../services/productService'

export function useProducts() {
  const products = getProducts()
  return {products}
}
