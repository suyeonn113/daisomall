function CategoryDrawerMenu({ activeMenu, menuItems, onChange }) {
  return (
    <div className="category-drawer__menu">
      {menuItems.map((item) => (
        <button
          key={item}
          type="button"
          className={item === activeMenu ? 'is-active' : ''}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default CategoryDrawerMenu
