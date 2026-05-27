import { useEffect, useRef, useState } from 'react'
import NotificationIcon from '../../icons/NotificationIcon'
import SearchIcon from '../../icons/SearchIcon'
import { iconSize } from '../../../tokens/size'
import MainCategoryNav from '../MainCategoryNav/MainCategoryNav'
import HeaderLogo from './HeaderLogo'
import HeaderStoreButton from './HeaderStoreButton'
import HeaderSearchButton from './HeaderSearchButton'
import HeaderNotificationButton from './HeaderNotificationButton'
import './Header.scss'

function Header() {
  const [isBarHidden, setIsBarHidden] = useState(false)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const scrollGap = 4
    const hideOffset = 64

    function handleScroll() {
      const currentScrollY = window.scrollY
      const scrollDiff = currentScrollY - lastScrollYRef.current

      if (Math.abs(scrollDiff) < scrollGap) {
        return
      }

      setIsBarHidden(scrollDiff > 0 && currentScrollY > hideOffset)
      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`site-header${isBarHidden ? ' is-bar-hidden' : ''}`}>
      <div className="site-header__content">
        <div className="site-header__bar">
          <HeaderLogo />
          <HeaderStoreButton />
          <div className="site-header__actions">
            <HeaderSearchButton icon={<SearchIcon size={iconSize.sm} />} />
            <HeaderNotificationButton icon={<NotificationIcon size={iconSize.sm} />} />
          </div>
        </div>
        <MainCategoryNav />
      </div>
    </header>
  )
}

export default Header
