import { NavLink } from 'react-router-dom'
import { featureShortcuts } from '../../../data/featureShortcuts'
import { mainCategories } from '../../../data/mainCategories'
import {
  CategoryIcon,
  DaisoBulkOrderIcon,
  DaisoPickupIcon,
  DaisoTodayArrivalIcon,
} from '../../icons'
import { iconSize } from '../../../tokens/size'
import MainCategoryNavItem from './MainCategoryNavItem'
import './MainCategoryNav.scss'

const desktopShortcutLinks = featureShortcuts.filter((shortcut) => shortcut.id !== 'new-club')

const desktopDeliveryLinks = [
  { id: 'pickup', label: '매장픽업', path: '/category/pickup', Icon: DaisoPickupIcon },
  { id: 'today', label: '오늘배송', path: '/category/today', Icon: DaisoTodayArrivalIcon },
  { id: 'bulk', label: '대량주문', path: '/category/bulk', Icon: DaisoBulkOrderIcon },
]

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
      {desktopShortcutLinks.map((shortcut) => (
        <NavLink
          key={shortcut.id}
          to={shortcut.path}
          className={({ isActive }) =>
            `main-category-nav__link main-category-nav__link--desktop-shortcut${isActive ? ' is-active' : ''}`
          }
        >
          <MainCategoryNavItem label={shortcut.label} />
        </NavLink>
      ))}
      <div className="main-category-nav__delivery-links">
        {desktopDeliveryLinks.map(({ id, label, path, Icon }) => (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) =>
              `main-category-nav__link main-category-nav__link--delivery-service main-category-nav__link--delivery-service-${id}${isActive ? ' is-active' : ''}`
            }
          >
            <Icon size={iconSize.sm} />
            <MainCategoryNavItem label={label} />
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default MainCategoryNav
