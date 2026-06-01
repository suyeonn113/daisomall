import { products } from '../data/products'

export function getProducts() {
  return products
}

export function getProductById(productId) {
  return products.find((product) => product.id === Number(productId))
}

export function getProductsByIds(productIds) {
  if (!productIds || productIds.length === 0) return []
  return products.filter((product) => productIds.includes(product.id))
}

export function getProductsByCategory(categoryId) {
  if(!categoryId) return products
  return products.filter((product) => product.categoryId === categoryId)
}

export function getRecommendProducts(){
  const recommend = products.filter(product => product.isRecommended === true);
  return recommend.toSorted((a, b) => a.recommendOrder - b.recommendOrder);
}

export function getNewProducts(){
  return products.filter((product) => product.isNew === true);
}

export function getProductsBySearch(keyword){
  if(!keyword || !keyword.trim()) return products;
  const trimKeyword = keyword.trim().toLowerCase();

  return products.filter((product) => 
    product.name.toLowerCase().includes(trimKeyword))
}