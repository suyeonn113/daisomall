import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PromotionCardList({ promotions, variant }) {
  const [activePromotionId, setActivePromotionId] = useState(promotions[0]?.id)
  const activePromotionIndex = promotions.findIndex(
    (promotion) => promotion.id === activePromotionId,
  )

  useEffect(() => {
    setActivePromotionId(promotions[0]?.id)
  }, [promotions])

  return (
    <div className={`promotion-card-list is-${variant} active-index-${activePromotionIndex}`}>
      {promotions.map((promotion) => (
        <Link
          key={promotion.id}
          to={promotion.path}
          className={
            promotion.id === activePromotionId
              ? 'promotion-card is-active'
              : 'promotion-card'
          }
          onClick={(event) => {
            if (promotion.id === activePromotionId) return

            event.preventDefault()
            setActivePromotionId(promotion.id)
          }}
        >
          <img src={promotion.image} alt="" />
          <strong>{promotion.title}</strong>
        </Link>
      ))}
    </div>
  )
}

export default PromotionCardList
