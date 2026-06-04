import { useProducts } from '../hooks/useProducts'
import ProductCardList from '../components/common/ProductCardList/ProductCardList'
import './SearchPage.scss'

function SearchPage() {
  const { searchQuery, filteredProducts, handleInputChange } = useProducts();

  return (
    <section className='page-placeholder'>
      <div className='search-container'>
        <input 
        type='text'
        name='search-input'
        value={searchQuery}
        onChange={handleInputChange}
        className='search-input'
        spellCheck={false}
        placeholder='검색어를 입력하세요'
        />
      </div>

      <div className='search-result'>
        {filteredProducts.length > 0 ? (
          <ProductCardList products={filteredProducts}/>
        ): searchQuery === '' ? (null):(<p className='no-result'>검색 결과가 없습니다.</p>)}
      </div>
    </section>
  )
}

export default SearchPage
