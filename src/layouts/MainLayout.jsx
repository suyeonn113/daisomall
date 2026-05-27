import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header/Header'
import CategoryDrawer from '../components/layout/CategoryDrawer/CategoryDrawer'
import Footer from '../components/layout/Footer/Footer'
import FloatingActionButtons from '../components/layout/FloatingActionButtons/FloatingActionButtons'
import BottomTabBar from '../components/layout/BottomTabBar/BottomTabBar'
import './MainLayout.scss'

function MainLayout() {
  const [isCategoryDrawerOpen, setIsCategoryDrawerOpen] = useState(false)

  return (
    <div className="app-shell">
      <Header onMenuClick={() => setIsCategoryDrawerOpen(true)} />
      <CategoryDrawer
        isOpen={isCategoryDrawerOpen}
        onClose={() => setIsCategoryDrawerOpen(false)}
      />
      <main className="app-shell__main">
        <Outlet />
      </main>
      <Footer />
      <FloatingActionButtons />
      <BottomTabBar onCategoryClick={() => setIsCategoryDrawerOpen(true)} />
    </div>
  )
}

export default MainLayout
