import CategoryMenuGrid from './CategoryMenuGrid'
import './HomeCategoryMenuSection.scss'

const categoryMenus = [
  { id: 'beauty', label: '뷰티', image: '/images/category/makeup.webp' },
  { id: 'kitchen', label: '주방', image: '/images/category/pot.webp' },
  { id: 'bath', label: '욕실', image: '/images/category/cleaner.webp' },
  { id: 'storage', label: '수납', image: '/images/category/living-box.webp' },
  { id: 'digital', label: '디지털', image: '/images/category/Phone.webp' },
  { id: 'food', label: '식품', image: '/images/category/can.webp' },
  { id: 'sports', label: '스포츠', image: '/images/category/dumbbell.webp' },
  { id: 'fashion', label: '패션', image: '/images/category/pants.webp' },
]

function HomeCategoryMenuSection() {
  return (
    <section className="home-section home-category-menu-section">
      <CategoryMenuGrid categories={categoryMenus} />
    </section>
  )
}

export default HomeCategoryMenuSection
