import CategoryIcon from '../../icons/CategoryIcon'
import NotificationIcon from '../../icons/NotificationIcon'
import SearchIcon from '../../icons/SearchIcon'
import { iconSize } from '../../../tokens/size'
import MainCategoryNav from '../MainCategoryNav/MainCategoryNav'
import HeaderLogo from './HeaderLogo'
import HeaderStoreButton from './HeaderStoreButton'
import HeaderSearchButton from './HeaderSearchButton'
import HeaderNotificationButton from './HeaderNotificationButton'
import HeaderMenuButton from './HeaderMenuButton'
import './Header.scss'

function Header({ onMenuClick }) {
  return (
    <header className="site-header">
      <div className="site-header__bar">
        <HeaderMenuButton onClick={onMenuClick} icon={<CategoryIcon size={iconSize.sm} />} />
        <HeaderLogo />
        <HeaderStoreButton />
        <div className="site-header__actions">
          <HeaderSearchButton icon={<SearchIcon size={iconSize.sm} />} />
          <HeaderNotificationButton icon={<NotificationIcon size={iconSize.sm} />} />
        </div>
      </div>
      <MainCategoryNav />
    </header>
  )
}

export default Header
