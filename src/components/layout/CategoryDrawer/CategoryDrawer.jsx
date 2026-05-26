import { useState } from 'react'
import { categoryDrawerData } from '../../../data/categoryDrawerData'
import CategoryDrawerHeader from './CategoryDrawerHeader'
import CategoryDrawerMenu from './CategoryDrawerMenu'
import CategoryDrawerSidebar from './CategoryDrawerSidebar'
import CategoryDrawerPanel from './CategoryDrawerPanel'
import './CategoryDrawer.scss'

function CategoryDrawer({ isOpen, onClose }) {
  const [activeMainTab, setActiveMainTab] = useState(categoryDrawerData.mainTabs[0])
  const [activeMenu, setActiveMenu] = useState(categoryDrawerData.menuItems[0])
  const [activeCategory, setActiveCategory] = useState(
    categoryDrawerData.category.sidebar[0],
  )

  if (!isOpen) {
    return null
  }

  return (
    <div className="category-drawer" role="dialog" aria-modal="true">
      <button
        type="button"
        className="category-drawer__dim"
        aria-label="카테고리 닫기"
        onClick={onClose}
      />
      <section className="category-drawer__panel">
        <CategoryDrawerHeader
          activeMainTab={activeMainTab}
          mainTabs={categoryDrawerData.mainTabs}
          onChange={setActiveMainTab}
          onClose={onClose}
        />
        <CategoryDrawerMenu
          activeMenu={activeMenu}
          menuItems={categoryDrawerData.menuItems}
          onChange={setActiveMenu}
        />
        <div className="category-drawer__content">
          <CategoryDrawerSidebar
            activeCategory={activeCategory}
            categories={categoryDrawerData.category.sidebar}
            onChange={setActiveCategory}
          />
          <CategoryDrawerPanel sections={categoryDrawerData.category.panelSections} />
        </div>
      </section>
    </div>
  )
}

export default CategoryDrawer
