import './BadgeButton.scss'

function BadgeButton({ children, isActive = false }) {
  return (
    <button type="button" className={isActive ? 'badge-button is-active' : 'badge-button'}>
      {children}
    </button>
  )
}

export default BadgeButton
