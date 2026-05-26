function ProductCardDeliveryBadges({ badges = [] }) {
  return (
    <div className="product-card__badges">
      {badges.map((badge) => (
        <span key={badge}>{badge}</span>
      ))}
    </div>
  )
}

export default ProductCardDeliveryBadges
