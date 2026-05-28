import { CloseIcon } from '../../icons'

function CategoryDrawerHeader({ activeMainTab, mainTabs, onChange, onClose }) {
  return (
    <div className="category-drawer__header">
      <div className="category-drawer__tabs">
        {mainTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={tab.id === activeMainTab ? 'is-active' : ''}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
            {tab.badge && <span className="category-drawer__badge">{tab.badge}</span>}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="category-drawer__close"
        aria-label="카테고리 닫기"
        onClick={onClose}
      >
        <CloseIcon />
      </button>
    </div>
  )
}

export default CategoryDrawerHeader
