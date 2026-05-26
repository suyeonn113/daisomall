function DeliveryServiceCard({ service }) {
  return (
    <a className={`delivery-service-card delivery-service-card--${service.id}`} href="/">
      <img src={service.image} alt="" />
      <div>
        <strong>{service.title}</strong>
        <p>{service.description}</p>
      </div>
    </a>
  )
}

export default DeliveryServiceCard
