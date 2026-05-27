import CategoryMenuGrid from './CategoryMenuGrid'
import './HomeCategoryMenuSection.scss'

const categoryMenus = [
  { id: 'beauty', label: '뷰티', image: '/images/home-category/makeup.webp' },
  { id: 'kitchen', label: '주방', image: '/images/home-category/pot.webp' },
  { id: 'bath', label: '욕실', image: '/images/home-category/cleaner.webp' },
  { id: 'storage', label: '수납', image: '/images/home-category/living-box.webp' },
  { id: 'stationery', label: '문구', image: '/images/home-category/pen.webp' },
  { id: 'interior', label: '인테리어', image: '/images/home-category/diffuser.webp' },
  { id: 'digital', label: '디지털', image: '/images/home-category/Phone.webp' },
  { id: 'food', label: '식품', image: '/images/home-category/can.webp' },
  { id: 'sports', label: '스포츠', image: '/images/home-category/dumbbell.webp' },
  { id: 'fashion', label: '패션', image: '/images/home-category/pants.webp' },
  { id: 'pet', label: '반려동물', image: '/images/home-category/pet-toy.webp' },
  { id: 'kids', label: '유아', image: '/images/home-category/kids-toy.webp' },
]

function HomeCategoryMenuSection() {
  return (
    <section className="home-section home-category-menu-section">
      <CategoryMenuGrid categories={categoryMenus} />
    </section>
  )
}

export default HomeCategoryMenuSection
