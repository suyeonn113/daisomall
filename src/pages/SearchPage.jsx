import { useState, useEffect } from 'react'
import { searchProducts } from '../services/productService'
import ProductCardList from '../components/common/ProductCardList/ProductCardList'
import './SearchPage.scss'

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const result = searchProducts(searchQuery);
    setFilteredProducts(result);
  },[searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <section className='page-placeholder'>
      <h1>검색</h1>
      <div className='search-container'>
        <input 
        type='text'
        value={searchQuery}
        onChange={handleInputChange}
        className='search-input'
        />
      </div>

      <div className='search-result'>
        {filteredProducts.length > 0 ? (
          <ProductCardList products={filteredProducts}/>
        ):(
          <p className='no-result'>검색 결과가 없습니다.</p>
        )}
      </div>
    </section>
  )
}

export default SearchPage
