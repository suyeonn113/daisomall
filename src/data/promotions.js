const promotionImages = [
  '/images/home-promotion/ex01.webp',
  '/images/home-promotion/ex02.webp',
  '/images/home-promotion/ex03.webp',
]

export const promotionTabs = [
  { id: 'category', label: '카테고리' },
  { id: 'popular', label: '인기급상승' },
  { id: 'purchase', label: '구매급상승' },
]

export const promotionGroups = {
  category: [
    {
      id: 'category-pure',
      title: '1개 100원 천원 생리대',
      subtitle: '카테고리 기획전',
      image: promotionImages[0],
      path: '/promotion/category-pure',
    },
    {
      id: 'category-hair',
      title: '가성비로 완성하는 헤어 스타일링',
      subtitle: '카테고리 기획전',
      image: promotionImages[1],
      path: '/promotion/category-hair',
    },
    {
      id: 'category-solution',
      title: '비듬 고민별 맞춤 솔루션',
      subtitle: '카테고리 기획전',
      image: promotionImages[2],
      path: '/promotion/category-solution',
    },
  ],
  popular: [
    {
      id: 'popular-new',
      title: '5월 4주차 신상 기획전',
      subtitle: '54,816명 봤어요',
      image: promotionImages[0],
      path: '/promotion/popular-new',
    },
    {
      id: 'popular-daily',
      title: '한국의 전통 일상에 스며들다',
      subtitle: '73,052명 봤어요',
      image: promotionImages[1],
      path: '/promotion/popular-daily',
    },
    {
      id: 'popular-running',
      title: '러닝 웨어 신상 출시',
      subtitle: '200,020명 봤어요',
      image: promotionImages[2],
      path: '/promotion/popular-running',
    },
  ],
  purchase: [
    {
      id: 'purchase-storage',
      title: '정리 수납 필수템 모음',
      subtitle: '구매 급상승',
      image: promotionImages[0],
      path: '/promotion/purchase-storage',
    },
    {
      id: 'purchase-kitchen',
      title: '주방 인기템 다시보기',
      subtitle: '구매 급상승',
      image: promotionImages[1],
      path: '/promotion/purchase-kitchen',
    },
    {
      id: 'purchase-bath',
      title: '욕실 청소 해결템',
      subtitle: '구매 급상승',
      image: promotionImages[2],
      path: '/promotion/purchase-bath',
    },
  ],
}
