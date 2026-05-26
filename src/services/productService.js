import { products } from '../data/products'

export function getProducts() {
  return products
}

export function getProductById(productId) {
  return products.find((product) => product.id === productId)
}

export function getProductsByCategory() {
  return products
}
