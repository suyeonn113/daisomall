function PromotionBannerCard({ promotion }) {
  return (
    <article className="promotion-banner-card">
      <img src={promotion.image} alt="" />
      <strong>{promotion.title}</strong>
    </article>
  )
}

export default PromotionBannerCard
