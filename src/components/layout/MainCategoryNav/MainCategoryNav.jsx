import { NavLink } from 'react-router-dom'
import { mainCategories } from '../../../data/mainCategories'
import MainCategoryNavItem from './MainCategoryNavItem'
import './MainCategoryNav.scss'

function MainCategoryNav() {
  return (
    <nav className="main-category-nav" aria-label="주요 카테고리">
      {mainCategories.map((category) => (
        <NavLink key={category.id} to={category.path}>
          <MainCategoryNavItem label={category.label} />
        </NavLink>
      ))}
    </nav>
  )
}

export default MainCategoryNav
