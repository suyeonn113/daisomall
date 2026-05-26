import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import ProductDetailPage from '../pages/ProductDetailPage'
import CategoryPage from '../pages/CategoryPage'
import SearchPage from '../pages/SearchPage'
import PromotionPage from '../pages/PromotionPage'
import NotFoundPage from '../pages/NotFoundPage'
import { PATHS } from './paths'

export const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATHS.productDetail,
        element: <ProductDetailPage />,
      },
      {
        path: PATHS.category,
        element: <CategoryPage />,
      },
      {
        path: PATHS.search,
        element: <SearchPage />,
      },
      {
        path: PATHS.promotion,
        element: <PromotionPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
