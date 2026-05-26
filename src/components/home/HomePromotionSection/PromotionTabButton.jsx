function PromotionTabButton({ label, isActive }) {
  return (
    <button
      type="button"
      className={isActive ? 'promotion-tab-button is-active' : 'promotion-tab-button'}
    >
      {label}
    </button>
  )
}

export default PromotionTabButton
