import { useProducts } from '../hooks/useProducts'
import SectionHeader from '../components/common/SectionHeader/SectionHeader';
import ScrollNavigator from '../components/common/ScrollNavigator/ScrollNavigator';
import ProductCardList from '../components/common/ProductCardList/ProductCardList'
import { ArrowIcon } from '../components/icons';
import { iconSize } from '../tokens/size';
import './SearchPage.scss'

function SearchPage() {
  const { searchQuery, filteredProducts, handleInputChange, recommendedProducts } = useProducts();

  return (
    <section className='search-page-placeholder'>
      <div className='search-container'>
         <div className='arrowIcon-box' onClick={()=> window.history.back()} >
          <ArrowIcon size={iconSize.sm}/>
          </div>
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
        ): searchQuery === '' ? (
          <div className='recommend'>
            <SectionHeader title="이런 상품은 어떠세요?" />
            <ScrollNavigator
              targetSelector=".product-card-list"
              previousLabel="이전 추천상품 보기"
              nextLabel="다음 추천상품 보기"
              >
            <ProductCardList products={recommendedProducts} />
            </ScrollNavigator>
          </div>
      ):
        (<p className='no-result'>검색 결과가 없습니다.</p>)}
      </div>


    </section>
  )
}

export default SearchPage
