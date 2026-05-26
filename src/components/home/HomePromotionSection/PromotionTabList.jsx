import PromotionTabButton from './PromotionTabButton'

function PromotionTabList({ tabs }) {
  return (
    <div className="promotion-tab-list">
      {tabs.map((tab, index) => (
        <PromotionTabButton key={tab} label={tab} isActive={index === 0} />
      ))}
    </div>
  )
}

export default PromotionTabList
