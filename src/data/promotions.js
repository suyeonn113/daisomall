const promotionImageFolders = {
  category: '/images/home-promotion/category',
  popular: '/images/home-promotion/popular',
  purchase: '/images/home-promotion/purchase',
}

// 파일명 추천 규칙:
// - 카테고리별 폴더 안에서 탭 id + 두 자리 번호 사용: popular-01.webp, purchase-01.webp
// - category 탭도 이미지가 늘어나면 /home-promotion/category/category-01.webp 구조 권장
// - id는 상세 주소가 되므로 영문 소문자와 하이픈만 사용: popular-new-item
const createPromotion = (groupId, promotion) => ({
  ...promotion,
  image: `${promotionImageFolders[groupId]}/${promotion.imageFile}`,
  path: `/promotion/${promotion.id}`,
})

const createPromotionGroup = (groupId, promotions) =>
  promotions.map((promotion) => createPromotion(groupId, promotion))

export const promotionTabs = [
  { id: 'category', label: '카테고리' },
  { id: 'popular', label: '인기급상승' },
  { id: 'purchase', label: '구매급상승' },
]

export const promotionGroups = {
  category: createPromotionGroup('category', [
    {
      id: 'category-pure',
      title: '1개 100원 천원 생리대',
      subtitle: '카테고리 기획전',
      imageFile: 'category-01.webp',
    },
    {
      id: 'category-hair',
      title: '가성비로 완성하는 헤어 스타일링',
      subtitle: '카테고리 기획전',
      imageFile: 'category-02.webp',
    },
    {
      id: 'category-solution',
      title: '비듬 고민별 맞춤 솔루션',
      subtitle: '카테고리 기획전',
      imageFile: 'category-03.webp',
    },
    {
      id: 'category-pure',
      title: '1개 100원 천원 생리대',
      subtitle: '카테고리 기획전',
      imageFile: 'category-01.webp',
    },
    {
      id: 'category-hair',
      title: '가성비로 완성하는 헤어 스타일링',
      subtitle: '카테고리 기획전',
      imageFile: 'category-02.webp',
    },
    {
      id: 'category-solution',
      title: '비듬 고민별 맞춤 솔루션',
      subtitle: '카테고리 기획전',
      imageFile: 'category-03.webp',
    },
    {
      id: 'category-pure',
      title: '1개 100원 천원 생리대',
      subtitle: '카테고리 기획전',
      imageFile: 'category-01.webp',
    },
    {
      id: 'category-hair',
      title: '가성비로 완성하는 헤어 스타일링',
      subtitle: '카테고리 기획전',
      imageFile: 'category-02.webp',
    },
    {
      id: 'category-solution',
      title: '비듬 고민별 맞춤 솔루션',
      subtitle: '카테고리 기획전',
      imageFile: 'category-03.webp',
    },
  ]),
  popular: createPromotionGroup('popular', [
    {
      id: 'popular-new',
      title: '5월 4주차 신상 기획전',
      subtitle: '54,816명 봤어요',
      imageFile: 'popular-01.webp',
      ranking: {
        rank: 1,
        direction: 'up', // up | down | same
        change: 1,
      },
    },
    {
      id: 'popular-daily',
      title: '한국의 전통 일상에 스며들다',
      subtitle: '73,052명 봤어요',
      imageFile: 'popular-02.webp',
      ranking: {
        rank: 2,
        direction: 'same',
        change: 0,
      },
    },
    {
      id: 'popular-running',
      title: '러닝 웨어 신상 출시',
      subtitle: '200,020명 봤어요',
      imageFile: 'popular-03.webp',
      ranking: {
        rank: 3,
        direction: 'down',
        change: -1,
      },
    },
    {
      id: 'popular-weekly',
      title: '이번 주 인기 기획전',
      subtitle: '128,420명 보았어요',
      imageFile: 'popular-01.webp',
      ranking: {
        rank: 4,
        direction: 'same',
        change: 0,
      },
    },
    {
      id: 'popular-season',
      title: '시즌 신상 모음',
      subtitle: '95,340명 보았어요',
      imageFile: 'popular-02.webp',
      ranking: {
        rank: 5,
        direction: 'same',
        change: 0,
      },
    },
    {
      id: 'popular-new',
      title: '5월 4주차 신상 기획전',
      subtitle: '54,816명 봤어요',
      imageFile: 'popular-01.webp',
      ranking: {
        rank: 6,
        direction: 'up', // up | down | same
        change: 1,
      },
    },
    {
      id: 'popular-daily',
      title: '한국의 전통 일상에 스며들다',
      subtitle: '73,052명 봤어요',
      imageFile: 'popular-02.webp',
      ranking: {
        rank: 7,
        direction: 'same',
        change: 0,
      },
    },
    {
      id: 'popular-running',
      title: '러닝 웨어 신상 출시',
      subtitle: '200,020명 봤어요',
      imageFile: 'popular-03.webp',
      ranking: {
        rank: 8,
        direction: 'down',
        change: -1,
      },
    },
    {
      id: 'popular-weekly',
      title: '이번 주 인기 기획전',
      subtitle: '128,420명 보았어요',
      imageFile: 'popular-01.webp',
      ranking: {
        rank: 9,
        direction: 'same',
        change: 0,
      },
    },
    {
      id: 'popular-season',
      title: '시즌 신상 모음',
      subtitle: '95,340명 보았어요',
      imageFile: 'popular-02.webp',
      ranking: {
        rank: 10,
        direction: 'same',
        change: 0,
      },
    },
    {
      id: 'popular-new',
      title: '5월 4주차 신상 기획전',
      subtitle: '54,816명 봤어요',
      imageFile: 'popular-01.webp',
      ranking: {
        rank: 11,
        direction: 'up', // up | down | same
        change: 1,
      },
    },
    {
      id: 'popular-daily',
      title: '한국의 전통 일상에 스며들다',
      subtitle: '73,052명 봤어요',
      imageFile: 'popular-02.webp',
      ranking: {
        rank: 12,
        direction: 'same',
        change: 0,
      },
    },
    {
      id: 'popular-running',
      title: '러닝 웨어 신상 출시',
      subtitle: '200,020명 봤어요',
      imageFile: 'popular-03.webp',
      ranking: {
        rank: 13,
        direction: 'down',
        change: -1,
      },
    },
    {
      id: 'popular-weekly',
      title: '이번 주 인기 기획전',
      subtitle: '128,420명 보았어요',
      imageFile: 'popular-01.webp',
      ranking: {
        rank: 14,
        direction: 'same',
        change: 0,
      },
    },
    {
      id: 'popular-season',
      title: '시즌 신상 모음',
      subtitle: '95,340명 보았어요',
      imageFile: 'popular-02.webp',
      ranking: {
        rank: 15,
        direction: 'same',
        change: 0,
      },
    },
  ]),
  purchase: createPromotionGroup('purchase', [
    {
      id: 'purchase-storage',
      title: '정리 수납 필수템 모음',
      subtitle: '구매 급상승',
      imageFile: 'purchase-01.webp',
      ranking: {
        rank: 1,
        direction: 'same',  
        change: 0,
      },
    },
    {
      id: 'purchase-kitchen',
      title: '주방 인기템 다시보기',
      subtitle: '구매 급상승',
      imageFile: 'purchase-02.webp',
      ranking: {
        rank: 2,
        direction: 'up',
        change: 1,
      },
    },
    {
      id: 'purchase-bath',
      title: '욕실 청소 해결템',
      subtitle: '구매 급상승',
      imageFile: 'purchase-03.webp',
      ranking: {
        rank: 3,
        direction: 'same',
        change: 0,
      },
    },
    {
      id: 'purchase-living',
      title: '생활 인기 상품',
      subtitle: '구매 급상승',
      imageFile: 'purchase-01.webp',
      ranking: {
        rank: 4,
        direction: 'down',
        change: -1,
      },
    },
    {
      id: 'purchase-beauty',
      title: '뷰티 급상승템',
      subtitle: '구매 급상승',
      imageFile: 'purchase-02.webp',
      ranking: {
        rank: 5,
        direction: 'same',
        change: 0,
      },
    },
    {
      id: 'purchase-storage',
      title: '정리 수납 필수템 모음',
      subtitle: '구매 급상승',
      imageFile: 'purchase-01.webp',
      ranking: {
        rank: 6,
        direction: 'same',  
        change: 0,
      },
    },
    {
      id: 'purchase-kitchen',
      title: '주방 인기템 다시보기',
      subtitle: '구매 급상승',
      imageFile: 'purchase-02.webp',
      ranking: {
        rank: 7,
        direction: 'up',
        change: 1,
      },
    },
    {
      id: 'purchase-bath',
      title: '욕실 청소 해결템',
      subtitle: '구매 급상승',
      imageFile: 'purchase-03.webp',
      ranking: {
        rank: 8,
        direction: 'same',
        change: 0,
      },
    },
    {
      id: 'purchase-living',
      title: '생활 인기 상품',
      subtitle: '구매 급상승',
      imageFile: 'purchase-01.webp',
      ranking: {
        rank: 9,
        direction: 'down',
        change: -1,
      },
    },
    {
      id: 'purchase-beauty',
      title: '뷰티 급상승템',
      subtitle: '구매 급상승',
      imageFile: 'purchase-02.webp',
      ranking: {
        rank: 10,
        direction: 'same',
        change: 0,
      },
    },
    {
      id: 'purchase-storage',
      title: '정리 수납 필수템 모음',
      subtitle: '구매 급상승',
      imageFile: 'purchase-01.webp',
      ranking: {
        rank: 11,
        direction: 'same',  
        change: 0,
      },
    },
    {
      id: 'purchase-kitchen',
      title: '주방 인기템 다시보기',
      subtitle: '구매 급상승',
      imageFile: 'purchase-02.webp',
      ranking: {
        rank: 12,
        direction: 'up',
        change: 1,
      },
    },
    {
      id: 'purchase-bath',
      title: '욕실 청소 해결템',
      subtitle: '구매 급상승',
      imageFile: 'purchase-03.webp',
      ranking: {
        rank: 13,
        direction: 'same',
        change: 0,
      },
    },
    {
      id: 'purchase-living',
      title: '생활 인기 상품',
      subtitle: '구매 급상승',
      imageFile: 'purchase-01.webp',
      ranking: {
        rank: 14,
        direction: 'down',
        change: -1,
      },
    },
    {
      id: 'purchase-beauty',
      title: '뷰티 급상승템',
      subtitle: '구매 급상승',
      imageFile: 'purchase-02.webp',
      ranking: {
        rank: 15,
        direction: 'same',
        change: 0,
      },
    },
  ]),
}
