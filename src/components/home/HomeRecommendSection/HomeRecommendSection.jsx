import ProductCardList from '../../common/ProductCardList/ProductCardList'
import ScrollNavigator from '../../common/ScrollNavigator/ScrollNavigator'
import SectionHeader from '../../common/SectionHeader/SectionHeader'
import { products } from '../../../data/products'
import './HomeRecommendSection.scss'
import { getRecommendProducts } from '../../../services/productService'

function HomeRecommendSection() {
  const sortedProducts = getRecommendProducts();

  return (
    <section className="home-section">
      <SectionHeader title="오늘의 추천상품" />
      <ScrollNavigator
        targetSelector=".product-card-list"
        previousLabel="이전 추천상품 보기"
        nextLabel="다음 추천상품 보기"
      >
        <ProductCardList products={sortedProducts} />
      </ScrollNavigator>
    </section>
  )
}

export default HomeRecommendSection
