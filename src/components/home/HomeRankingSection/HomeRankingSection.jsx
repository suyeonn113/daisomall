import SectionHeader from '../../common/SectionHeader/SectionHeader'
import { products } from '../../../data/products'
import { rankingTabs } from '../../../data/rankings'
import RankingTabList from './RankingTabList'
import RankingProductList from './RankingProductList'
import './HomeRankingSection.scss'

function HomeRankingSection() {
  return (
    <section className="home-section">
      <SectionHeader title="랭킹" />
      <RankingTabList tabs={rankingTabs} />
      <RankingProductList products={products} />
    </section>
  )
}

export default HomeRankingSection
