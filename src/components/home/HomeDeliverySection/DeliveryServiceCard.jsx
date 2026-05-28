function DeliveryServiceCard({ service }) {
  const ServiceIcon = service.icon
  const descriptionLines = Array.isArray(service.description)
    ? service.description
    : [service.description]
  const iconColorProps = service.id === 'bulk'
    ? {
        primaryColor: 'white',
        secondaryColor: 'rgb(var(--color-white-rgb) / 0.7)',
      }
    : { style: { color: 'white' } }

  return (
    <a className={`delivery-service-card delivery-service-card--${service.id}`} href="/">
      <div className="delivery-service-card__copy">
        <span className="delivery-service-card__eyebrow">{service.eyebrow}</span>
        <strong>{service.title}</strong>
        <p>
          {descriptionLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>
      <ServiceIcon {...iconColorProps} className="delivery-service-card__icon" />
    </a>
  )
}

export default DeliveryServiceCard
