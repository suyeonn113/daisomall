import SectionHeader from '../../common/SectionHeader/SectionHeader'
import DeliveryServiceCard from './DeliveryServiceCard'
import './HomeDeliverySection.scss'

const deliveryServices = [
  {
    id: 'delivery',
    title: '택배배송',
    description: '배송비 3,000원',
    image: '/images/delivery/delivery.png',
  },
  {
    id: 'pickup',
    title: '매장픽업',
    description: '배송비 무료',
    image: '/images/delivery/pickup.png',
  },
  {
    id: 'today',
    title: '오늘배송',
    description: '오후 주문도 오늘 도착',
    image: '/images/delivery/today-arrival.png',
  },
  {
    id: 'bulk',
    title: '대량주문',
    description: '사업자 전용',
    image: '/images/delivery/bulk-order.png',
  },
]

function HomeDeliverySection() {
  return (
    <section className="home-section">
      <SectionHeader title="다이소 배송" />
      <div className="delivery-service-grid">
        {deliveryServices.map((service) => (
          <DeliveryServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

export default HomeDeliverySection
