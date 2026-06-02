import { useMemo } from 'react';
import { 
  getProducts,
  getRecommendedProducts,
  getNewProducts,

  getProductById,
  getProductsByIds,
  getProductsByCategory,
  searchProducts,
  getRankedProducts
} from '../services/productService';

export function useProducts() {
  const products = useMemo(()=> getProducts(), []);
  const recommendedProducts = useMemo(()=> getRecommendedProducts(), []);
  const newProducts = useMemo(() => getNewProducts(), []);

  return{
    products,
    recommendedProducts,
    newProducts,

    getProductById,
    getProductsByIds,
    getProductsByCategory,
    searchProducts,
    getRankedProducts
  }
}
