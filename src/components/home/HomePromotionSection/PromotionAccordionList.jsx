function PromotionAccordionList({ promotions }) {
  return (
    <div className="promotion-accordion-list">
      {promotions.map((promotion) => (
        <a key={promotion.id} href={`/promotion/${promotion.id}`}>
          <span>{promotion.title}</span>
          <span aria-hidden="true">›</span>
        </a>
      ))}
    </div>
  )
}

export default PromotionAccordionList
