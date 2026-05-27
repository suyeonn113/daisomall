import { useMemo, useState } from 'react'
import SectionHeader from '../../common/SectionHeader/SectionHeader'
import { products } from '../../../data/products'
import { rankingCategories } from '../../../data/rankings'
import RankingTabList from './RankingTabList'
import RankingProductList from './RankingProductList'
import './HomeRankingSection.scss'

function HomeRankingSection() {
  const [activeCategoryId, setActiveCategoryId] = useState(rankingCategories[0].id)
  const activeCategory = rankingCategories.find(
    (category) => category.id === activeCategoryId,
  ) ?? rankingCategories[0]
  const rankedProducts = useMemo(() => {
    return products
      .filter((product) => product.categoryId === activeCategory.id)
      .sort((a, b) => a.rank - b.rank)
  }, [activeCategory])

  return (
    <section className="home-section">
      <SectionHeader title="랭킹" />
      <RankingTabList
        activeTabId={activeCategoryId}
        tabs={rankingCategories}
        onTabChange={setActiveCategoryId}
      />
      <RankingProductList products={rankedProducts} />
    </section>
  )
}

export default HomeRankingSection
