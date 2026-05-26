import ProductCardList from '../../common/ProductCardList/ProductCardList'
import SectionHeader from '../../common/SectionHeader/SectionHeader'
import { products } from '../../../data/products'
import './HomeRecommendSection.scss'

function HomeRecommendSection() {
  return (
    <section className="home-section">
      <SectionHeader title="오늘의 추천상품" />
      <ProductCardList products={products} />
    </section>
  )
}

export default HomeRecommendSection
