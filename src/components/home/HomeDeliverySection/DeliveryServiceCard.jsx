function DeliveryServiceCard({ service }) {
  const ServiceIcon = service.icon

  return (
    <a className={`delivery-service-card delivery-service-card--${service.id}`} href="/">
      <ServiceIcon className="delivery-service-card__icon" />
      <div>
        <strong>{service.title}</strong>
        <p>{service.description}</p>
      </div>
    </a>
  )
}

export default DeliveryServiceCard
