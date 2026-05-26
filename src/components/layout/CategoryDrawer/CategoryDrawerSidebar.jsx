function CategoryDrawerSidebar({ activeCategory, categories, onChange }) {
  return (
    <aside className="category-drawer__sidebar">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={category === activeCategory ? 'is-active' : ''}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </aside>
  )
}

export default CategoryDrawerSidebar
