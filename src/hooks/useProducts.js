import { useMemo, useState, useEffect } from 'react';
import { 
  getProducts,
  getRecommendedProducts,
  getNewProducts,
  getProductById,
  getProductsByIds,
  getProductsByCategory,
  getRankedProducts,
  searchProducts
} from '../services/productService';

export function useProducts() {
  const products = useMemo(()=> getProducts(), []);
  const recommendedProducts = useMemo(()=> getRecommendedProducts(), []);
  const newProducts = useMemo(() => getNewProducts(), []);
  
  /*-- searchPorducts --*/
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(()=>{
    if(!searchQuery || !searchQuery.trim()){
      setFilteredProducts([]);
      return;
    }
    const result = searchProducts(searchQuery);
    setFilteredProducts(result || []);
  },[searchQuery]);
  
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }
  

  return{
    products,
    recommendedProducts,
    newProducts,
    searchQuery,
    filteredProducts,
    handleInputChange,

    getProductById,
    getProductsByIds,
    getProductsByCategory,
    getRankedProducts,
  }
}
