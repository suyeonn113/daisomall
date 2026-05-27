import { NavLink } from 'react-router-dom'
import { mainCategories } from '../../../data/mainCategories'
import CategoryIcon from '../../icons/CategoryIcon'
import { iconSize } from '../../../tokens/size'
import MainCategoryNavItem from './MainCategoryNavItem'
import './MainCategoryNav.scss'

function MainCategoryNav({ onCategoryClick }) {
  return (
    <nav className="main-category-nav" aria-label="주요 카테고리">
      <button
        type="button"
        className="main-category-nav__link main-category-nav__link--category-action"
        onClick={onCategoryClick}
      >
        <CategoryIcon size={iconSize.sm} />
        <MainCategoryNavItem label="카테고리" />
      </button>
      {mainCategories.map((category) => (
        <NavLink
          key={category.id}
          to={category.path}
          className={({ isActive }) =>
            `main-category-nav__link main-category-nav__link--${category.id}${isActive ? ' is-active' : ''}`
          }
        >
          <MainCategoryNavItem label={category.label} />
        </NavLink>
      ))}
    </nav>
  )
}

export default MainCategoryNav
