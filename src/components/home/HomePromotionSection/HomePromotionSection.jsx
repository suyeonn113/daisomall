import SectionHeader from '../../common/SectionHeader/SectionHeader'
import { promotions } from '../../../data/promotions'
import PromotionTabList from './PromotionTabList'
import PromotionBannerCard from './PromotionBannerCard'
import PromotionAccordionList from './PromotionAccordionList'
import './HomePromotionSection.scss'

function HomePromotionSection() {
  const [mainPromotion, ...items] = promotions

  return (
    <section className="home-section">
      <SectionHeader title="기획전" />
      <PromotionTabList tabs={['카테고리', '인기급상승', '구매급상승']} />
      <PromotionBannerCard promotion={mainPromotion} />
      <PromotionAccordionList promotions={items} />
    </section>
  )
}

export default HomePromotionSection
