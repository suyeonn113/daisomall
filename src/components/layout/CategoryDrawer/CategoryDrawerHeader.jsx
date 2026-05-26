function CategoryDrawerHeader({ activeMainTab, mainTabs, onChange, onClose }) {
  return (
    <div className="category-drawer__header">
      <div className="category-drawer__tabs">
        {mainTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={tab === activeMainTab ? 'is-active' : ''}
            onClick={() => onChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <button type="button" className="category-drawer__close" onClick={onClose}>
        닫기
      </button>
    </div>
  )
}

export default CategoryDrawerHeader
