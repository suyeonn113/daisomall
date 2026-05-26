import BadgeButton from '../../common/BadgeButton/BadgeButton'

function RankingTabList({ tabs }) {
  return (
    <div className="ranking-tab-list">
      {tabs.map((tab, index) => (
        <BadgeButton key={tab} isActive={index === 0}>
          {tab}
        </BadgeButton>
      ))}
    </div>
  )
}

export default RankingTabList
