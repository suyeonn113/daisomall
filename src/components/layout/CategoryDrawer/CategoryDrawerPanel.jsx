function CategoryDrawerPanel({ sections }) {
  return (
    <div className="category-drawer__section-list">
      {sections.map((section) => (
        <section key={section.title} className="category-drawer__section">
          <h2>{section.title}</h2>
          <div className="category-drawer__links">
            {section.items.map((item) => (
              <a key={item} href={`/category/${encodeURIComponent(item)}`}>
                {item}
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default CategoryDrawerPanel
